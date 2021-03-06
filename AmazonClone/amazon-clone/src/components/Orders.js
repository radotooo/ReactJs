import React, { useEffect, useState } from "react";
import "../styles/orders.css";
import { useStateValue } from "../store/StateProvider";
import { db } from "../store/firebase"
import Order from "./Order"


function Orders() {

  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot => {
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()

          })))
        })
    } else {
      setOrders([])
    }

  }, [user])
  console.log(orders);

  return (
    <div className="orders">
      <div className="orders__container">
        <h1>Your Orders</h1>
        <div className='orders__order'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Orders;
