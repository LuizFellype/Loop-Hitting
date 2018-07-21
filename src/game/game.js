

export const ran = (max) => Math.floor(Math.random() * max + 0)



export const attack = ( shooter, random1, target, random2 ) => {
    const randomAttacker = random1 * shooter.skill
    const randomTarget = random2 * target.dodge
    if (randomAttacker <= randomTarget) {
        const newTarget = { ...target, dodge: target.dodge + 1 }
        const players = { attacker: shooter, hitted: newTarget }
        return players
   }
    const newShooter = { ...shooter, skill: shooter.skill + 1 }
    const newTarget = { ...target, life: target.life - shooter.damage }
    const players = { attacker: newShooter, hitted: newTarget }
    return players
}

// ---------------------------------------------------------------











export const eat = (whoAte) => {
    if (whoAte.life >= 25) {
        const newWhoAte = { ...whoAte, life: 30 }
        return newWhoAte
    }
    const newWhoAte = { ...whoAte, life: whoAte.life + 5 }
    return newWhoAte
} 

export const eatTest = (whoAte, maxIncrease) => {
    // if (whoAte.life >= 25) {
        // const newWhoAte = { ...whoAte, life: 30 }
        // return newWhoAte
    // }
    const newWhoAte = { ...whoAte, life: whoAte.life + maxIncrease }
    return newWhoAte
}
