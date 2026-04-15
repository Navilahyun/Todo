import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, toggleComplete, deleteTodo }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList