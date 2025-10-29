import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Path to the public/notes directory
    const notesDirectory = path.join(process.cwd(), 'public', 'notes')
    
    // Check if directory exists
    if (!fs.existsSync(notesDirectory)) {
      return res.status(200).json([])
    }

    // Read all files in the directory
    const files = fs.readdirSync(notesDirectory)
    
    // Filter out .gitkeep and hidden files
    const noteFiles = files.filter(file => 
      !file.startsWith('.') && file !== '.gitkeep'
    )

    // Map files to note objects
    const notes = noteFiles.map(file => {
      const filePath = path.join(notesDirectory, file)
      const stats = fs.statSync(filePath)
      const ext = path.extname(file).toLowerCase()
      
      return {
        name: file,
        url: `/notes/${file}`,
        size: formatBytes(stats.size),
        type: ext === '.pdf' ? 'pdf' : 'file',
        uploadedAt: stats.mtime
      }
    })

    // Sort by upload date (newest first)
    notes.sort((a, b) => b.uploadedAt - a.uploadedAt)

    res.status(200).json(notes)
  } catch (error) {
    console.error('Error reading notes:', error)
    res.status(500).json({ message: 'Error reading notes' })
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
