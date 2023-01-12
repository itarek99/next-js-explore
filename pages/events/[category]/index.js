import Link from 'next/link';

const EventCity = ({ data }) => {
  return (
    <div>
      <h1>Events City </h1>

      {data.map((item) => (
        <Link key={item.id} href='/events/e1'>
          {item.title}
        </Link>
      ))}
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
    },
  };
};
