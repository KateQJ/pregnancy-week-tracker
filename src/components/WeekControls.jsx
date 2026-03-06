export default function WeekControls({ week, setWeek }) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => week > 1 && setWeek(week - 1)}
        className="bg-gray-800 px-4 py-2 rounded"
      >
        -
      </button>

      <button
        onClick={() => week < 40 && setWeek(week + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </div>
  );
}
