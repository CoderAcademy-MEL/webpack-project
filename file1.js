const myFunc = () => {
  const result = secondFunc()
  console.log(result)
  const global = "this is a global const";
  return global
}

const secondFunc = () => {
  return "second func"
}

export default myFunc