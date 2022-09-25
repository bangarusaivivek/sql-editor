import { availableTableData } from "../../tableData";
import TableContainer from "./TableContainer";

function AvailableTableContainer() {
    
    return (
        <div className="available-table-container">
            <div className="table-container__header">Available Tables</div>
            <TableContainer tables={availableTableData} />
        </div>
    )
}

export default AvailableTableContainer;