export function getAllOrientations (state) {
  var orientations = []

  for (let value of Object.values(state.orientations)) {
    let item = {
      value: value.id,
      label: value.name
    }
    orientations.push(item)
  }
  return orientations
}
