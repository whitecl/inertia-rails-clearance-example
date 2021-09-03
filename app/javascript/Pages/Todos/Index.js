import { useForm } from "@inertiajs/inertia-react";
import React from "react";

const Index = ({ todos }) => {
  const { data, setData, post, processing, reset, errors } = useForm({
    text: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/todos");
    reset()
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <form onSubmit={submit}>
        <input type="text" value={data.text} onChange={e => setData('text', e.target.value)} />
        {errors.text && <div>{errors.text}</div>}
        <button type="submit" disabled={processing}>Add Todo</button>
      </form>
    </div>
  );
};

export default Index;
