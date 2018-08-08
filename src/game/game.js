
const ran = (max, min) => Math.random() * max + min

export const random = (maxA, maxDamage ,maxH) => {
    const random1 = Math.floor(ran(maxA, 0))
    const randomDam = parseFloat(ran(maxDamage, 0.8).toFixed(2))
    const random2 = Math.floor(ran(maxH, 0))
    const randomNumbers = {random1, randomDam, random2}
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

export const eat = (whoAte) => {
    if (whoAte.life >= 25) {
        const newWhoAte = { ...whoAte, life: 30 }
        return newWhoAte
    }
    const newWhoAte = { ...whoAte, life: whoAte.life + 5.00 }
    return newWhoAte
} 

export const listMaker = (stringToAdd, listToBeChanged) => { 
    const history = [...listToBeChanged]
    history.push(stringToAdd)
    return history
}