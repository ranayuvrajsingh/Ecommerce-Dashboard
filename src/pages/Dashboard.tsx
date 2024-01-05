import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";
const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_Z8NkJTKQmhsyBuGnRsAgd7TiOPuaf7Raw&usqp=CAU";
const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell />
          <img src={userImg} alt=" " />
        </div>
        <section className="widget-container">
          <WidgetItem
            percent={10}
            value={3400000}
            heading="Revenue"
            color="rgba(0,115,225,0.9)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgba(0,198,202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgba(225,196,0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgba(75,76,0)"
          />
        </section>
        {/* {----------------------------------------Graph Section-------------- } */}

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data1={[300, 201, 112, 2, 435, 87, 9]}
              data2={[200, 401, 212, 10, 235, 87, 90]}
              bgColor1="rgba(256,122,45)"
              bgColor2="rgba(25,125,205)"
              title1="Revenue"
              title2="$Transaction"
            />
            {/* {--Graph-- } */}
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((cat) => (
                <CategoryItem
                  key={cat.heading}
                  heading={cat.heading}
                  value={cat.value}
                  color={`hsl(${cat.value * 6},${cat.value}%,50%)`}
                />
              ))}

              {/*
               */}
            </div>
          </div>
        </section>

        {/* {--------------------------------------------Donut Chart } */}
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[50, 20]}
              backgroundColor={["hsl(390,82%,56%)", "rgba(193,162,235,0.8)"]}
              cutout={90}
            />
            {/* {--chart } */}
            <p>
              <BiMaleFemale />
            </p>
          </div>

          <Table data={data.transaction} />
          {/* {Table } */}
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  amount = false,
  color,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percent) / 100) * 360
        }deg,rgb(255,255,255) 0)`,
      }}
    >
      <span style={{ color: `${color}` }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: `${color}`, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
