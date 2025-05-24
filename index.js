import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <Head>
        <title>DeltaBuddy</title>
        <meta name="description" content="Protect Your Capital with DeltaBuddy" />
      </Head>
      <main>
        <h1>Welcome to DeltaBuddy 🚀</h1>
        <p>Your intelligent options trading assistant.</p>
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>Join Now</button>
      </main>
    </div>
  );
}