/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'awesomeYellow': '#FFE489',
        'regalBlue': '#7777E7',
        'simpleWhite': '#FEFFF8',
        'neutralBlack': '#0F0023',
      },
      fontFamily: {
        fair: "'Playfair', serif",
        kanit: "'Kanit', sans-serif",
      },
    },
  },
  plugins: [],
}
