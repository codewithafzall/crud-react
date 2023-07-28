import React from 'react'
import { a } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="/">REACT CRUD OPERATION</a>
    <buthrefn class="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="hrefggle navigation">
      <span class="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auhref me-5">
        <li class="nav-item text-uppercase ">
          <a class="nav-link  navli" href="/">Create</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navli text-uppercase" href="#read">Read</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navli text-uppercase" href="#update">Update</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header