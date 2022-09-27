import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { login } from '../Redux/auth/action';

const Login = () => {
  const [email,setEmail]=useState("eve.holt@reqres.in");
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  console.log("Inside login page",location);
  const comingFrom=location.state.data || "/"

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password})).then(res=>{
        // console.log("After successful login request", res);
        navigate(comingFrom,{replace:true})
      })
    }
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit} >
        <div>
          <label>User Email : </label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label>User Password : </label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type='submit' >Login</button>
      </form>
    </FormWrapper>
  )
}

export default Login;

const FormWrapper=styled.div`
  display:flex;
  width:300px;
  flex-direction:column;
  margin:auto;
  align-items:center;
`