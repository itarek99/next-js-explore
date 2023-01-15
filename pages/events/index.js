import AllEvent from '../../src/components/events/event-page';

const AllEventsPage = ({ data }) => {
  return <AllEvent data={data} />;
};
export default AllEventsPage;

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}
