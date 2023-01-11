import Link from 'next/link';

const Category = () => {
  return (
    <div>
      <h1>Category</h1>
      <Link href='/events/e1'>Event 1</Link>
      <Link href='/events/e2'>Event 2</Link>
      <Link href='/events/e3'>Event 3</Link>
    </div>
  );
};
export default Category;
