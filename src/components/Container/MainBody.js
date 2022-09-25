
import { useCallback, useEffect, useState } from 'react';
import { availableTableData, predefinedQueries } from '../../tableData';
import { getTableFromQuery } from '../api';
import QueryOutputContainer from './QueryOutputContainer';
import TableContainer from './TableContainer';

function MainSQLContainer() {
    const [sqlQuery, setSqlQuery] = useState("");
    const [tabId, setTabId] = useState(1);
    const [outputTabId, setOutputTabId] = useState(1);
    const [queryError, setQueryError] = useState("");
    const [queryTableData, setQueryTableData] = useState([]);
    const [loading, setLoading] = useState(false);

    const processSQLQuery = useCallback(async (query) => {
        try {
            setQueryError("");
            setQueryTableData([]);
            setLoading(true);
            if (!query.trim()) {
                throw new Error("Error: No query found!");
            }
            if (!query.toLowerCase().includes("select") || !query.toLowerCase().includes("from")) {
                throw new Error("Error: syntax error!");
            }

            const res = await getTableFromQuery(query);
            if (res?.success) {
                setQueryTableData(res.data);
            } else {
                setQueryError(res.error);
            }
            setLoading(false);
        } catch(e) {
            setLoading(false);
            setQueryError(e.message);
        }
    }, [])

    const predefinedQueriesJSX = useCallback(predefinedQueries.map(item => {
        return (
            <div className='predefined-query-block' onClick={e => processSQLQuery(item)}>
                {item}
            </div>
        )
    }), [tabId])
   
    return (
        <div className="main-sql-container">
            <div className="main-sql-container__editor">
                <div className="main-sql-container__editor-topbar">
                    <div className="main-sql-container__tab-container">
                    <a className={`${tabId === 1 ? "active" : ""} main-sql-container__tab flex-center `} onClick={e => setTabId(1)}>Input</a>
                    <a className={`${tabId === 2 ? "active" : ""} main-sql-container__tab flex-center `} onClick={e => setTabId(2)} >Queries</a>
                    </div>
                    <button className="main-sql-container__editor-topbar-btn" onClick={(e) => processSQLQuery(sqlQuery)}>Run SQL</button>
                </div>
                <div className="main-sql-container__input-container">
                    { tabId === 1 ?
                    <textarea value={sqlQuery} onChange={e => setSqlQuery(e.target.value)} placeholder="write sql query"></textarea> :
                    <div className='main-sql-container__predefined-query-container'>
                        <div className='predefined-query__header'>-- Click any of query</div>
                        {predefinedQueriesJSX}
                    </div>
                    }
                </div>
            </div>
            <div className="main-sql-container__output">
                <div className='table-container__header'>Output</div>
                <QueryOutputContainer queryTableData={queryTableData} loading={loading} queryError={queryError} />
            </div>
            <div className="main-container__mobile-output-wrapper">
                <div className="mobile-output-wrapper__tabs-container">
                    <a className={`${outputTabId === 1 ? "active" : ""} mobile-output-wrapper__tab flex-center`} onClick={e => setOutputTabId(1)}>Output</a>
                    <a className={`${outputTabId === 2 ? "active" : ""} mobile-output-wrapper__tab flex-center`} onClick={e => setOutputTabId(2)}>Available Tables</a>
                </div>
                <div className="main-container__mobile-output-table">
                    {
                        outputTabId === 1 ? 
                        <QueryOutputContainer queryTableData={queryTableData} loading={loading} queryError={queryError} /> :
                        <TableContainer tables={availableTableData} />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default MainSQLContainer;