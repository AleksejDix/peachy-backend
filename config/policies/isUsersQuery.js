module.exports = async (ctx, next) => {
  if (!ctx.state.user) return ctx.unauthorized(`You're not loggin in`)
  if (!ctx.request.query.user) return ctx.unauthorized(`No user in get parameters`)

  const userId = `${ctx.state.user.id}`
  const queryUserId = `${ctx.request.query.user}`

  console.log(userId, queryUserId)

  if (userId !== queryUserId) return ctx.unauthorized(`You can only request your own data`)

  return await next()
}
