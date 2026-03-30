"use client";
import { useState } from "react";
import WeekDisplay from '@/components/WeekDisplay';
import WeekControls from '@/components/WeekControls';
import { babySizes } from '@/data/babyData';
import ProgressBar from '@/components/ProgressBar';
import BabyFactCard from "../components/BabyFactCard";
import { babyFacts } from "../data/babyFacts";
import DueDateInput from "../components/DueDateInput";

export default function Home() {
  const [week, setWeek] = useState(16);
  const [days, setDays] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Pregnancy Week Tracker
      </h1>

      <WeekDisplay
        week={week}
        days={days}
        babySize={babySizes[week] || "Growing!"} />

      <DueDateInput setWeek={setWeek} setDays={setDays} />
      <ProgressBar week={week} />
      <BabyFactCard week={week} fact={babyFacts[week]} />

      <WeekControls week={week} setWeek={setWeek} />
      
    </main>
  );
}
