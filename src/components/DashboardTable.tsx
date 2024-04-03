import { Column } from "react-table"
import TableHOC from "./TableHOC"


interface DataType {
    id: string,
    amount: number,
    quantity: number,
    discount: number,
    status: string
}

const columns: Column<DataType>[] = [
    {
        Header: "Id",
        accessor: "id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },

]
function DashboardTable({ data = [] }: { data: DataType[] }) {
    return TableHOC<DataType>(
        columns,
        data,
        "TransactionBox",
        "Top Transaction"
    )();
}

export default DashboardTable
