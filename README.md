# BITS-WILP-AIML-Notes

## BITS Pilani WILP AI/ML MTech Notes Repository

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://koorse8310.github.io/BITS-WILP-AIML-Notes/)

A modern, Next.js-powered website for sharing AI/ML MTech course notes. The website automatically displays all files from the repository's `public/notes` folder.

## 🌐 Website

Visit the live website: [https://koorse8310.github.io/BITS-WILP-AIML-Notes/](https://koorse8310.github.io/BITS-WILP-AIML-Notes/)

## ✨ Features

- **📖 Public Viewing**: All notes are publicly accessible - no sign-in required to view
- **🔒 Secure Uploads**: Only authenticated GitHub users can upload notes
- **🚀 Automatic Display**: Files in `public/notes/` automatically appear on the website
- **📱 Modern UI**: Responsive design with gradient backgrounds and smooth animations
- **🔍 Easy Navigation**: Clean interface with organized note cards
- **📄 Multiple Formats**: Supports PDFs, Markdown, text files, and more

## 🏗️ Architecture

This repository is configured for GitHub Pages deployment using Next.js:

- **Framework**: Next.js (React-based)
- **Deployment**: GitHub Pages (automatic)
- **Authentication**: NextAuth.js with GitHub OAuth
- **Notes Storage**: `public/notes/` folder
- **API**: Server-side endpoints for note listing

## 📂 Project Structure

```
BITS-WILP-AIML-Notes/
├── pages/
│   ├── api/
│   │   ├── auth/           # Authentication endpoints
│   │   └── notes.js        # API to list notes
│   ├── index.js            # Homepage
│   ├── notes.js            # Notes viewing page
│   └── _app.js             # Next.js app wrapper
├── public/
│   └── notes/              # 📁 Store your notes here!
│       └── Sample-Note-README.md
├── styles/
│   └── globals.css
├── next.config.js
├── package.json
and README.md
```

## 📝 How to Add Notes

### For Repository Contributors:

1. **Navigate to the notes folder**: Go to `public/notes/`
2. **Upload your file**: Click "Add file" → "Upload files" or "Create new file"
3. **Commit**: Add a descriptive commit message and commit to main
4. **Automatic Display**: Your note will automatically appear on the website after deployment

### File Naming Best Practices:

- Use descriptive names: `Machine-Learning-Week-1.pdf`
- Avoid spaces (use hyphens): `Neural-Networks.pdf` not `Neural Networks.pdf`
- Include topic/subject: `Statistics-Lecture-Notes.pdf`

## 👀 Viewing Notes

Anyone can view notes without authentication:

1. Visit the [website](https://koorse8310.github.io/BITS-WILP-AIML-Notes/)
2. Click "View All Notes"
3. Browse and open any note

All files in `public/notes/` are automatically:
- Listed on the notes page
- Displayed with file type icons
- Available for direct download/viewing
- Sorted by upload date (newest first)

## 🔧 Technical Details

### How It Works

1. **File Storage**: Notes are stored in `public/notes/` directory
2. **API Endpoint**: `/api/notes` scans the directory and returns file metadata
3. **Frontend**: React components fetch and display notes dynamically
4. **Deployment**: GitHub Actions automatically deploys to GitHub Pages

### Supported File Formats

- **PDFs** (`.pdf`) - Primary format for notes
- **Markdown** (`.md`) - For text-based notes
- **Text Files** (`.txt`) - Simple notes
- **Images** (`.png`, `.jpg`, `.jpeg`) - Diagrams and visuals
- **Any other format** - All files are displayed and downloadable

## 🚀 Deployment

GitHub Pages is configured for automatic deployment:

- ✅ **Enabled**: GitHub Pages is active
- 🌿 **Branch**: Deploys from `main` branch
- 📁 **Source**: Root directory with Next.js export
- 🔄 **Auto-deploy**: Every commit triggers a new deployment

Check deployment status in the repository's "Actions" tab.

## 🛡️ Security

- **Public Reading**: Anyone can view notes (as intended)
- **Protected Writing**: Only repo contributors can add files
- **GitHub Authentication**: Uses GitHub OAuth for secure sign-in
- **No Manual Approval**: Files appear automatically after commit

## 📚 For Students

This repository is for BITS Pilani WILP AI/ML MTech students to share and access course notes.

**To access notes**:
- Simply visit the website - no account needed
- All notes are freely viewable

**To contribute notes**:
- Request repository access from the maintainer
- Sign in with your GitHub account
- Upload your notes to `public/notes/`

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Add your notes to `public/notes/`
3. Create a pull request
4. Wait for review and merge

Or request direct access to upload without PRs.

## 📄 License

Notes are shared for educational purposes. Please respect the intellectual property of content creators.

## 👤 Maintainer

[@Koorse8310](https://github.com/Koorse8310)

---

**Note**: This website auto-displays all files from the `public/notes/` folder. Simply add files there and they'll appear on the site!
