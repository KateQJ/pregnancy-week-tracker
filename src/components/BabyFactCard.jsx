export default function BabyFactCard({ week, fact }) {
  // Determine trimester
  let trimester = "";
  if (week <= 13) trimester = "First Trimester";
  else if (week <= 27) trimester = "Second Trimester";
  else trimester = "Third Trimester";

  return (
    <div className="max-w-md bg-white shadow-md rounded-lg p-4 mt-6 text-center">
      <h3 className="text-lg  text-blue-950 font-bold mb-2">Week {week} - {trimester}</h3>
      <p className="text-gray-800">{fact || "Development ongoing..."}</p>
    </div>
  );
}
