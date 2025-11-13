export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div
      className={`flex justify-between items-center border-b py-2 ${
        todo.completed ? "opacity-60 line-through" : ""
      }`}
    >
      <div>
        <h3 className="font-semibold">{todo.title}</h3>
        {todo.description && (
          <p className="text-gray-600 text-sm">{todo.description}</p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo)}
          className={`px-3 py-1 rounded ${
            todo.completed
              ? "bg-gray-400 text-white"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}
