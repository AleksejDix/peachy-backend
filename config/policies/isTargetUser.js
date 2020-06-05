module.exports = async (ctx, next) => {
  // if (!ctx.state.user) return ctx.unauthorized(`You're not loggin in`)
  // if (!ctx.request.query.user) return ctx.unauthorized(`No user in get parameters`)

  // const user = ctx.state.user
  // const queryUser = ctx.request.query.user

  // if (user !== queryUser) return ctx.unauthorized(`You can only request your own data`)

  return await next()
}
