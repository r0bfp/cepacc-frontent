import React, { useState, useEffect } from "react";
import { TableColumn, TableContainer, TableContent, TableHead, TableRow } from "./style";


export default function Table({tableHead, tableData}) {
    const [sortedTableData, setSortedTableData] = useState(tableData);

    useEffect(() => {
        setSortedTableData(tableData);
    }, []);

    
    // function orderTable() {
    //     console.log(sortedTableData.sort(function(a,b) {
    //         return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    //     }))
    // }


    return (
        <TableContainer>
            <TableContent>
                <thead>
                    <TableRow>
                        {
                            tableHead.map((element, index) => (
                                <TableHead key={index} onClick={orderTable}>
                                    {element}
                                </TableHead>
                            ))
                        }
                    </TableRow>
                </thead>
                <tbody>
                    {
                        sortedTableData.map((columnsObject, rowIndex) => (
                            <TableRow key={rowIndex} data-row-index={rowIndex}>
                                {
                                    Object.values(columnsObject).map((columnValue, columnIndex) => (
                                        <TableColumn key={columnIndex}>{columnValue}</TableColumn>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </tbody>
            </TableContent>

        </TableContainer>
    )
}