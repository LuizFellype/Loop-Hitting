

export const attack = ( shooter, target) => {
    if (shooter.skill <= target.dodge) {
        const newTarget = { ...target, dodge: target.dodge + 1 }
        const state = {player1: shooter, player2: newTarget}
        return state
    }
    const newShooter = { ...shooter, skill: shooter.skill + 1 }
    const newTarget = { ...target, life: target.life - shooter.damage }
    const state = { player1: newShooter, player2: newTarget }
    return state
}

export const eat = (whoAte) => {
    if (whoAte.life >= 25) {
        const newWhoAte = { ...whoAte, life: 30 }
        return newWhoAte
    }
    const newWhoAte = { ...whoAte, life: whoAte.life + 5 }
    return newWhoAte
}

// simple functions to learn about how to do tests
// const sum = (x , y) => x + y
// export const f = (x, y) => { 
//     return sum (x, y)
// }