import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-3'>
        <span className='navbar-brand'>
            Ignacio
        </span>
        <button className='btn btn-outline-danger'>
            <span>Salir </span>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    </div>
  )
}
