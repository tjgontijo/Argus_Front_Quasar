
export function getAllForTable (state) {
  var typeunits = []

  for (let value of Object.values(state.typeunits)) {
    let item = {
      id: value.id,
      name: value.name,
      description: value.description
    }
    typeunits.push(item)
  }
  return typeunits
}

export function getAllForCombo (state) {
  var typeunits = []

  for (let value of Object.values(state.typeunits)) {
    let item = {
      value: value.id,
      label: value.name
    }
    typeunits.push(item)
  }
  return typeunits
}
