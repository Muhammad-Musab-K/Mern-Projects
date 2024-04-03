import { useTable, Column, TableOptions } from "react-table"
function TableHOC<T extends {}>(
    columns: Column<T>[],
    data: T[],
    containerClassName: string,
    heading: string) {
    return function HOC() {

        const options: TableOptions<T> = {
            columns,
            data
        }
        const { headerGroups, getTableBodyProps, getTableProps, rows, prepareRow } = useTable(options)

        return (
            <div className="table">
                <h2>{heading}</h2>
                <table className={containerClassName} {...getTableProps()}>
                    <thead>
                        {headerGroups.map((group) => (
                            <tr {...group.getHeaderGroupProps()}>
                                {group.headers.map((columns) => (
                                    <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TableHOC
