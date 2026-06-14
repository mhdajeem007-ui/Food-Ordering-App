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

function App() {
  const [cart, setCart] = useState([]);

  const foodItems = [
    { id: 1, name: "Pizza", price: 250, image: pizza },
    { id: 2, name: "Burger", price: 120, image: burger },
    { id:3, name: "Pasta", price: 180, image: pasta },
    {id:4, name: "Fries", price: 90, image: fries },
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
    <div style={{ 
      height: "100vh",
    flexDirection:"coloumn",
    boxSizing:"border-box",
    padding: "20px", 
    fontFamily: "Arial",
    // overflow:"hidden"
    }}>
      <h1 style={{ textAlign: "center", margin:"5px",fontFamily:"bold"}}> Food Ordering App</h1>
      
      <p style={{ textAlign:"center",marginTop:"5px"}}>Delicious Food, Delivered To You!</p>
      <div style={{ display:"flex",
         gap:"10px",
         overflow:"hidden"
         }}>
       <div style={{ flex:2 }}>
        <h2>🍔 Menu</h2>

        <div style={{ flex: 2, 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap:"20px"}}>

        {foodItems.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      </div>
      <div style={{flex: 1, 
        border:"1px solid #ddd", 
        padding:"10px", 
        borderRadius:"10px",
        background:"#f9f9f9",
        display:"flex",
        flexDirection:"column",
        height:"100%"
        }}>

      <h2>🛒Your Cart</h2>
      <div 
      style={{
        flex:1,
        overflowY:"auto",
        marginBottom:"10px"
      }}>
       
        {cart.length === 0 ? ( 
          <p>No items added</p>
        ) : (

      cart.map((item, index) => (
        <div 
        key={index} 
        style={{
          display:"flex",
           alignItems:"center",
           marginBottom:"10px",
           justifyContent:"space-between"}}>
         
        <div style={{ display:"flex", alignItems:"center"}}>
            <img src={item.image} alt="" style={{ width:"50px", marginRight:"10px"}}/>
            
              <span> {item.name} - ₹{item.price} </span>
            </div>
            
          <button onClick={() => removeFromCart (index)}
            style={{
              background:"#ee1010",
              color:"#fff",
              border:"none",
              padding:"5px 10px",
              borderRadius:"5px",
              cursor:"pointer"
            }}
            >Remove</button>
          </div>
      ))
    )}
    </div>

    <div>
      <h3>Total: ₹{total}</h3>
      <button style={{
        width:"100%",
        padding:"10px",
        background:"green",
        color:"#fff",
        border:"none",
        borderRadius:"5px",
        cursor:"pointer"
      }}
      >
         Proceed to Checkout</button>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;





