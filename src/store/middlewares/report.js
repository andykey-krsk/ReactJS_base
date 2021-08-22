export const report = () => (next) => (action) => {
  console.lor("report")
  try {
    return next(action)
  } catch (e) {
    console.error("Some error: ", e)
  }
}
