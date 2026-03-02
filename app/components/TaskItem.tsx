interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
}

export default function TaskItem({ task, onDelete, onToggle }: Props) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => onToggle(task.id, task.completed)}
      >
        {task.title}
      </span>

      <button
        className="btn-danger"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}