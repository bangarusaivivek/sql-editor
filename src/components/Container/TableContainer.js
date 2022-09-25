import Table from "../Table/table"

function TableContainer({ tables }) {
    const tableJSX = tables.map(table => {
        return (
            <div key={table.name} className="table-container__table">
                <div className="table-container__table-name">{table.name}</div>
                <Table key={table.name} tableData={table.tableRef} />
            </div>
        )
    })
    return (
        <div className="table-container">
            {tableJSX}
        </div>
    )
}

export default TableContainer;