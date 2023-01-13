import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

const HomePage = ({ data }) => {
  return (
    <main className={styles.main}>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image width='100' height={'100'} src={event.image} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
