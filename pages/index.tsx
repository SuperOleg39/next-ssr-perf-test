import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const components = [];

  for (let i = 0; i <= 1000; i++) {
    components.push(<HeavyComponent />);
  }
  return (
    <div>
      <p>Main Page with React 17</p>
      {components}
    </div>
  );
}

function HeavyComponent() {
  return (
    <>
      <ul>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
      <article>
        <h1>Title</h1>
        <p>Content</p>
        <div>
          <div>
            <div>
              <div>
                <div>12345</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
