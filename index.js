// Code your solution in this file

function findMatching(array, string) {
  return array.filter(function(s) {
    return s.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch(array, string) {
  return array.filter(function(s) {
    name = s.slice(0, string.length)
    return name.toLowerCase() === string.toLowerCase();
  })
}

function matchName(drivers, string) {
  match = [];
  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].name.toLowerCase() === string.toLowerCase()) {
      match.push(drivers[i]);
    }
  }
  return match;
}
