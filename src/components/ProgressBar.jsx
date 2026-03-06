export default function ProgressBar({ week }) {
  const totalWeeks = 40;
  const progressPercent = (week / totalWeeks) * 100;

  return (
    <div className="w-full max-w-md bg-gray-200 rounded-full h-6 mt-4">
      <div
        className="bg-green-600 h-6 rounded-full text-white text-center font-bold"
        style={{
          width: `${progressPercent}%`,
          transition: "width 0.3s ease-in-out"
        }}
      >
        {Math.round(progressPercent)}%
      </div>
    </div>
  );
}
