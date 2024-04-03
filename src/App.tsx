import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

import Loader from "./components/Loader";
import "./styles/app.scss"


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transsaction"));


function App() {

  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/transactions" element={<Transactions />} />
      </Routes>
      </Suspense>

    </Router>
  )
}

export default App

//lazy means when my app will run the page is not load primirily it only load when i go to the page
//suspense means during loading the shows loading
