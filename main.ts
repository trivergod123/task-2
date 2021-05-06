namespace SpriteKind {
    export const alien = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.alien, function (sprite) {
    game.over(true)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let laser_beams: Sprite = null
let alien = sprites.createProjectileFromSide(assets.image`alien`, 10, 0)
alien.y += 90
alien.setKind(SpriteKind.alien)
game.onUpdateInterval(50, function () {
    laser_beams = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, alien, 100, 81)
    laser_beams.y += -3
    laser_beams.x += randint(1, 14)
})
