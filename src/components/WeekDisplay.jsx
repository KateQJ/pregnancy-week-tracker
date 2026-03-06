export default function WeekDisplay({ week, babySize }) {
  return (
    <div className='text-center'>
      <h2 className='text-2xl'>Week {week}</h2>
      <p className='mt-2'>Baby size: {babySize}</p>
    </div>
  );
}
