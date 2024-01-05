import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://www.shutterstock.com/image-photo/white-sneaker-sport-shoe-on-260nw-2155395817.jpg";

const orderItems: OrderItemType[] = [
  { name: "Nike Shoes", photo: img, _id: "qweryuio", quantity: 4, price: 2000 },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Yuvraj",
    address: "77 Black Street",
    city: "Neyword",
    state: "Nevada",
    county: "India",
    pincode: 823764,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000,
    orderItems,
    _id: "wertyuio",
  });
  const {
    name,
    address,
    city,
    county,
    state,
    pincode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="product-management">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>
          <div className="order-item">
            {order.orderItems.map((i) => (
              <ProductCard
                name={i.name}
                photo={i.photo}
                _id={i._id}
                quantity={i.quantity}
                price={i.price}
              />
            ))}
          </div>
        </section>
        <article className="shipping-card-info">
          <h1>Order Info</h1>
          <div className="user-info">
            <h5>User Info</h5>
            <p>Name : {name}</p>
            <p>
              Address : {`${address}, ${city},${state}${county}, ${pincode}`}
            </p>
          </div>
          <div className="user-info">
            <h5>Amount Info</h5>
            <p>SubTotal : {subtotal}</p>
            <p>Shipping-Charges : {shippingCharges}</p>
            <p>Tax : {tax}</p>
            <p>Discount : {discount}</p>
            <p>Total : {total}</p>
          </div>

          <div className="user-info">
            <h5
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              Status Info
            </h5>
            <p>
              Status :{" "}
              <span
                className={
                  status === "Delivered"
                    ? "purple"
                    : status === "Shipped"
                    ? "green"
                    : "red"
                }
              >
                {status}
              </span>
            </p>
          </div>
          <button
            className={
              status === "Delivered"
                ? "purple"
                : status === "Shipped"
                ? "green"
                : "red"
            }
            onClick={updateHandler}
          >
            Process Status
          </button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price}
    </span>
  </div>
);

export default TransactionManagement;
