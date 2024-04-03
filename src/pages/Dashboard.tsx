import AdminSideBar from "../components/AdminSideBar"
import { FaRegBell } from "react-icons/fa"
import { BsSearch } from "react-icons/bs"
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { ChartBar } from "../components/Charts"
import { BiMaleFemale } from "react-icons/bi"
import { DoughnutChart } from "../components/Charts"
import Table from "../components/DashboardTable"
import data from "../assets/data.json"

function Dashboard() {
    return (
        <div className="adminContainer">
            <AdminSideBar />
            <main className="dashboard">
                <div className="bar">
                    <BsSearch />
                    <input type="text" placeholder="serch everythings" />
                    < FaRegBell />
                    <img src="" alt="no img" />
                </div>
                <div className="widgetContainer">
                    <WidgetItem
                        heading="Revenue"
                        amount={true}
                        value={3000}
                        percent={40}
                        color="rgb(0,115,255)" />

                    <WidgetItem
                        heading="Users"
                        value={34500}
                        percent={57}
                        color="rgb(0 198 202)" />

                    <WidgetItem
                        heading="Transactions"
                        value={5640}
                        percent={70}
                        color="rgb(255 196 0)" />

                    <WidgetItem
                        heading="Products"
                        value={45730}
                        percent={30}
                        color="rgb(76 0 255)" />

                </div>
                <section className="chartContainer">
                    <div className="chart">
                        <div>
                            <h2>revenue & transactions</h2>

                            < ChartBar
                                data_2={[300, 144, 433, 655, 237, 755, 190]}
                                data_1={[200, 444, 343, 556, 778, 455, 990]}
                                title_1="Revenue"
                                title_2="Transaction"
                                bgColor_1="rgb(0,115,255)"
                                bgColor_2="rgba(53,162,235,0.8)"
                            />

                        </div>
                    </div>
                    <div className="inventory">
                        <h2>Inventory</h2>
                        <div>
                            <Category
                                value={30}
                                color="rgb(76 0 255)"
                                heading="clothes"
                            />
                            <Category
                                value={60}
                                color="rgb(255 196 0)"
                                heading="laptops"
                            />
                            <Category
                                value={87}
                                color="rgb(0,115,255)"
                                heading="shoes"
                            />
                            <Category
                                value={50}
                                color="rgb(0 198 202)"
                                heading="mobiles"
                            />
                        </div>
                    </div>
                </section>
                <section className="transactionContainer">
                    <div className="transactionChart">
                        <h2>Gender Ratio</h2>
                        <p>
                            <BiMaleFemale />
                        </p>
                        < DoughnutChart
                            data={[9, 19]}
                            backgroundColor={["rgb(76 0 255)", "rgb(0 198 202)"]}
                            labels={["Male", "Female"]}
                            cutout={90}
                        />
                    </div>
                        <Table data={data.transaction} />
                </section>
            </main>
        </div >
    )
}

interface widgetProps {
    heading: string,
    amount?: boolean,
    value: number,
    percent: number,
    color: string
}

const WidgetItem = ({
    heading,
    amount = false,
    value,
    percent,
    color
}: widgetProps) => (
    <article className="widget">
        <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{amount ? `$${value}` : value}</h4>
            {percent > 0 ?
                <span className="green"><HiTrendingUp /> {percent}%{" "}</span>
                : <span className="red"><HiTrendingDown />{percent}%{" "}</span>
            }
        </div>
        <div className="widgetCircle"
            style={{
                background: `conic-gradient(
                    ${color} ${Math.abs(percent / 100) * 360}deg,
                     rgb(255, 255, 255) 0)`
            }}>
            <span>{percent}%</span>
        </div>
    </article>
)

interface categoryProps {
    value: number,
    heading: string,
    color: string
}
const Category = ({ value, heading, color }: categoryProps) => (
    <div className="category">
        <h5>{heading}</h5>
        <div>
            <div style={{
                backgroundColor: `${color}`,
                width: `${value}px`
            }}>

            </div>
        </div>
        <span>{value}%</span>
    </div>
)

export default Dashboard
