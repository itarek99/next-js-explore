import Image from 'next/image';
import Link from 'next/link';

const EventCity = ({ data, cityName }) => {
  return (
    <div className='event-city'>
      <h1 className='event-city__title'>Events {cityName}</h1>

      <div className='event-city__items'>
        {data.map((item) => (
          <Link className='event-city__item' key={item.id} href={`/events/${item.city}/${item.id}`}>
            <Image src={item.image} alt={item.title} height='150' width='150' />
            <h2>{item.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EventCity;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        category: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const { allEvents } = await import('/data/data.json');

  const id = context?.params?.category;
  const data = allEvents.filter((event) => event.city === id);

  return {
    props: {
      data,
      cityName: id,
    },
  };
};
