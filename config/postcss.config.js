module.exports = ({ file, options, env }) => ({
  plugins: {
    autoprefixer: env === 'production' ? options.autoprefixer : false,
    cssnano: env === 'production' ? options.cssnano : false
  }
})
