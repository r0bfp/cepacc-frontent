import React, { useState, useEffect } from "react";
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { TableColumn, TableContainer, TableContent, TableHead, TableRow } from "./style";


export default function Table({tableHead, tableData, handleRowClick}) {
    const [sortedTableData, setSortedTableData] = useState(tableData);
    const [sortedBy, setSortedBy] = useState({column: null, columnIndex: null, asc: true});

    useEffect(() => {
        setSortedTableData(tableData);
    }, [tableData]);

    function sortTable(columnIndex) {
        const tableColumnsAsArray = Object.keys(tableData[0]);
        const sortedColumn = tableColumnsAsArray[parseInt(columnIndex)];

        setSortedBy({column: sortedColumn, columnIndex: parseInt(columnIndex), asc: !sortedBy.asc});

        setSortedTableData([...tableData].sort((a, b) => {
            if (a[sortedColumn] < b[sortedColumn]) {
                return sortedBy.asc ? -1 : 1;
            }

            if (a[sortedColumn] > b[sortedColumn]) {
                return sortedBy.asc ? 1 : -1;
            }

            return 0;
        }));
    }

    return (
        <TableContainer>
            <TableContent>
                <thead>
                    <TableRow>
                        {
                            tableHead &&
                            tableHead.map((element, index) => (
                                <TableHead key={index} onClick={() => sortTable(index)}>
                                    {element}
                                    {
                                        sortedBy.columnIndex === index && (
                                            sortedBy.asc ?
                                            <CaretUpOutlined/> :
                                            <CaretDownOutlined/>
                                        )
                                    }
                                </TableHead>
                            ))
                        }
                    </TableRow>
                </thead>
                <tbody>
                    {
                        sortedTableData &&
                        sortedTableData.map((columnsObject, rowIndex) => (
                            <TableRow key={rowIndex} data-row-index={rowIndex} onClick={() => handleRowClick && handleRowClick()}>
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