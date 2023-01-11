import { useRouter } from 'next/router';

const London = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  return <h1>Funny Event In {eventId}</h1>;
};
export default London;
