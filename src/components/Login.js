import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Login = () => {

  const navigate = useNavigate()
  const swAlert = withReactContent(Swal)

  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(email === '' || password === '') {
      swAlert.fire(
        <h2>Los campos no pueden estar vacios</h2>
      )
      return
    }

    if(email !== '' && !regexEmail.test(email)) {
      swAlert.fire(
        <h2>Debes escribir un correo valido</h2>
      )
      return
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert.fire(
        <h2>credenciales invalidas</h2>
      )
      return
    }


    console.log('OK credenciales enviadas')
    axios.post('http://challenge-react.alkemy.org', { email, password })
    .then(res => {
      swAlert.fire(
        <h2>Login valido</h2>
      )
      const token = res.data.token
      localStorage.setItem('token', token)
      navigate('/listado')
    })
  }

  return (
    <>
      <form onSubmit={ submitHandler }>
        <label>
          <span>Correo electronico:</span> <br />
            <input type='text' name='email' /> 
        </label> <br />
        <label>
          <span>Password:</span> <br />
            <input type='password' name='password' /> 
        </label> <br />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default Login