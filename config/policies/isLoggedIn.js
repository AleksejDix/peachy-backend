module.exports = async (ctx, next) => {
  if (!ctx.state.user) return ctx.unauthorized(`You're not loggin in`)
  return next()
}
