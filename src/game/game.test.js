const player = {
    health: 100,
    power: 20
}
const opponent = {
    health: 100,
    power: 20
}

const atack = (shooter, target) => {
    const targetInstance = { ...target }
    targetInstance.health -= 10
    return targetInstance
}


const eat = (howAte) => {
    const howAteInstance = { ...howAte }
    howAteInstance.health -= howAteInstance.power
    howAteInstance.power += 10
    return howAteInstance
}

const check = (objConst) => objConst

// ------   Tests ------ //

test(" -10 pounds in opponents health.  get 90 from 100  ", () => {
  expect(atack(player, opponent)).toEqual({
    health: 90,
    power: 20
    })
})

test("degree 10 in player health.  get 90 from 100  ", () => {
    expect(atack(opponent, player)).toEqual({
        health: 90,
        power: 20
        })
})
  
test(` +10 in power, but lose 20 in health = 70 for the 10's 
    lost above`, () => {
    expect(eat(player)).toEqual({
      health: 80,
      power: 30
      })
  })

test("see the imutablity of the object", ()=> {
    expect(player).toEqual({ 
        health: 100,
        power: 20 })
})
test("see the imutablity of the object", ()=> {
    expect(opponent).toEqual({ 
        health: 100,
        power: 20 })
})