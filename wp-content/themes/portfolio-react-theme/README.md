# Portfolio React Theme

A modern WordPress theme built with **React**, **Tailwind CSS**, and **Vite** for learning and portfolio purposes.

## 🚀 Features

- ⚛️ **React 18** - Modern component-based UI
- 🎨 **Tailwind CSS** - Utility-first styling
- ⚡ **Vite** - Lightning-fast build tool
- 🔌 **WordPress REST API** - Seamless integration
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Modern Development** - Hot Module Replacement (HMR)

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **WordPress** installation (Local by Flywheel, XAMPP, or similar)
- Basic knowledge of PHP, JavaScript, and React

## 🛠️ Installation

### Step 1: Install Dependencies

Navigate to the theme directory and install npm packages:

```bash
cd wp-content/themes/portfolio-react-theme
npm install
```

### Step 2: Build the Theme

For **development** (with hot reload):
```bash
npm run dev
```

For **production** build:
```bash
npm run build
```

For **watch mode** (auto-rebuild on changes):
```bash
npm run watch
```

### Step 3: Activate the Theme

1. Go to WordPress Admin Dashboard
2. Navigate to **Appearance → Themes**
3. Activate **Portfolio React Theme**

## 📁 Project Structure

```
portfolio-react-theme/
├── src/                      # React source files
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind CSS imports
├── dist/                    # Compiled assets (auto-generated)
│   └── assets/
│       ├── index.js         # Bundled JavaScript
│       └── index.css        # Compiled CSS
├── functions.php            # WordPress theme functions
├── index.php                # Main template file
├── header.php               # Header template
├── footer.php               # Footer template
├── style.css                # Theme metadata
├── package.json             # Node dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎓 Learning Path

### For PHP Developers Learning React:

1. **Start with Components** (`src/components/`)
   - Open `Header.jsx` - See how React components work
   - Notice the JSX syntax (HTML-like JavaScript)
   - Understand `useState` hook for managing state

2. **Understand Props**
   - See how data flows from `App.jsx` to child components
   - Props are like function parameters for components

3. **WordPress Integration**
   - Check `functions.php` - See how WordPress passes data to React
   - Look at `wp_localize_script()` - This bridges PHP and JavaScript
   - Explore the REST API endpoint example

4. **Styling with Tailwind**
   - Open `src/index.css` - See Tailwind directives
   - Notice utility classes in components (e.g., `className="bg-white p-4"`)
   - Customize in `tailwind.config.js`

## 🔧 Development Workflow

### Daily Development:

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Edit React components** in `src/` folder

3. **Changes auto-reload** in the browser

4. **Build for production** when ready:
   ```bash
   npm run build
   ```

### Key Concepts:

- **React Components** = Reusable UI pieces (like PHP functions but for UI)
- **Props** = Data passed to components (like function parameters)
- **State** = Component's internal data (changes trigger re-renders)
- **Hooks** = Special functions (`useState`, `useEffect`) for component logic

## 🌐 WordPress + React Integration

### How It Works:

1. **WordPress loads** `header.php` and `index.php`
2. **`functions.php`** enqueues React bundle from `dist/`
3. **React mounts** on `<div id="root"></div>`
4. **WordPress data** is available via `window.wpData`
5. **REST API** allows React to fetch WordPress content

### Accessing WordPress Data in React:

```jsx
function MyComponent({ wpData }) {
  console.log(wpData.siteName);    // Site name
  console.log(wpData.restUrl);     // REST API URL
  console.log(wpData.ajaxUrl);     // AJAX URL
}
```

### Fetching Posts from WordPress:

```jsx
useEffect(() => {
  fetch(`${wpData.restUrl}wp/v2/posts`)
    .then(res => res.json())
    .then(posts => console.log(posts));
}, []);
```

## 🎨 Customizing Tailwind

Edit `tailwind.config.js` to add custom colors, fonts, etc.:

```js
theme: {
  extend: {
    colors: {
      'brand': '#your-color',
    },
  },
}
```

## 📚 Resources

### React:
- [React Official Docs](https://react.dev/)
- [React Tutorial](https://react.dev/learn)

### Tailwind CSS:
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### WordPress:
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Theme Development](https://developer.wordpress.org/themes/)

### Vite:
- [Vite Guide](https://vitejs.dev/guide/)

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Blank page after activation
**Solution:** Run `npm run build` to compile assets

### Issue: Changes not reflecting
**Solution:** 
- Clear browser cache
- Rebuild with `npm run build`
- Check browser console for errors

### Issue: REST API not working
**Solution:** 
- Check WordPress permalinks (Settings → Permalinks)
- Ensure REST API is enabled

## 📝 Next Steps

1. **Add more components** in `src/components/`
2. **Fetch WordPress posts** and display them
3. **Create custom post types** in `functions.php`
4. **Build a portfolio section** with your projects
5. **Add contact form** using WordPress plugins or custom code

## 🤝 Contributing

This is a learning project! Feel free to:
- Experiment with the code
- Add new features
- Break things and fix them
- Learn by doing

## 📄 License

GPL v2 or later (same as WordPress)

---

**Happy Coding! 🚀**

Built with ❤️ for learning WordPress + React
