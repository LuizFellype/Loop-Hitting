import { attack, eat, listMaker, threeFirst } from './game'
const state = { 
    player1: {
        life: 10,
        damage: 2,
        skill: 5,
        dodge: 5,
    },
    player2: {
        life: 10,
        damage: 2,
        skill: 5,
        dodge: 4,
    }
}

// COMPLETED // attack hit = attacker.skill ++ and opponent.life --
// COMPLETED // attack miss = opponent.dodge ++
// attack = random (at.skill > op.dodge)
// damage = random [0 ~ 1] * damage
// eat = life ++ 

test('when the shooter hit the opponent, should increse 1 point in skill shooter and \
decrease random damage of the shooter in the targets life', () => {
    const r1 = 2 // assuming ran(5) == 2
    const r2 = 1
    const rd = 1.25
    const game = attack(state.player1, r1, rd, state.player2, r2)        
        expect(game).toEqual({
            attacker: {
                life: 10,
                damage: 2,
                skill: 6,
                dodge: 5,
            },
            hitted: {
                life: 7.5,
                damage: 2,
                skill: 5,
                dodge: 4,
            }
        }) 
})

test('when the target dodges from the attack, \
should increase 1 point in dodge of the target', () => {
    const r1 = 1 // assuming ran(5) == 2
    const r2 = 2 // assuming ran(5) == 1
    const game = attack(state.player1, r1, 9, state.player2, r2)        
        expect(game).toEqual({
            attacker: {
                life: 10,
                damage: 2,
                skill: 5,
                dodge: 5,
            },
            hitted: {
                life: 10,
                damage: 2,
                skill: 5,
                dodge: 5,
            }
        }) 
})


test('when eat, increase 5 in who ate lifes', () => {
    const dontDie = eat(state.player1)
    expect(dontDie).toEqual({
        life: 15,
        damage: 2,
        skill: 5,
        dodge: 5,
    })
    expect(dontDie).not.toBe(state.player1)
} )

test('eat but cannot pass the 30 in life', () => {
    const maxLife1 = { ...state.player1, life: 25 }
    const maxLife2 = { ...state.player1, life: 29 }
    // TODO: what if already maf life?
    expect(eat(maxLife1)).toEqual({
        life: 30,
        damage: 2,
        skill: 5,
        dodge: 5,
    })
    expect(eat(maxLife2)).toEqual({
        life: 30,
        damage: 2,
        skill: 5,
        dodge: 5,
    })
})


test('should add the string to the history(list)',() => {
    const historyLog = ['I am eating']
    const msg = 'You are gonna die baby'+ '. sleep with one eye open.'
    expect(listMaker(msg, historyLog)).toEqual(
        ['I am eating' , 'You are gonna die baby. sleep with one eye open.']
    )
}) 


test('shoul return the first 3 items of a array and join in a upper Case capitalized', ()=>{
    const abcdario = ['a', 'b', 'c', 'd', 'f']
    expect(threeFirst(abcdario)).toEqual('ABC')
})