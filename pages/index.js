import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="container">
      <Head>
        <title>BITS Pilani WILP AI/ML MTech Notes</title>
        <meta name="description" content="Shared notes repository for BITS Pilani WILP AI/ML MTech program" />
      </Head>

      <header className="header">
        <h1>🎓 BITS Pilani WILP AI/ML MTech Notes</h1>
        {session ? (
          <div>
            <p>Welcome, {session.user.name}!</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        )}
      </header>

      <main className="main">
        <div className="hero">
          <h2>Welcome to Our Notes Repository</h2>
          <p>A collaborative platform for sharing AI/ML MTech notes</p>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>📚 Organized Notes</h3>
            <p>All notes organized by subject and topic</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Access</h3>
            <p>Only authorized GitHub users can upload</p>
          </div>
          <div className="feature-card">
            <h3>🤝 Collaborative</h3>
            <p>Share and learn together with your peers</p>
          </div>
        </div>

        {session && (
          <div className="actions">
            <Link href="/notes">
              <button className="primary-btn">View All Notes</button>
            </Link>
          </div>
        )}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .header {
          padding: 2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header h1 {
          font-size: 2rem;
          margin: 0;
        }
        .header button {
          padding: 0.75rem 1.5rem;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        .main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 0;
        }
        .hero {
          text-align: center;
          margin-bottom: 4rem;
        }
        .hero h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }
        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .actions {
          text-align: center;
        }
        .primary-btn {
          padding: 1rem 2rem;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
