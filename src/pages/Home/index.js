import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Bem-vindo ao meu website!</h1>
      <h2 className="text-2xl font-semibold">Se você chegou aqui é porque o login deu certo!</h2>
      <Link to="/logout" className="text-blue-600 hover:text-blue-900 transition duration-300 ease-in-out">Logout</Link>
    </>
  )
}

export default Home