let equipment
let searchtags = {}
let mapping = []

async function evaluateMapping(mapping) {
  let regex = new RegExp(mapping.find, "i")
  equipment.search(regex) === 0 ? searchtags[mapping.tag] = true : true
}

async function parseEquipments(object) {
  equipment = object.text
  await mapping.map(evaluateMapping, object.text)
}

function getTags(arrayOfObjects, mappingParam) {
  mapping = mappingParam
  arrayOfObjects.map(parseEquipments)
  return searchtags
}

module.exports.getTags = getTags
