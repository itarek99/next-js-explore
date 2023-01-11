import Link from 'next/link';

const AllEvents = () => {
  return (
    <div>
      <h1>All Events</h1>
      <div>
        <Link href=''>
          <h2>Events In Dhaka</h2>
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
