export default function ProgressBar({ week }) {
  const totalWeeks = 40;
  const progressPercent = (week / totalWeeks) * 100;
  const trimesterColor =
  week <= 13 ? "bg-blue-400" :
  week <= 27 ? "bg-green-600" :
  "bg-pink-400";

  return (
    <div className="w-full max-w-md bg-gray-200 rounded-full h-6 mt-4">
      <div
        className={`${trimesterColor} h-6 rounded-full text-white text-center font-bold`}
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
