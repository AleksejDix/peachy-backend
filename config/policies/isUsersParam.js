module.exports = async (ctx, next) => {
  if (!ctx.state.user) return ctx.unauthorized(`You're not loggin in`)
  if (!ctx.request.params.id) return ctx.unauthorized(`No user in url parameters`)

  const userId = `${ctx.state.user.id}`
  const requestId = `${ctx.params.id}`
  console.log(ctx)

  if (userId !== requestId) return ctx.unauthorized('You can only update your own profile')

  return await next()
}
