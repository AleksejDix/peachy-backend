module.exports = async (ctx, next) => {
  return ctx.unauthorized(`You have no power here`)
}
