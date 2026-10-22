import { useState } from "react";
import cookieImg from "../assets/cookie.png"

export default function Clicker() {
    const [count, setCount] = useState(0)
  return (
    <>
      <p>Current Cookies: {count}</p>
      <button  onClick={() => setCount ((count) => count + 1)}>
        <img src={cookieImg} alt="Cartoony cookie" style={{width: "10vw"}}/>
      </button>
    </>
  );
}