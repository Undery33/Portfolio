import Home from '../components/home/home';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <>
      <Home />
      <Link href="/portfolio"/>
    </>
  );
}
