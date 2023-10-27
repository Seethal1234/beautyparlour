import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const role = localStorage.getItem("role");

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <>
      {role === "2" ? (                                                //user
        <section id="nav-bar">
          <div class="topnav">
            <a onClick={myFunction} class="active">
              cheriE
            </a>
            <div id="myLinks">
              <Link to="/">SHOP</Link>
              <Link to="/productview">SHOP</Link>
              <Link to="/myorders">MY ORDERS</Link>
              <a class="nav-link " href="#">
                BLOG
              </a>
              <Link to="/cart">CART</Link>
            </div>
          </div>
        </section>
      ) : role === "3" ? (                                         //employee
        <section id="nav-bar">
          <div class="topnav">
            <a onClick={myFunction} class="active">
              cheriE
            </a>
            <div id="myLinks">
              <a class="nav-link" href="#">
                HOME
              </a>
              <a class="nav-link" href="#">
                VIEW SHOP
              </a>
            </div>
          </div>
        </section>
      ) : (
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <button class="btn btn-outline-success" type="submit">
              Login
            </button>
            <button class="btn btn-outline-success" type="submit">
              REGISTER
            </button>
          </form>
        </nav>
      )}
    </>
  );
}
