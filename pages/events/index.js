import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({ data }) => {
  return (
    <div>
      <h1>All Events</h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image height='100' width='200' src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AllEvents;

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}
