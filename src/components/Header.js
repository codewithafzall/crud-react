import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark py-4">
  <div class="container-fluid">
    <a class="logo ms-4" href="/">REACT CRUD OPERATION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto py-4">
        <li class="nav-item me-5">
          <a class="navli m-3" href="/">ADD DATA</a>
          <a class="navli m-3" href="/Read">DATA TABLE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header