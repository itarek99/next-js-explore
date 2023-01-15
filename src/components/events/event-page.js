import Image from 'next/image';
import Link from 'next/link';

const AllEvent = ({ data }) => {
  return (
    <div className='all-events'>
      <h1 className='all-events__title'>Event In Cities</h1>
      <div className='all-events__cards'>
        {data.map((event) => (
          <Link className='all-events__card' key={event.id} href={`/events/${event.id}`}>
            <Image height='392' width='392' src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AllEvent;
