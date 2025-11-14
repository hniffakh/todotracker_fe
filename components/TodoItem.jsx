export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg shadow-sm border mb-3
        ${todo.completed ? "bg-gray-100 text-gray-500" : "bg-white text-gray-800"} 
        transition`}
    >
      <div>
        <h3 className={`font-bold ${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </h3>

        {todo.description && (
          <p className={`text-sm ${todo.completed ? "line-through" : ""}`}>
            {todo.description}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo)}
          className={`px-3 py-1 rounded-lg text-white ${todo.completed
              ? "bg-gray-400 hover:bg-gray-500"
              : "bg-green-500 hover:bg-green-600"
            }`}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}