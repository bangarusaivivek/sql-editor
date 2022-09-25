import { tab } from "@testing-library/user-event/dist/tab";
import { availableTableData } from "../tableData";

const getTableFromQuery = async (query) => {
    try {
        const querySplit = query.toLowerCase().split("select");
        const queryObj = [];
        for (let i=0; i<querySplit.length; i++) {
            if (querySplit[i]) {
                const split1 = querySplit[i].split("from");
                const fieldNames = split1 ? split1[0].trim().split(",") : null;
                if (fieldNames.length === 0) {
                    throw new Error("Error: Syntax error");
                }
                let condition = null;
                if (split1[1].toLowerCase().includes("where")) {
                    const split2 = split1[1].split("where");
                    condition = split2.length > 1 ? split2[1].trim() : null;
                    if (!condition) {
                        throw new Error("Error: Syntax error");
                    }
                    const splitCondition = condition.trim().split("=");
                    if (splitCondition.length < 1) {
                        throw new Error("Error: Syntax error");
                    }
                    condition = splitCondition;
                    
                }
                const tableName = availableTableData.filter(item => split1[1].trim().toLowerCase().includes(item.name.toLowerCase()));
                if (tableName.length === 0) {
                    throw new Error("Error: No Tables Found!");
                }
                const tempObj = {
                    fieldNames: fieldNames,
                    tableName: tableName[0].name,
                    condition: condition
                }
                queryObj.push(tempObj);
            }
        }
        if (queryObj.length === 0) {
            throw new Error("Error: No Tables Found!");
        }
        const tempQueryTable = [];

        for (let i=0; i<queryObj.length; i++) {
            const reqTable = availableTableData.filter(item => queryObj[i].tableName.toLowerCase() === item.name.toLowerCase())[0];
            const tableFields = Object.keys(reqTable.tableRef[0]);
            if (!queryObj[i].fieldNames.includes("*")) {
                for (let field of queryObj[i].fieldNames) {
                    if (!tableFields.includes(field.trim())) {
                        throw new Error("Error: No such column: " + field);
                    }

                    if (queryObj[i].condition.length > 1 && !tableFields.includes(queryObj[i].condition[0].trim())) {
                        throw new Error("Error: No such column in where condition: " + field);
                    }
                }
                let tableArray = [];

                if (queryObj[i]?.condition.length > 1) {
                    tableArray = reqTable.tableRef.filter(item => queryObj[i].condition[1].includes(item[queryObj[i].condition[0].trim()].toLowerCase()));
                }

                if (tableArray.length == 0) {
                    throw new Error("SQL query successfully executed. However, the result is empty.")
                }

                tableArray = tableArray.map(item => {
                    let tempObj = {};
                    queryObj[i].fieldNames.forEach(field => {
                        tempObj[field.trim()] = item[field.trim()]
                    })
                    return tempObj
                })
                
                
                tempQueryTable.push({
                    name: reqTable.name,
                    tableRef: tableArray
                })
            } else {
                let tableArray;
                if (queryObj[i]?.condition?.length > 1) {
                    tableArray = reqTable.tableRef.filter(item => queryObj[i].condition[1].includes(item[queryObj[i].condition[0].trim()].toLowerCase()));
                } else {
                    tableArray = reqTable.tableRef
                }

                if (tableArray.length == 0) {
                    throw new Error("SQL query successfully executed. However, the result is empty.")
                }

                tempQueryTable.push({
                    name: reqTable.name,
                    tableRef: tableArray
                });
            }
        }

        return {
            success: true,
            data: tempQueryTable,
            error: ""
        }
    } catch (e) {
        return {
            success: false,
            data: [],
            error: e.message
        }
    }
}

export { getTableFromQuery };