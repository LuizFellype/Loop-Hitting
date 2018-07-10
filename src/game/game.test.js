import { attack, eat } from './game'
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
        dodge: 5,
    }
}

// Math.floor(Math.random() * max + 1)  -> positive random number between 1 and max 

// COMPLETED // attack hit = attacker.skill ++ and opponent.life --
// COMPLETED // attack miss = opponent.dodge ++
// attack = random (at.skill > op.dodge)
// damage = random [0 ~ 1] * damage
// eat = life ++ 


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
} )

test('when ATTACK HIT the opponent (skill > dodge), so increase 1 in attacker skills and attacker damage in player2 lifes', () => {
    const player1Test = ({...state.player1, skill: 6})
    const player2tTest = ({...state.player2})
    const changedState = attack( player1Test, player2tTest)
    expect(changedState).toEqual(
        {
            player1: {
                life: 10,
                damage: 2,
                skill: 7,
                dodge: 5,
            },
            player2: {
                life: player2tTest.life - player1Test.damage,
                damage: 2,
                skill: 5,
                dodge: 5,
            }
        })
        expect(changedState).not.toBe(state)
})
test('when opponent DODGES THE ATTACK (dodge >= skill) , increase 1 in dodges', () => {
        const changedplayer2 = attack(state.player1, state.player2)
        expect(changedplayer2).toEqual(
        {
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
                dodge: 6,
            }
        })
        expect(changedplayer2).not.toBe(state)
})

// // tests about how to do tests
// // test('sum 2 + 4 = 6', ()=> {
//     // expect(f(2, 4)).toEqual(6)
// // })

