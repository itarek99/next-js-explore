import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ data }) => {
  return (
    <div className='home__items'>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image width='100' height={'100'} src={event.image} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
