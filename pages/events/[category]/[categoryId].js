import Image from 'next/image';

const London = ({ data }) => {
  return (
    <div className='single-event'>
      <div>
        <Image className='card__img' src={data.image} height='350' width='400' alt={data.title} />
      </div>
      <div className='single-event__text'>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
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
