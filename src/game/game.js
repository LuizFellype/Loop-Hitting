
const ran = (max, min) => Math.random() * max + min

export const random = (maxA, maxDamage ,maxH) => {
    const randomA = Math.floor(ran(maxA, 0))
    const randomDam = parseFloat(ran(maxDamage, 0.8).toFixed(2))
    const randomH = Math.floor(ran(maxH, 0))
    const randomNumbers = {randomA, randomDam, randomH}
    return randomNumbers
}


export const attack = ( shooter, randomA, randomDamage, target, randomH ) => {
    const randomAttacker = randomA * shooter.skill
    const randomTarget = randomH * target.dodge
    if (randomAttacker <= randomTarget) {
        const newTarget = { ...target, dodge: target.dodge + 1 }
        const players = { attacker: shooter, hitted: newTarget }
        return players
    }
    const life = parseFloat((target.life - randomDamage * shooter.damage).toFixed(2))//
    const newShooter = { ...shooter, skill: shooter.skill + 1 }
    const newTarget = { ...target, life }
    const players = { attacker: newShooter, hitted: newTarget }
   return players
}

// (Math.random() * (1.5 - 0.8) + 0.8).toFixed(2)
// ---------------------------------------------------------------


export const eat = (whoAte) => {
    if (whoAte.life >= 25) {
        const newWhoAte = { ...whoAte, life: 30 }
        return newWhoAte
    }
    const newWhoAte = { ...whoAte, life: whoAte.life + 5.00 }
    return newWhoAte
} 