import Link from 'next/link';

const AllEvents = ({ title }) => {
  return (
    <div>
      <h1>All Events</h1>
      <div>
        <Link href=''>
          <h2>Events In {title}</h2>
        </Link>
        <Link href=''>
          <h2>Events In San Francisco</h2>
        </Link>
        <Link href=''>
          <h2>Events In Barcelona</h2>
        </Link>
      </div>
    </div>
  );
};
export default AllEvents;

export function getServerSideProps() {
  return {
    props: {
      title: 'Hello World',
    },
  };
}
