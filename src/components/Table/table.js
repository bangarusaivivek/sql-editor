import React from 'react';
import './table.styles.css';

const Table = React.memo(function Table({ tableData }) {
    const colHeaders = tableData?.length ? Object.keys(tableData[0]) : [];

    return (
        <>
        { colHeaders.length ?
            <table>
                <thead>
                <tr>
                    { colHeaders.map(item => <th>{item}</th>) }
                </tr>
                </thead>
                <tbody>
                { tableData.map(item => {
                    return (
                        <tr>
                            { colHeaders.map(colItem => <td>{item[colItem]}</td>) }
                        </tr>
                    )
                }) }
                </tbody>
            </table> : <></>
        }
        </>
    )
});

export default Table;