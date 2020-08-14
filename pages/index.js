import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { DateTime } from 'luxon'
import {useState, useEffect } from 'react'

export default function Home() {
  const { register, handleSubmit, errors } =useForm()
  const [code, setCode] = useState("")
  const [userData, setUserData] = useState({})

  useEffect(()=>{
    let length           = 6
    let result           = ''
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let charactersLength = characters.length
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if(code.length==0){
      setCode(result)
    }
  })

  const onSubmit = data => {
    setUserData(data);
  }

  const reset = ()=>{
    setUserData({})
    setCode("")
  }

  const header = <>
                  <Head>
                      <title>Ice Cream Company Pte Ltd</title>
                      <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <h1>Ice Cream Company Pte Ltd</h1>
                 </>

  let formBody = {};

  if(Object.keys(userData).length==0){
    formBody = <>
    <h3>Redeem your free ice cream here!</h3>
    <input type="text" placeholder="Name" name="Name" ref={register({required: "Please enter your name!", maxLength: 80})} />
    <input type="text" placeholder="Email" name="Email" ref={register({required: "Please enter a valid email!", pattern: /^\S+@\S+$/i})} />
    <select name="Flavour" ref={register({ required: "Please select a flavour" })}>
      <option value="">Select a flavour</option>
      <option value="Chocolate Ice Cream">Chocolate Ice Cream</option>
      <option value="Strawberry Ice Cream">Strawberry Ice Cream</option>
      <option value="Vanilla Ice Cream">Vanilla Ice Cream</option>
    </select>
    <input type="submit" />
    </>
  }else{
    formBody = <>
    <h3>Thank you for your support, {userData.Name}!</h3>
    <h3>Redeemed at: {DateTime.local().toString()}</h3>
    <h4>Present this token to your nearest ICC outlet</h4>
    <p>Token:<b> {code}</b></p>
    <p>Name: {userData.Name}</p>
    <p>Email: {userData.Email}</p>
    <p>Flavour: {userData.Flavour}</p>
    <input type="reset" value="Reset"/>
    </>
  }
  return(
    <>
    {header}
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
    {formBody}
    </form>
    </>
  )
}
