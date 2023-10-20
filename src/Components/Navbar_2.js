import React from 'react'

function Navbar_2() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
      <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            PizzaEmpire <i className='fab fa-typo3' />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Orders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Support</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Profile</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Sign In</a></li>
                  <li><a class="dropdown-item" href="#">Sign Up</a></li>
                </ul>
              </li>
          </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search" />
                <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
      </div>
    </nav>
  )
}

export default Navbar_2
