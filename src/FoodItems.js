import { useState } from "react";

function FoodItem({ item, addToCart }) {
    const [hover, setHover] = useState(false);
    
return (
<div 
onMouseEnter={() => setHover(true)}
onMouseLeave={() => setHover(false)}
style={{
border: "1px solid #ddd",
borderRadius: "10px",
overflow: "hidden",
background: "#fff",
cursor:"pointer",
transform: hover ? "scale(1.05)" : "scale(1)",
boxShadow: hover ? "0 8px rgba(0,0,0,0.2)" : "0 2px 5px rgba(0,0,0,0.1)",
transition:"all 0.2s ease"
}}>
 
<img
src={item.image}
alt={item.name}
style={{ width: "100%", height: "400px", objectFit: "cover", flex: 1,
transform: hover ? "scale(1.1)" : "scale(1)", transition: "0.1s"
}}
/>

<div style={{ padding: "30px",fontSize:"20px" }}>
<h3>{item.name}</h3>
<p style={{ color: "green", fontWeight:"bold" }}>₹{item.price} {item.unit && (<span style={{
    fontSize: "16px"}}>{" "} / {item.unit}</span>
)}
</p>

<button
onClick={() => addToCart(item)}
style={{
width: "100%",
padding: "10px",
background: "green",
color: "#fff",
border: "none",
borderRadius: "5px"
}}
>
Add to Cart
</button>
</div>
</div>
);
}

export default FoodItem;