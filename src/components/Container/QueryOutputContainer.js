import React from 'react';
import TableContainer from "./TableContainer";

const QueryOutputContainer = React.memo(function QueryOutputContainer({ queryTableData, loading, queryError }) {
    return (
        <>
            {
                loading ? <div>Executing Query ...</div> :
                (queryTableData.length > 0 && !queryError) ?  <TableContainer tables={queryTableData} /> : <div className='query-error'>{queryError}</div>
            }
        </>
    )
});

export default QueryOutputContainer;