"use client";

import { getPregnancyProgress } from '@/utils/dateUtils';

export default function DueDateInput({ setWeek, setDays }) {
  const handleChange = (e) => {
    const dueDate = new Date(e.target.value);

    const { weeks, days } = getPregnancyProgress(dueDate);

    setWeek(weeks);
    setDays(days);
  };

  return (
    <div className="mt-4 text-center">
      <label className="block mb-2 font-semibold">
        Enter Due Date:
      </label>
      <input
        type="date"
        onChange={handleChange}
        className="border px-3 py-2 rounded"
      />
    </div>
  )
}
