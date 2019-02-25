
export function getAllForTable (state) {
  var typeUnits = []

  for (let value of Object.values(state.typeUnits)) {
    let item = {
      id: value.id,
      name: value.name,
      description: value.description
    }
    typeUnits.push(item)
  }
  return typeUnits
}

export function getAllForCombo (state) {
  var typeUnits = []

  for (let value of Object.values(state.typeUnits)) {
    let item = {
      value: value.id,
      label: value.name
    }
    typeUnits.push(item)
  }
  return typeUnits
}
