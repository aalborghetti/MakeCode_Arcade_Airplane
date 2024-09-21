controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile_p1 = sprites.createProjectileFromSprite(assets.image`proiettile`, Player1, 70, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(enemy1, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(enemy1, effects.fire, 100)
    sprites.destroy(projectile_p1)
    info.changeScoreBy(1)
})
let enemy1: Sprite = null
let projectile_p1: Sprite = null
let Player1: Sprite = null
Player1 = sprites.create(assets.image`Player1`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`Background`)
info.setLife(3)
info.setScore(0)
game.onUpdate(function () {
    controller.moveSprite(Player1)
})
game.onUpdateInterval(2000, function () {
    enemy1 = sprites.create(assets.image`Enemy1`, SpriteKind.Enemy)
    enemy1.setPosition(160, randint(10, 110))
    enemy1.setVelocity(-50, 0)
})
