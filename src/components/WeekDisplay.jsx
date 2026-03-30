import { babySizes } from '@/data/babyData';

export default function WeekDisplay({ week, days, babySize}) {
  
  return (
    <div className='text-center'>
      <h2 className='text-2xl'>Week {week} + {days} days</h2>
      <p className='mt-2'>Baby size: {babySize}</p>
    </div>
  );
}
