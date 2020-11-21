import Link from 'next/link';
import { Article } from 'components/Article';

export default function About() {
  return (
    <main className='max-w-4xl mx-auto py-8'>
      <div className='p-4 flex'>
        <Link href='/'>
          <a className='mr-4'>home</a>
        </Link>
        <Link href='/about'>
          <a>about</a>
        </Link>
      </div>
      <div className='px-4 py-8 flex items-center justify-center w-full'>
        <Article>
          <h4>About</h4>
          <h1>Our story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo tempore provident odio ratione itaque
            quo voluptatum veritatis, quos vitae, fuga porro sunt eum consequatur numquam delectus recusandae
            perferendis velit.
          </p>
        </Article>
      </div>
    </main>
  );
}
