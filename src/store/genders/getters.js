export function getAllGenders (state) {
  var genders = []

  for (let value of Object.values(state.genders)) {
    let item = {
      value: value.id,
      label: value.name
    }
    genders.push(item)
  }
  return genders
}
