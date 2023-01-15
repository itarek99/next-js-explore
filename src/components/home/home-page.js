import Image from 'next/image';
import Link from 'next/link';

const HomePage = ({ data }) => {
  return (
    <div className='home__items'>
      {data.map((event) => (
        <Link className='card' key={event.id} href={`/events/${event.id}`}>
          <div className='card__image'>
            <Image width='280' height='280' src={event.image} alt={event.title} />
          </div>
          <div className='card__body'>
            <h2 className='card__title'>{event.title}</h2>
            <p className='card__text'>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
