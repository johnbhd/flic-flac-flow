module.exports = {
  content: [
    './src/**/*.{html,js}',             // Includes HTML and JS files in src folder
    './public/index.html',              // Directly includes the public index.html
    './public/**/*.{html}',             // Includes all HTML files in the public folder (and subfolders)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
