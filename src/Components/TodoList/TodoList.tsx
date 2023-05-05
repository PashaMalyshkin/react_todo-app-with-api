import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

interface Props {
  todos: Todo[],
  onDelete: (id: number) => void;
}
export const TodoList: React.FC<Props> = React.memo(({
  todos,
  onDelete,
}) => {
  return (
    <section className="todoapp__main">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
});
