export function getPregnancyProgress(dueDate) {
  const today = new Date();

  const diffTime = dueDate - today;

  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  const totalDaysPregnant = 280 - diffDays; // 40 weeks * 7 days

  const weeks = Math.floor(totalDaysPregnant / 7);
  const days = Math.floor(totalDaysPregnant % 7);

  // Clamp values
  const safeWeeks = Math.min(Math.max(weeks, 1), 40);

  return {
    weeks: safeWeeks,
    days: days < 0 ? 0 : days,
  };
}
