import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="/">REACT CRUD OPERATION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto me-5">
        <li class="nav-item text-uppercase ">
          <a class="nav-link  navli" href="/">Create</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navli text-uppercase" href="/Read">Read</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navli text-uppercase" href="/Update">Update</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header