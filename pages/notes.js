import { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch notes from the API
    fetch('/api/notes')
      .then(res => res.json())
      .then(data => {
        setNotes(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching notes:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Notes - BITS WILP AI/ML MTech</title>
        <meta name="description" content="View all course notes" />
      </Head>

      <header>
        <Link href="/">
          <button className="back-btn">← Back to Home</button>
        </Link>
        <h1>📚 Course Notes</h1>
        <p className="subtitle">All notes are publicly accessible for viewing</p>
      </header>

      <main>
        {loading ? (
          <div className="loading">Loading notes...</div>
        ) : notes.length === 0 ? (
          <div className="no-notes">
            <p>No notes available yet.</p>
            <p>Notes will automatically appear here when added to the repository.</p>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note, index) => (
              <div key={index} className="note-card">
                <div className="note-icon">
                  {note.type === 'pdf' ? '📄' : '📁'}
                </div>
                <div className="note-info">
                  <h3>{note.name}</h3>
                  <p className="note-meta">
                    Size: {note.size}
                  </p>
                  <a 
                    href={note.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    View {note.type === 'pdf' ? 'PDF' : 'File'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
        }

        header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid white;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s;
          margin-bottom: 2rem;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        h1 {
          color: white;
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
        }

        .loading, .no-notes {
          text-align: center;
          color: white;
          font-size: 1.5rem;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .no-notes p {
          margin: 1rem 0;
        }

        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .note-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .note-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .note-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .note-info {
          width: 100%;
        }

        .note-info h3 {
          color: #333;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          word-break: break-word;
        }

        .note-meta {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .view-btn {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .view-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .notes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
