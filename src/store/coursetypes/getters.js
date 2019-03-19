
export function getAllForTable (state) {
  var courseTypes = []

  for (let value of Object.values(state.courseTypes)) {
    let item = {
      id: value.id,
      name: value.name,
      description: value.description,
      type: value.type
    }
    courseTypes.push(item)
  }
  return courseTypes
}

export function getAllForCombo (state) {
  var courseTypes = []

  for (let value of Object.values(state.courseTypes)) {
    let item = {
      value: value.id,
      label: value.name
    }
    courseTypes.push(item)
  }
  return courseTypes
}
