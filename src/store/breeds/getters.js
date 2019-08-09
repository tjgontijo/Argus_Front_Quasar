export function getAllBreeds (state) {
  var breeds = []

  for (let value of Object.values(state.breeds)) {
    let item = {
      value: value.id,
      label: value.name
    }
    breeds.push(item)
  }
  return breeds
}

export function getAllForTable (state) {
  var breeds = []

  for (let value of Object.values(state.breeds)) {
    let item = {
      id: value.id,
      name: value.name
    }
    breeds.push(item)
  }
  return breeds
}

export function getAllForCombo (state) {
  var breeds = []

  for (let value of Object.values(state.breeds)) {
    let item = {
      value: value.id,
      label: value.name
    }
    breeds.push(item)
  }
  return breeds
}
