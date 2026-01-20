# 🚀 The Dojo Blog

A modern, responsive blogging platform built with React and React Router. Create, read, and manage blog posts with an elegant and intuitive user interface.

## ✨ Features

- **📖 View All Blogs**: Browse through all published blog posts on the home page with smooth animations
- **✍️ Create New Posts**: Write and publish new blog posts with title, content, and author information
- **📄 Blog Details**: Read full blog content with author information and metadata
- **🗑️ Delete Posts**: Remove blog posts you no longer want to display
- **📱 Responsive Design**: Beautiful, professional UI that works seamlessly across devices
- **🎨 Modern Styling**: Clean, minimalist design with smooth animations and transitions
- **⚡ Fast Performance**: Optimized React components with efficient state management

## 🛠️ Tech Stack

- **Frontend**: React 19.2.3
- **Routing**: React Router DOM 7.11.0
- **Backend/Database**: JSON Server (for local development)
- **Styling**: Custom CSS with modern design patterns
- **Font**: Poppins (Google Fonts)
- **Build Tool**: Create React App 5.0.1

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download Git](https://git-scm.com/)
- A code editor like VS Code (optional but recommended)

Verify installations by running:
```bash
node --version
npm --version
git --version
```

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/dojo-blog.git
cd dojo-blog
```

Or, if using SSH:
```bash
git clone git@github.com:yourusername/dojo-blog.git
cd dojo-blog
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:
- React and React DOM
- React Router for navigation
- Testing libraries
- Create React App scripts

### Step 3: Start Both Servers

The Dojo Blog requires **two terminal windows** running simultaneously:

**Terminal 1 - Start the React Development Server:**
```bash
npm start
```
- Opens automatically at `http://localhost:3000`
- Features hot reload - changes reflect instantly
- Displays compilation errors in the browser

**Terminal 2 - Start the JSON Server (API Backend):**
```bash
npm run json-server
```
- Starts at `http://localhost:8000`
- Serves the mock database from `data/db.json`
- Provides REST API endpoints for CRUD operations

### Step 4: Access the Application

Once both servers are running:
- **Frontend**: Open your browser and visit `http://localhost:3000`
- **API**: The backend API is available at `http://localhost:8000`

## 📁 Project Structure

```
dojo-blog/
├── public/
│   ├── index.html              # Main HTML file
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
│
├── src/
│   ├── App.js                  # Main app component with routing
│   ├── Navbar.js               # Navigation bar component
│   ├── Home.js                 # Home/landing page component
│   ├── BlogList.js             # Blog list display component
│   ├── BlogDetails.js          # Individual blog details page
│   ├── Create.js               # Create new blog form component
│   ├── useFetch.js             # Custom hook for API calls
│   ├── index.js                # React entry point
│   └── index.css               # Global styling (302 lines)
│
├── data/
│   └── db.json                 # Mock database with blog posts
│
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # This file
```

## 📄 Available Scripts

### Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start React dev server at http://localhost:3000 |
| `npm run json-server` | Start JSON Server at http://localhost:8000 |
| `npm test` | Run tests in interactive watch mode |

### Production Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build optimized production bundle |
| `npm run eject` | Eject from Create React App (irreversible) |

## 🎨 Key Components

### **App.js**
Main application wrapper with React Router configuration. Handles routing for all pages:
- Home route (`/`)
- Create blog route (`/create`)
- Blog details route (`/blogs/:id`)

### **Navbar.js**
Top navigation component with:
- Branding and logo
- Home link
- Create new blog button

### **Home.js**
Landing page component that:
- Fetches all blogs using custom `useFetch` hook
- Displays loading state
- Shows error handling
- Renders BlogList component

### **BlogList.js**
Displays blog posts in a grid/list format:
- Shows blog preview cards
- Includes title and author
- Clickable cards for navigation
- Empty state message when no blogs exist

### **BlogDetails.js**
Individual blog post page featuring:
- Full blog content
- Author information
- Back button for navigation
- Delete button to remove posts
- Loading and error states

### **Create.js**
Form component for creating new blog posts:
- Title input field
- Body textarea
- Author dropdown selector
- Form validation
- Loading state during submission

### **useFetch.js**
Custom React hook for API communication:
- Handles GET, POST, DELETE requests
- Manages loading states
- Error handling and display
- Data caching

## 🌐 API Endpoints

The JSON Server provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/blogs` | Retrieve all blog posts |
| `GET` | `/blogs/:id` | Retrieve a specific blog post by ID |
| `POST` | `/blogs` | Create a new blog post |
| `DELETE` | `/blogs/:id` | Delete a blog post by ID |

### Example API Call:
```javascript
// Fetch all blogs
fetch('http://localhost:8000/blogs')
  .then(res => res.json())
  .then(data => console.log(data))
```

## 💾 Mock Database Structure

Blog data is stored in `data/db.json`. Each blog post follows this structure:

```json
{
  "id": "unique-id-string",
  "title": "Blog Post Title",
  "body": "Full blog content with multiple paragraphs...",
  "author": "Author Name"
}
```

### Current Database:
- **5 sample blog posts** pre-loaded
- Authors: `hesed` and `stroz`
- Sample titles: "So what??", "I'd be lying", "King David", etc.

### Adding New Posts:
You can manually edit `data/db.json` or use the application's Create form to add new posts.

## 🎨 Styling & UI Design

### Visual Features:
- **Modern gradient background**: Soft blue-grey palette (`#f5f7fa` to `#c3cfe2`)
- **Fixed background**: Stays in place while scrolling
- **Card-based layouts**: Professional rounded corners (12px) with subtle shadows
- **Smooth animations**: Transitions on all interactive elements (0.3s ease)
- **Color scheme**:
  - Primary: `#f1356d` (vibrant pink)
  - Text: `#2c3e50` (dark blue-grey)
  - Accents: `#7f8c8d` (medium grey)

### Responsive Design:
- **Max width**: 800px for optimal content display
- **Mobile optimized**: Padding adjusts for smaller screens
- **Touch-friendly**: Larger tap targets for mobile users

### Interactive Elements:
- Hover effects on cards (shadow & transform)
- Focus states on form inputs
- Button transitions with visual feedback
- Active link styling in navigation

## 📱 Usage Guide

### Viewing Blogs
1. Navigate to the home page (`/`)
2. Scroll through all available blog posts
3. Each card shows title and author

### Reading a Full Blog
1. Click on any blog preview card
2. View the complete blog content
3. See author information
4. Use the Back button to return to home

### Creating a New Blog
1. Click the "+ New Blog" button in the navbar
2. Fill in the blog form:
   - **Title**: Enter your blog post title
   - **Body**: Write your blog content
   - **Author**: Select from available authors
3. Click "Add Blog" to publish
4. Redirected to home page to see your new post

### Deleting a Blog
1. Navigate to the blog details page
2. Click the "Delete Blog" button
3. Confirm the deletion in the popup
4. Blog is removed and you're redirected home

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production bundle in the `build/` folder with:
- Minified CSS and JavaScript
- Optimized assets
- Performance improvements

### Deploy To:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `build` folder
- **GitHub Pages**: Configure and push to gh-pages branch
- **Heroku**: Set up Procfile and deploy
- **AWS S3 + CloudFront**: Upload build files to S3
- **Firebase Hosting**: `firebase deploy`

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 or 8000 is in use:
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 8000 (macOS/Linux)
lsof -ti:8000 | xargs kill -9

# On Windows, use:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### JSON Server Not Starting
- Ensure `data/db.json` exists
- Check for syntax errors in db.json
- Verify port 8000 is available

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is open source and available under the **MIT License**.

## 👤 Author

Created with ❤️ by the Dojo Blog Team

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [Create React App Documentation](https://create-react-app.dev)

---

**Happy Blogging! 📝**

**Need help?** Feel free to open an issue on GitHub!
