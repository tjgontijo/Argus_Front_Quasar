
export function getAllForTable (state) {
  var units = []

  for (let value of Object.values(state.units)) {
    let item = {
      id: value.id,
      name: value.name,
      description: value.description
    }
    units.push(item)
  }
  return units
}

export function getAllForCombo (state) {
  var units = []

  for (let value of Object.values(state.unitsCombo)) {
    let item = {
      id: value.id,
      name: value.name,
      description: value.description
    }
    units.push(item)
  }
  return units
}
