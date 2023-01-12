import Image from 'next/image';

const London = ({ data }) => {
  return (
    <div>
      <Image src={data.image} height='300' width='300' alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};
export default London;

export const getStaticPaths = async () => {
  const { allEvents } = await import('/data/data.json');

  const allPaths = allEvents.map((event) => {
    return {
      params: {
        category: event.city,
        categoryId: event.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { allEvents } = await import('/data/data.json');
  const id = context?.params?.categoryId;

  const currentEvent = allEvents.find((event) => event.id === id);

  return {
    props: {
      data: currentEvent,
    },
  };
};
