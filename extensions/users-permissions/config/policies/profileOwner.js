module.exports = (ctx, next) => {
  const userId = +ctx.state.user.id
  const requestId = +ctx.params.id
  console.log(userId, requestId)
  if (userId !== requestId) return ctx.unauthorized('You can only update your own profile')
  return next()
}
