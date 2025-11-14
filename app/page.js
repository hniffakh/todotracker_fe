"use client";

import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}/todos`);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add Data
  const addTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  // Delete Data
  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  // Toggle status completed
  const toggleCompleted = async (todo) => {
    await fetch(`${API_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
        completed: !todo.completed,
      }),
    });
    fetchTodos();
  };

  return (
    <div>
      <form onSubmit={addTodo} className="mb-6">
        <input
          type="text"
          placeholder="Judul Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2 rounded text-gray-800 placeholder-gray-500 focus:placeholder-gray-300 focus:text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition"
        />
        <textarea
          placeholder="Deskripsi (opsional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-2 rounded text-gray-800 placeholder-gray-500 focus:placeholder-gray-300 focus:text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Tambah Todo
        </button>
      </form>

      <div>
        {Array.isArray(todos) ? (
          todos.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada todo</p>
          ) : (
            todos
              .slice()
              .sort((a, b) => a.completed - b.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={deleteTodo}
                  onToggle={toggleCompleted}
                />
              ))
          )
        ) : (
          <p className="text-red-500">Error: Data dari server tidak valid!</p>
        )}
      </div>
    </div>
  );
}
