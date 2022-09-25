import React from "react"
import Table from "../Table/table"

const TableContainer = React.memo(function TableContainer({ tables }) {
    const tableJSX = tables.map(table => {
        return (
            <div key={table.name} className="table-container__table">
                <div className="table-container__table-name">{table.name}</div>
                <Table tableData={table.tableRef} />
            </div>
        )
    })
    return (
        <div className="table-container">
            {tableJSX}
        </div>
    )
});

export default TableContainer;