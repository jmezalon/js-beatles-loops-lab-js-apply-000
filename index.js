// add solution here
function theBeatlesPlay (musicians, instrunments) {
  let output = []
  for(let i = 0; i < musicians.length; i++) {
    output.push(`${musicians[i]} plays ${instrunments[i]}`)
  }
  return output;
}


function johnLennonFacts(facts) {
  let newFacts = []
  while(facts.length !== 0) {
    newFacts.push(`${facts[facts.length - 1]}!!!`)
    facts.pop()
  }
  return newFacts
}