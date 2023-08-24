import Head from 'next/head';
import App from './App.jsx';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/icons8-beach-umbrella-48.png" />
        <title>Travel Search</title>
      </Head>
      <main>
        <App />
      </main>
    </div>
  );
}
