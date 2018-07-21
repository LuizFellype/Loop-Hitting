import { attack, eat, ran } from './game'
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
decrase damage shooter points in the target of life', () => {
    const r1 = 2 // assuming ran(5) == 2
    const r2 = 1
    const game = attack(state.player1, r1, state.player2, r2)        
        expect(game).toEqual({
            attacker: {
                life: 10,
                damage: 2,
                skill: 6,
                dodge: 5,
            },
            hitted: {
                life: 8,
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
    const game = attack(state.player1, r1, state.player2, r2)        
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