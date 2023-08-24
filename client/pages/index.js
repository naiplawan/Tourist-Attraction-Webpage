import Head from 'next/head';
import App from './App.jsx';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/icons8-beach-umbrella-48.png" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap" rel="stylesheet" />
        <title>Travel Search</title>
      </Head>
      <main>
        <App /> 
      </main>
    </div>
  );
}
