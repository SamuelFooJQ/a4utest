import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { DateTime } from "luxon";

function App() {
  const { register, handleSubmit, errors } =useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Ice Cream Company Pte Ltd</h1>
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
      <p>{DateTime.local().toString()}</p>
    </form>
  );
}

export default App;
