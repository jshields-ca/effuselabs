module.exports = {
  plugins: {
    // Tailwind v4 ships its own PostCSS plugin package. It also handles vendor
    // prefixing internally, so autoprefixer is no longer in the pipeline.
    '@tailwindcss/postcss': {},
  },
}
