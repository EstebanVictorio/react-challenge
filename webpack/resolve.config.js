const resolve = {
  extensions: [".ts", ".tsx", ".js" ]
}

const composeResolve = dir => ({
  ...resolve,
  alias: {
    components: `${dir}/components`,
    services: `${dir}/services`,
  }
})



module.exports = {
  resolve,
  composeResolve,
}