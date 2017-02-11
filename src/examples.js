import 'babel-polyfill'

export const sample1 = () => 'sample1'
export const sample2 = () => 'sample2'

export const sample3 = async () => {
  const asyncFunc = () => (
    new Promise(resolve => setTimeout(resolve(true), 1000))
  )
  const result = await asyncFunc()
  return result
}
