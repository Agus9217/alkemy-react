import React from 'react'

const Login = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(email === '' || password === '') {
      console.log('Los campos no pueden estar vacios')
      return
    }

    if(email !== '' && !regexEmail.test(email)) {
      console.log('Debes escribir un correo valido')
      return
    }
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