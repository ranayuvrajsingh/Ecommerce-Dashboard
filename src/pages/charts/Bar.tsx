import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Bar = () => {
  const generateRandomArray = (length: number, min: number, max: number) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  };
  const randomNumbers1 = generateRandomArray(12, 70, 700);
  const randomNumbers2 = generateRandomArray(10, 90, 600);

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data1={randomNumbers1}
            data2={randomNumbers2}
            title1="Products"
            title2="Users"
            bgColor1={`hsl(260,50%,30%)`}
            bgColor2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChart
            data1={randomNumbers1}
            data2={[]}
            title1="Products"
            title2="Users"
            bgColor1={`hsl(160,50%,30%)`}
            bgColor2=" "
            horizontal={true}
            labels={months}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
      </main>
    </div>
  );
};

export default Bar;
