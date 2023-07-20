import React from "react";
import { Link } from "react-router-dom";
import Room from "./Room";  
const Home = ()=>{
    return(
    <>
        <p>Ini halaman Home</p>
        <Link to='/room'>
            <button>Room</button>
        </Link>
    </>
    )
}
export default Home;