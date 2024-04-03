import { RiDashboard2Fill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillFileText } from "react-icons/ai"
import { FaChartBar, FaChartLine, FaChartPie, FaStopwatch, FaGamepad } from "react-icons/fa"

import { IoIosPeople } from "react-icons/io"
import { Location, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { IconType } from "react-icons"

function AdminSideBar() {

    const location = useLocation()
    return (
        <aside>
            <h2>Logo</h2>
            <DivOne location={location} />
            <DivTwo location={location} />
            <DivThree location={location} />
        </aside >
    )
}

interface LiProps {
    url: string,
    text: string,
    location: Location,
    Icon: IconType
}

const Li = ({ url, text, location, Icon }: LiProps) => (
    <li style={{
        backgroundColor: location.pathname.includes(url)
            ? "rgba(0,115,255,0.1)"
            : "white"
    }}>
        <Link to={url}
            style={{
                color: location.pathname.includes(url)
                    ? "rgba(0,115,255)"
                    : "black",
               
            }} >
            <Icon />
            {text}
        </Link>
    </li>
)

const DivOne = ({ location }: { location: Location }) => (
    <div>
        <h5>Dashboard</h5>
        <ul>
            <Li
                text="Dashboard"
                url="/admin/dashboard"
                Icon={RiDashboard2Fill}
                location={location}
            />
            <Li text="Products"
                url="/admin/products"
                Icon={RiShoppingBag3Fill}
                location={location}
            />
            <Li text="Customers"
                url="/admin/customers"
                Icon={AiFillFileText}
                location={location}
            />
            <Li text="Transactions"
                url="/admin/transactions"
                Icon={IoIosPeople}
                location={location}
            />
        </ul>
    </div>
)

const DivTwo = ({ location }: { location: Location }) => (
    <div>
        <h5>Chart</h5>
        <ul>
            <Li
                text="Bar"
                url="/admin/chart/bar"
                Icon={FaChartBar}
                location={location}
            />
            <Li
                text="Pie"
                url="/admin/chart/pie"
                Icon={FaChartPie}
                location={location}
            />
            <Li
                text="Line"
                url="/admin/chart/line"
                Icon={FaChartLine}
                location={location}
            />

        </ul>
    </div>
)
const DivThree = ({ location }: { location: Location }) => (
    <div>
        <h5>Apps</h5>
        <ul>
            <Li
                text="StopWatch"
                url="/admin/app/stopwatch"
                Icon={FaStopwatch}
                location={location}
            />
            <Li text="Coupon"
                url="/admin/app/coupon"
                Icon={RiCoupon3Fill}
                location={location}
            />
            <Li text="Toast"
                url="/admin/app/toast"
                Icon={FaGamepad}
                location={location}
            />

        </ul>
    </div>
)


export default AdminSideBar
