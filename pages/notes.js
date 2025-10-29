import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Notes() {
  const { data: session } = useSession()
  const [uploadMessage, setUploadMessage] = useState('')

  // Sample notes data - in production, this would come from a database/API
  const [notes, setNotes] = useState([
    { id: 1, subject: 'Machine Learning', topic: 'Supervised Learning', uploadedBy: 'User1', date: '2024-01-15' },
    { id: 2, subject: 'Deep Learning', topic: 'Neural Networks', uploadedBy: 'User2', date: '2024-01-20' },
    { id: 3, subject: 'NLP', topic: 'Transformers', uploadedBy: 'User3', date: '2024-01-25' },
  ])

  const handleUpload = () => {
    if (session) {
      setUploadMessage('Note upload will be implemented with GitHub API')
      setTimeout(() => setUploadMessage(''), 3000)
    }
  }

  if (!session) {
    return (
      <div className="container">
        <Head>
          <title>Notes - BITS WILP AI/ML MTech</title>
        </Head>
        <div className="auth-required">
          <h2>🔒 Authentication Required</h2>
          <p>Please sign in with GitHub to access notes</p>
          <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        </div>
        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .auth-required {
            background: white;
            padding: 3rem;
            border-radius: 12px;
            text-align: center;
            max-width: 500px;
          }
          button {
            padding: 1rem 2rem;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            margin-top: 1rem;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Notes - BITS WILP AI/ML MTech</title>
      </Head>

      <header className="header">
        <Link href="/">
          <h1>🎓 BITS WILP AI/ML Notes</h1>
        </Link>
        <p>Welcome, {session.user.name}!</p>
      </header>

      <main className="main">
        <div className="upload-section">
          <h2>📝 Upload Notes</h2>
          <p className="info">Only authorized GitHub users can upload notes</p>
          <button onClick={handleUpload} className="upload-btn">Upload New Notes</button>
          {uploadMessage && <p className="message">{uploadMessage}</p>}
        </div>

        <div className="notes-section">
          <h2>📚 Available Notes</h2>
          <div className="notes-grid">
            {notes.map(note => (
              <div key={note.id} className="note-card">
                <h3>{note.subject}</h3>
                <p className="topic">{note.topic}</p>
                <div className="meta">
                  <span>👤 {note.uploadedBy}</span>
                  <span>📅 {note.date}</span>
                </div>
                <button className="download-btn">Download</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .header {
          margin-bottom: 2rem;
        }
        .header h1 {
          font-size: 2rem;
          cursor: pointer;
          margin: 0;
        }
        .main {
          max-width: 1200px;
          margin: 0 auto;
        }
        .upload-section {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }
        .info {
          color: #ffd700;
          margin: 0.5rem 0;
        }
        .upload-btn {
          padding: 0.75rem 1.5rem;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          margin-top: 1rem;
        }
        .message {
          margin-top: 1rem;
          color: #90EE90;
        }
        .notes-section h2 {
          margin-bottom: 1.5rem;
        }
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .note-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }
        .note-card h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.3rem;
        }
        .topic {
          color: #ffd700;
          margin: 0.5rem 0;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin: 1rem 0;
          opacity: 0.9;
        }
        .download-btn {
          width: 100%;
          padding: 0.75rem;
          background: white;
          color: #667eea;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
