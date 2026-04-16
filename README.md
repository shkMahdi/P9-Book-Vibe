# 📚 Book-Vibe

A modern web application for discovering and exploring books. Browse through a curated collection of books, view detailed information, and find your next favorite read!

## ✨ Features

- **Homepage**: Eye-catching banner with featured books and book showcase
- **Browse Books**: View all available books in an organized, easy-to-browse format
- **Book Details**: Click any book to see comprehensive information:
  - Author and publisher details
  - Number of pages
  - Rating and customer reviews
  - Book category and tags
  - Year of publication
- **Responsive Design**: Works smoothly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast load times

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS + DaisyUI
- **State Management**: Context API
- **Icons**: React Icons
- **Additional**: React Tabs for tabbed interfaces

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Book-Vibe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── Components/          # Reusable React components
│   ├── HomePageSections/   # Homepage-specific sections
│   ├── Shared/            # Shared components (Navbar, etc.)
│   └── UI/                # UI components (BookCard, BookList)
├── Context/             # React Context for state management
├── Pages/               # Full page components
│   ├── Homepage/
│   ├── Books/
│   ├── BookDetails/
│   └── ErrorPage/
├── Layouts/             # Layout wrapper components
├── Routes/              # Route definitions
└── Assets/              # Images and static files
```

## 📚 Book Data

Books are stored in `public/data/booksData.json` with the following information:
- Book ID
- Book name and author
- Cover image URL
- Detailed review
- Total pages
- Rating (0-5 stars)
- Category and tags
- Publisher and year of publishing

## 💡 How It Works

1. The app loads the book data from the JSON file
2. **Homepage** displays a banner and featured books
3. **Books page** shows all available books with filtering options
4. Click any book card to view **detailed information**
5. All data is managed efficiently using React Context API
6. Navigation between pages is handled by React Router

## 🎨 Styling

The project uses Tailwind CSS for utility-first styling and DaisyUI components for pre-built, beautiful UI elements.

## 📝 Notes

- This is a front-end application with static book data
- Currently no backend API (uses local JSON data)
- Perfect for learning React, Vite, and modern web development practices

## 🤝 Contributing

Feel free to fork this project and make improvements!

---

**Happy Reading! 📖✨**
