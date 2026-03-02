import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
}

export default function TaskList({ tasks, onDelete, onToggle }: Props) {
  if (tasks.length === 0) {
    return <p style={{ marginTop: 20 }}>No tasks found.</p>;
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}