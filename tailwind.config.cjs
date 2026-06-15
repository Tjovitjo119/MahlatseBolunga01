/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f9fc",
        foreground: "#0f172a",
        primary: {
          DEFAULT: "#1d4ed8",
          foreground: "#ffffff",
        },
        muted: "#64748b",
        surface: "#ffffff",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};
