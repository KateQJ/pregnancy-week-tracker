"use client";
import { useState } from "react";
import WeekDisplay from '@/components/WeekDisplay';
import WeekControls from '@/components/WeekControls';
import { babySizes } from '@/data/babyData';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  const [week, setWeek] = useState(16);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Pregnancy Week Tracker
      </h1>

      <WeekDisplay week={week} babySize={babySizes[week] || "Growing!"} />

      <ProgressBar week={week} />

      <WeekControls week={week} setWeek={setWeek} />
      
    </main>
  );
}
