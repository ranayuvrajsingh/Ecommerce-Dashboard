import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import { categories } from "../../assets/data.json";
const Pie = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="chart-container">
        <h1>Pie & Doughnut Chart</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(0, 90%, 55%)`,
                `hsl(110,80%,50%)`,
                `hsl(253, 100%, 64%)`,
              ]}
              offset={[5, 15, 30]}
            />
          </div>
          <h2>Product Category Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 7}, ${i.value}%, 55%)`
              )}
              offset={[5, 15, 30, 45]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["InStock", "OutOfStock"]}
              data={[20, 12]}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 6}, ${i.value}%, 55%)`
              )}
              offset={[5, 15]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[20, 12, 50, 30, 20]}
              backgroundColor={[
                `hsl(0, 90%, 55%)`,
                `hsl(110, 80%, 50%)`,
                `hsl(253, 100%, 64%)`,
                `hsl(180, 50%, 60%)`,
                `rgb(47, 0, 225)`,
              ]}
              offset={[5, 15, 10, 15, 25]}
              cutout={"60%"}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult(20 - 40)",
                "Older(Above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users age Group</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 2}, ${i.value}%, 55%)`
              )}
              offset={[5, 15]}
              cutout={"70%"}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pie;
