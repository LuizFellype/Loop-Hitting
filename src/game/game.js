

export const attack = (shooter, target) => {
    if (shooter.skill <= target.dodge) {
        return target
    }
    const newTarget = { ...target }
    newTarget.life = target.life - 2
    return newTarget
}

export const eat = (whoAte) => {
    if (whoAte.life == 20) return whoAte
    const newWhoAte = { ...whoAte,
        life: whoAte.life - whoAte.damage,
        damage: whoAte.damage + 10
    }
    return newWhoAte
}
