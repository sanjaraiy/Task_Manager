interface Props {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function FilterBar({
  search,
  status,
  onSearchChange,
  onStatusChange
}: Props) {
  return (
    <div className="filters">
      <input
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}