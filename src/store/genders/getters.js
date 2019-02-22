export function getAllForTable (state) {
  var genders = []

  for (let value of Object.values(state.genders)) {
    let item = {
      id: value.id,
      name: value.name
    }
    genders.push(item)
  }
  return genders
}

export function getAllForCombo (state) {
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
