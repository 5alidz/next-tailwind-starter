import Link from 'next/link';
import { Article } from 'components/Article';

export default function Home() {
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
          <h4>Home</h4>
          <h1>Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil quibusdam doloribus corporis
            ratione. Explicabo, expedita eligendi. Eveniet natus dolorem perspiciatis incidunt. Obcaecati maiores
            quaerat quisquam commodi autem soluta <a href='#'>see their website</a> aliquid.
          </p>
          <code>npm install your-new-package</code>
          <pre>
            <code>
              {`
async function fetchData(url) {
  return await (await fetch(url)).json();
}
            `.trim()}
            </code>
          </pre>
        </Article>
      </div>
    </main>
  );
}
