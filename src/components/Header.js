import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
  <div class="container-fluid">
    <NavLink class="navbar-brand logo" to="/">REACT CRUD OPERATION</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto me-5">
        <li class="nav-item text-uppercase ">
          <NavLink class="nav-link  navli" to="/">Create</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link navli text-uppercase" to="/read">Read</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link navli text-uppercase" to="/update">Update</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header