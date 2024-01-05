import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Bar from "./pages/charts/Bar";
import Pie from "./pages/charts/Pie";
import Line from "./pages/charts/Line";
import Stopwatch from "./pages/apps/Stopwatch";
import Coupon from "./pages/apps/Coupon";
import Toss from "./pages/apps/Toss";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Product = lazy(() => import("./pages/Product"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit To Dashboard</button>
              </Link>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/product" element={<Product />} />

          {/* {Charts } */}
          <Route path="/admin/chart/bar" element={<Bar />} />
          <Route path="/admin/chart/pie" element={<Pie />} />
          <Route path="/admin/chart/line" element={<Line />} />

          {/* {Apps } */}

          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* {--------Management } */}

          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
