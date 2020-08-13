import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, errors } =useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Ice Cream Company Pte Ltd</h1>
      <h3>Redeem your free ice cream here!</h3>
      <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <select name="Flavour" ref={register({ required: true })}>
        <option value="Chocolate Ice Cream">Chocolate Ice Cream</option>
        <option value="Strawberry Ice Cream">Strawberry Ice Cream</option>
        <option value="Vanilla Ice Cream">Vanilla Ice Cream</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default App;
