import { Inter } from '@next/font/google';
import Head from 'next/head';
import Header from '../src/components/header/Header';
import HomePage from '../src/components/home/home-page';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Explore Next JS</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <HomePage data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories,
    },
  };
}
