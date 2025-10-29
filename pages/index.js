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
            <h3>🔓 Public Access</h3>
            <p>View all notes without signing in</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Uploads</h3>
            <p>Only authenticated GitHub users can upload notes</p>
          </div>
        </div>

        <div className="cta">
          <Link href="/notes">
            <button className="view-notes-btn">
              View All Notes →
            </button>
          </Link>
          <p className="info-text">
            Notes are publicly accessible for viewing. 
            {session ? ' You are signed in and can upload notes.' : ' Sign in with GitHub to upload notes.'}
          </p>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
          color: white;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .header p {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .header button {
          background: white;
          color: #667eea;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .header button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
        }

        .main {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          color: white;
          margin-bottom: 3rem;
        }

        .hero h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-card h3 {
          color: #667eea;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: #666;
        }

        .cta {
          text-align: center;
          margin-top: 3rem;
        }

        .view-notes-btn {
          background: white;
          color: #667eea;
          border: none;
          padding: 1.25rem 3rem;
          border-radius: 15px;
          font-size: 1.3rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .view-notes-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .info-text {
          color: white;
          margin-top: 1.5rem;
          font-size: 1.1rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .hero h2 {
            font-size: 1.8rem;
          }

          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
