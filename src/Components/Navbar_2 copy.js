import React from 'react'

function Navbar_2() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
      <a class="navbar-brand" href="javascript:void(0)">Logo</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Sign In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Sign Up</a>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
      </form> */}
    </nav>
  )
}

export default Navbar_2
