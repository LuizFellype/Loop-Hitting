
const atack = (shooter, target) => {
    const newTarget = { ...target }
    const newShooter = { ...shooter }
    if (newShooter.skill >= newTarget.dodge){
        newTarget.life -= newShooter.damage
    }
    return newTarget
}


const eat = (whoAte) => {
    const newWhoAte = { ...whoAte }
    newWhoAte.life -= newWhoAte.damage
    newWhoAte.damage += 10
    return newWhoAte
}

// ------   Tests ------ //

const fighter = {
    life: 10,
    damage: 2,
    skill: 5,
    dodge: 5,
}
const opponent = {
    life: 10,
    damage: 2,
    skill: 5,
    dodge: 5,
}

test(`tried to attack. 
    keep the same on and see the imunitily`, () => {
    const fighterTest = { ...fighter, skill: 4 }
    let notChangedPlayer = atack(fighterTest, opponent)
    expect(notChangedPlayer).toEqual({
        life: 10,
        damage: 2,
        skill: 5,
        dodge: 5,
    })
    expect(notChangedPlayer).toEqual(opponent)
})

test(` -power pounds in opponents health.
    Get 80 from 100 see the imunitily `, () => {
    const fighterTest = { ...fighter, skill: 6 }
    let changedOpponent = atack(fighterTest, opponent)
    expect(changedOpponent).toEqual({
        life: 8,
        damage: 2,
        skill: 5,
        dodge: 5,
    })
    expect(changedOpponent).not.toBe(opponent)
})
 


  
test(` +10 in power, but lose 20 in health = 70 for the 10's 
    lost above`, () => {
    const obj = {
        life: 100,
        damage: 20
    }
    let changObj = eat(obj) 
    expect(changObj).toEqual({
      life: 80,
      damage: 30,
    })
    expect(changObj).not.toBe(obj)
})

