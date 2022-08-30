import React from 'react'
export default function Navbar(props){
  
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">Welcome</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active text-light" aria-current="page" href="/">Главная</a>
              <a className="nav-link text-light" href="/">Рекомендуемые</a>
              <a className="nav-link text-light" href="/">Цена</a>
              <a className="nav-link text-light" href='/'>Отключенная</a>
            </div>
          </div>
        </div>
      </nav>
    )
}