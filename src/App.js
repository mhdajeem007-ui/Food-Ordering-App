// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import FoodItem from "./FoodItems";

import burger from "./burger.jpg";
import pasta from "./pasta.jpg";
import pizza from "./pizza.jpg";
import fries from "./fries.png";
import shawarma from "./shawarma.jpg";
import sandwich from "./sandwich.jpg";
import loadedfries from "./loaded-fries.jpg";
import nuggets from "./nuggets.jpg";
import friedchicken from "./fried-chicken.jpg";

function App() {
const [cart, setCart] = useState([]);

const foodItems = [
{ id: 1, name: "Pizza", price: 250, image: pizza },
{ id: 2, name: "Burger", price: 120, image: burger },
{ id: 3, name: "Pasta", price: 180, image: pasta },
{ id: 4, name: "Fries", price: 90, image: fries },
{ id: 5, name: "Shawarma", price: 120, image: shawarma },
{ id: 6, name: "Sandwich", price: 120, image: sandwich },
{ id: 7, name: "Loaded Fries", price: 180, image: loadedfries },
{ id: 8, name: "Nuggets", price: 90, image: nuggets },
{ id: 9, name: "Fried Chicken", price: 999, unit: "10 piece", image: friedchicken },
];

const addToCart = (item) => {
setCart([...cart, item]);
};

const removeFromCart = (index) => {
const newCart = [...cart];
newCart.splice(index, 1);
setCart(newCart);
};

const total = cart.reduce((sum, item) => sum + item.price, 0);

return (
<div
style={{
minHeight: "100vh",
background: "linear-gradient(135deg, #ff7b00, #ffb347)",
fontFamily: "Arial",
padding: "20px",
boxSizing: "border-box",
}}
>
{/* HEADER CONTAINER */}
<div
style={{
position: "sticky",
top: 0,
zIndex: 10,
background: "#fff",
borderRadius: "16px",
padding: "18px 25px",
marginBottom: "20px",
boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
}}
>
<div
style={{
display: "flex",
alignItems: "center",
justifyContent: "space-between",
}}
>
<h2 style={{ margin: 0, color: "#ff7b00" }}>🍔 Menu</h2>

<div style={{ textAlign: "center" }}>
<h1 style={{ margin: 0, fontSize: "36px", color: "#222" }}>
Food Ordering App
</h1>
<p style={{ margin: "6px 0 0", color: "#666" }}>
Delicious Food, Delivered To You!
</p>
</div>

<h2 style={{ margin: 0, color: "#ff7b00" }}>🛒 {cart.length}</h2>
</div>
</div>

{/* MAIN CONTAINER */}
<div
style={{
display: "flex",
gap: "20px",
alignItems: "flex-start",
}}
>
{/* FOOD ITEMS */}
<div style={{ flex: 3 }}>
<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
gap: "20px",
}}
>
{foodItems.map((item) => (
<FoodItem key={item.id} item={item} addToCart={addToCart} />
))}
</div>
</div>

{/* CART */}
<div
style={{
flex: 1,
background: "#fff",
padding: "15px",
borderRadius: "16px",
position: "sticky",
top: "120px",
boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
}}
>
<h2 style={{ marginTop: 0 }}>🛒 Your Cart</h2>

{cart.length === 0 ? (
<p>No items added</p>
) : (
cart.map((item, index) => (
<div
key={index}
style={{
display: "flex",
justifyContent: "space-between",
gap: "10px",

marginBottom: "10px",
borderBottom: "1px solid #ddd",
paddingBottom: "8px",
}}
>
<span>
{item.name} - ₹{item.price}
{item.unit && ` / ${item.unit}`}
</span>

<button
onClick={() => removeFromCart(index)}
style={{
background: "#ee1010",
color: "#fff",
border: "none",
padding: "5px 8px",
borderRadius: "5px",
cursor: "pointer",
}}
>
Remove
</button>
</div>
))
)}

<h3>Total: ₹{total}</h3>

<button
style={{
width: "100%",
padding: "12px",
background: "green",
color: "#fff",
border: "none",
borderRadius: "8px",
cursor: "pointer",
fontWeight: "bold",
}}
>
Proceed to Checkout
</button>
</div>
</div>
</div>
);
}

export default App;