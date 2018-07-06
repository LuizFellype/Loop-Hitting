import { attack, eat, f} from './game'

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
    const notChangedPlayer = attack(fighterTest, opponent)

    expect(notChangedPlayer).toEqual({
        life: 10,
        damage: 2,
        skill: 6,
        dodge: 5,
    })
    expect(notChangedPlayer).not.toBe(opponent)
})
test(` -power pounds in opponents health.
    Get 80 from 100 see the imunitily `, () => {
        const fighterTest = { ...fighter, skill: 6 }
        const changedOpponent = attack(fighterTest, opponent)

        expect(changedOpponent).toEqual({
     life: 8,
     damage: 2,
     skill: 5,
     dodge: 5,
 })
 expect(changedOpponent).not.toBe(opponent)
})

test('not increase in life -> have max life already. 20', () => {
    const maxLife = { ...fighter, life: 20 }
    expect(eat(maxLife)).toEqual({
        life: 20,
        damage: 2,
        skill: 5,
        dodge: 5,
    })
} )

test(` +10 in damage, but lose 20 in health = 70 for the 10's
    lost above`, () => {
    const obj = {
        life: 100,
        damage: 20
    }
    const changObj = eat(obj)
    expect(changObj).toEqual({
      life: 80,
      damage: 30,
    })
    expect(changObj).not.toBe(obj)
})


// tests about how to do tests
// test('sum 2 + 4 = 6', ()=> {
    // expect(f(2, 4)).toEqual(6)
// })

