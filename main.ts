namespace SpriteKind {
    export const mainEnemy = SpriteKind.create()
    export const Hitbox = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerMovement(0, -1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerMovement(-1, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hitbox, function (sprite, otherSprite) {
    scene.cameraShake(2, 100)
    info.changeLifeBy(-1)
    pause(500)
})
function createEnemy () {
    mainEnemyType = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.mainEnemy)
    mainEnemyType.lifespan = 1900
    tiles.placeOnTile(mainEnemyType, tiles.getTileLocation(randint(0, 8), randint(0, 6)))
    animation.runImageAnimation(
    mainEnemyType,
    [img`
        a 9 9 . . . . . . . . . . 9 9 a 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 a . . . . . . . 
        . . . . . . . a 9 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        a 9 9 . . . . . . . . . . 9 9 a 
        `,img`
        c a 9 . . . . . . . . . . 9 a c 
        a . . . . . . . . . . . . . . a 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a 9 9 9 . . . . . . 
        . . . . . . 9 a 9 9 . . . . . . 
        . . . . . . 9 9 a 9 . . . . . . 
        . . . . . . 9 9 9 a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        a . . . . . . . . . . . . . . a 
        c a 9 . . . . . . . . . . 9 a c 
        `,img`
        a 9 9 . . . . . . . . . . 9 9 a 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a b . . . . . . . 
        . . . . . . . b a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        a 9 9 . . . . . . . . . . 9 9 a 
        `,img`
        c a 9 . . . . . . . . . . 9 a c 
        a . . . . . . . . . . . . . . a 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b a a a . . . . . . 
        . . . . . . a b a a . . . . . . 
        . . . . . . a a b a . . . . . . 
        . . . . . . a a a b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        a . . . . . . . . . . . . . . a 
        c a 9 . . . . . . . . . . 9 a c 
        `,img`
        a 9 9 . . . . . . . . . . 9 9 a 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b c . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        a 9 9 . . . . . . . . . . 9 9 a 
        `,img`
        c a 9 . . . . . . . . . . 9 a c 
        a . . . . . . . . . . . . . . a 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c b b b . . . . . . 
        . . . . . . b c b b . . . . . . 
        . . . . . . b b c b . . . . . . 
        . . . . . . b b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        a . . . . . . . . . . . . . . a 
        c a 9 . . . . . . . . . . 9 a c 
        `,img`
        a 9 9 . . . . . . . . . . 9 9 a 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a 9 . . . . . . . 
        . . . . . . . 9 a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        a 9 9 . . . . . . . . . . 9 9 a 
        `,img`
        a 9 9 . . . . . . . . . . 9 9 a 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a 9 9 a . . . . . . 
        . . . . . . 9 a a 9 . . . . . . 
        . . . . . . 9 a a 9 . . . . . . 
        . . . . . . a 9 9 a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . 9 
        9 . . . . . . . . . . . . . . 9 
        a 9 9 . . . . . . . . . . 9 9 a 
        `,img`
        a 9 9 . . . . . . . . . . 9 9 a 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 a a a 9 9 9 9 9 9 a a a 9 9 
        . 9 a 9 9 9 9 9 9 9 9 9 9 a 9 . 
        . 9 a 9 9 9 9 9 9 9 9 9 9 a 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 a a a a 9 9 9 9 9 . 
        . 9 9 9 9 9 a b b a 9 9 9 9 9 . 
        . 9 9 9 9 9 a b b a 9 9 9 9 9 . 
        . 9 9 9 9 9 a a a a 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 a 9 9 9 9 9 9 9 9 9 9 a 9 . 
        . 9 a 9 9 9 9 9 9 9 9 9 9 a 9 . 
        9 9 a a a 9 9 9 9 9 9 a a a 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        a 9 9 . . . . . . . . . . 9 9 a 
        `,img`
        9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 
        b b a a a 9 9 9 9 9 9 a a a b 9 
        9 a a 9 9 9 9 9 9 9 9 9 9 a a b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b 9 9 9 9 a a a a a a 9 9 9 9 9 
        9 9 9 9 9 a b b b b a 9 9 9 9 b 
        b 9 9 9 9 a b c c b a 9 9 9 9 9 
        9 9 9 9 9 a b c c b a 9 9 9 9 b 
        b 9 9 9 9 a b b b b a 9 9 9 9 9 
        9 9 9 9 9 a a a a a a 9 9 9 9 b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b a a 9 9 9 9 9 9 9 9 9 9 a a 9 
        9 b a a a 9 9 9 9 9 9 a a a b b 
        b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 
        `,img`
        b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 
        9 b a a a 9 9 9 9 9 9 a a a b b 
        b a a 9 9 9 9 9 9 9 9 9 9 a a 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 9 9 9 9 a a a a a a 9 9 9 9 b 
        b 9 9 9 9 a b b b b a 9 9 9 9 9 
        9 9 9 9 9 a b c c b a 9 9 9 9 b 
        b 9 9 9 9 a b c c b a 9 9 9 9 9 
        9 9 9 9 9 a b b b b a 9 9 9 9 b 
        b 9 9 9 9 a a a a a a 9 9 9 9 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 a a 9 9 9 9 9 9 9 9 9 9 a a b 
        b b a a a 9 9 9 9 9 9 a a a b 9 
        9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 
        `,img`
        9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 
        b b a a a 9 9 9 9 9 9 a a a b 9 
        9 a a 9 9 9 9 9 9 9 9 9 9 a a b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b 9 9 9 9 9 a a a a 9 9 9 9 9 9 
        9 9 9 9 9 a b b b b a 9 9 9 9 b 
        b 9 9 9 9 a b c c b a 9 9 9 9 9 
        9 9 9 9 9 a b c c b a 9 9 9 9 b 
        b 9 9 9 9 a b b b b a 9 9 9 9 9 
        9 9 9 9 9 9 a a a a 9 9 9 9 9 b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b a a 9 9 9 9 9 9 9 9 9 9 a a 9 
        9 b a a a 9 9 9 9 9 9 a a a b b 
        b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 
        `,img`
        b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 
        9 b a a 9 9 9 9 9 9 9 9 a a b b 
        b a a 9 9 9 9 9 9 9 9 9 9 a a 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 a a 9 9 9 9 9 9 b 
        b 9 9 9 9 9 a b b a 9 9 9 9 9 9 
        9 9 9 9 9 a b c c b a 9 9 9 9 b 
        b 9 9 9 9 a b c c b a 9 9 9 9 9 
        9 9 9 9 9 9 a b b a 9 9 9 9 9 b 
        b 9 9 9 9 9 9 a a 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 a a 9 9 9 9 9 9 9 9 9 9 a a b 
        b b a a 9 9 9 9 9 9 9 9 a a b 9 
        9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 
        `,img`
        9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 
        b b a a 9 9 9 9 9 9 9 9 a a b 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b 
        b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 b b 9 9 9 9 9 9 b 
        b 9 9 9 9 9 b c c b 9 9 9 9 9 9 
        9 9 9 9 9 9 b c c b 9 9 9 9 9 b 
        b 9 9 9 9 9 9 b b 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b 
        b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 b a a 9 9 9 9 9 9 9 9 a a b b 
        b 9 b 9 b 9 b 9 b 9 b 9 b 9 b 9 
        `,img`
        9 9 9 b 9 9 9 b 9 9 9 b 9 9 9 b 
        b b a 9 9 9 9 9 9 9 9 9 9 a b 9 
        9 a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b 
        b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 . . 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 . . 9 9 9 9 9 9 b 
        b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b 
        b a 9 9 9 9 9 9 9 9 9 9 9 9 a 9 
        9 b a 9 9 9 9 9 9 9 9 9 9 a b 9 
        9 9 b 9 9 9 b 9 9 9 b 9 9 9 b 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 . 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 . . 9 9 9 9 9 9 9 
        9 9 9 9 9 9 . . . . 9 9 9 9 9 9 
        9 9 9 9 9 . . . . . 9 9 9 9 9 9 
        9 9 9 9 9 9 9 . . 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 . 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 . 9 9 9 9 9 9 9 9 . 9 9 9 9 . 
        9 9 . . 9 9 9 9 9 . 9 9 9 9 . 9 
        9 9 9 . . 9 9 9 . . 9 9 9 . 9 9 
        9 9 9 9 . . 9 . . 9 9 9 . . 9 9 
        . 9 9 9 9 . 9 . . 9 9 . . . 9 9 
        9 . . 9 9 . . . . . . . . 9 9 9 
        9 9 . . . . . . . . . . . 9 9 9 
        9 9 9 . . . . . . . . . 9 9 9 9 
        9 9 9 9 . . . . . . . . 9 9 9 9 
        9 9 9 9 . . . . . . . . 9 9 9 9 
        9 9 9 9 . . 9 . . 9 9 . . 9 9 9 
        9 . 9 . 9 9 9 . 9 9 9 9 . . . 9 
        9 9 . . 9 9 9 . . 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 . 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 . . 9 9 9 9 9 9 9 
        `,img`
        9 . . 9 9 9 9 9 9 . . . 9 9 . . 
        9 . . . 9 9 . . 9 . . 9 9 9 . . 
        . . . . . . . 9 . . . . . . . . 
        . 9 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . . 
        9 . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . 9 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 9 . . . . . . . . . . . . . . 
        9 9 9 . . . . . . . . 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    allEnemiesList.push(mainEnemyType)
    mainEnemyHitbox = sprites.create(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.Hitbox)
    mainEnemyHitbox.lifespan = 1900
    mainEnemyHitbox.setPosition(mainEnemyType.x, mainEnemyType.y)
    mainEnemyHitbox.setFlag(SpriteFlag.Ghost, true)
    mainEnemyHitbox.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataNumber(mainEnemyHitbox, "creationtimer", 8)
    sprites.setDataNumber(mainEnemyHitbox, "spawntimer", 15)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerMovement(1, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerMovement(0, 1)
})
function playerMovement (xshift: number, yshift: number) {
    scene.cameraShake(1.5, 100)
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX + xshift, playerY + yshift))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.spray, 100)
})
let mainCoinType: Sprite = null
let playerY = 0
let playerX = 0
let mainEnemyHitbox: Sprite = null
let mainEnemyType: Sprite = null
let allEnemiesList: Sprite[] = []
let mainPlayer: Sprite = null
let queuedMovementX = 0
let queuedMovementY = 0
tiles.setCurrentTilemap(tilemap`level1`)
mainPlayer = sprites.create(assets.image`GearAnimation1`, SpriteKind.Player)
tiles.placeOnTile(mainPlayer, tiles.getTileLocation(1, 3))
allEnemiesList = []
info.setLife(3)
game.onUpdateInterval(1000, function () {
    createEnemy()
})
game.onUpdateInterval(1000, function () {
    mainCoinType = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 6 6 6 6 5 . . . . . 
        . . . . 5 6 6 f 6 6 6 7 . . . . 
        . . . 5 6 6 f 6 f 6 6 6 7 . . . 
        . . . 5 6 f 6 6 6 f 6 6 7 . . . 
        . . . 5 6 f 6 6 6 6 6 6 7 . . . 
        . . . 5 6 f 6 6 6 6 6 6 8 . . . 
        . . . 7 6 f 6 6 6 6 6 6 8 . . . 
        . . . 7 6 f 6 6 6 f 6 6 8 . . . 
        . . . 7 6 6 f 6 f 6 6 6 8 . . . 
        . . . . 7 6 6 f 6 6 6 8 . . . . 
        . . . . . 8 6 6 6 6 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    mainCoinType,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 6 6 6 6 5 . . . . . 
        . . . . 5 6 6 f 6 6 6 7 . . . . 
        . . . 5 6 6 f 6 f 6 6 6 7 . . . 
        . . . 5 6 f 6 6 6 f 6 6 7 . . . 
        . . . 5 6 f 6 6 6 6 6 6 7 . . . 
        . . . 5 6 f 6 6 6 6 6 6 8 . . . 
        . . . 7 6 f 6 6 6 6 6 6 8 . . . 
        . . . 7 6 f 6 6 6 f 6 6 8 . . . 
        . . . 7 6 6 f 6 f 6 6 6 8 . . . 
        . . . . 7 6 6 f 6 6 6 8 . . . . 
        . . . . . 8 6 6 6 6 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 6 6 5 . . . . . . 
        . . . . . 5 6 6 6 6 5 . . . . . 
        . . . . 5 6 6 f 6 6 6 5 . . . . 
        . . . . 5 6 f 6 f 6 6 7 . . . . 
        . . . . 5 6 f 6 6 6 6 7 . . . . 
        . . . . 5 6 f 6 6 6 6 7 . . . . 
        . . . . 7 6 f 6 6 6 6 7 . . . . 
        . . . . 7 6 f 6 f 6 6 8 . . . . 
        . . . . 7 6 6 f 6 6 6 8 . . . . 
        . . . . . 7 6 6 6 6 8 . . . . . 
        . . . . . . 8 6 6 8 . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 6 5 . . . . . . 
        . . . . . . 5 6 6 6 5 . . . . . 
        . . . . . 5 6 6 6 6 5 . . . . . 
        . . . . . 5 6 f f 6 5 . . . . . 
        . . . . . 5 6 f 6 6 7 . . . . . 
        . . . . . 5 6 f 6 6 7 . . . . . 
        . . . . . 7 6 f 6 6 7 . . . . . 
        . . . . . 7 6 f f 6 7 . . . . . 
        . . . . . 7 6 6 6 6 8 . . . . . 
        . . . . . . 7 6 6 6 8 . . . . . 
        . . . . . . . 8 6 8 . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 6 5 . . . . . . 
        . . . . . . 5 6 6 6 5 . . . . . 
        . . . . . 5 6 6 6 6 5 . . . . . 
        . . . . . 5 6 f f 6 5 . . . . . 
        . . . . . 5 6 f 6 6 7 . . . . . 
        . . . . . 5 6 f 6 6 7 . . . . . 
        . . . . . 7 6 f 6 6 7 . . . . . 
        . . . . . 7 6 f f 6 7 . . . . . 
        . . . . . 7 6 6 6 6 8 . . . . . 
        . . . . . . 7 6 6 6 8 . . . . . 
        . . . . . . . 8 6 8 . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 6 6 5 . . . . . . 
        . . . . . 5 6 6 6 6 5 . . . . . 
        . . . . 5 6 6 f 6 6 6 5 . . . . 
        . . . . 5 6 f 6 f 6 6 7 . . . . 
        . . . . 5 6 f 6 6 6 6 7 . . . . 
        . . . . 5 6 f 6 6 6 6 7 . . . . 
        . . . . 7 6 f 6 6 6 6 7 . . . . 
        . . . . 7 6 f 6 f 6 6 8 . . . . 
        . . . . 7 6 6 f 6 6 6 8 . . . . 
        . . . . . 7 6 6 6 6 8 . . . . . 
        . . . . . . 8 6 6 8 . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(mainCoinType, tiles.getTileLocation(randint(0, 8), randint(0, 6)))
    sprites.setDataNumber(mainCoinType, "despawntimer", 20)
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.startEffect(effects.fire, 100)
    }
})
forever(function () {
    mainPlayer.setImage(assets.image`GearAnimation1`)
    pause(100)
    mainPlayer.setImage(assets.image`GearAnimation2`)
    pause(100)
    mainPlayer.setImage(assets.image`GearAnimation3`)
    for (let value of sprites.allOfKind(SpriteKind.Hitbox)) {
        if (sprites.readDataNumber(value, "spawntimer") <= 0) {
            sprites.destroy(value)
        }
        if (sprites.readDataNumber(value, "creationtimer") <= 0) {
            value.setFlag(SpriteFlag.Ghost, false)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        if (sprites.readDataNumber(value, "despawntimer") <= 0) {
            sprites.destroy(value, effects.fire, 100)
        }
    }
})
game.onUpdateInterval(100, function () {
    for (let value of sprites.allOfKind(SpriteKind.Hitbox)) {
        sprites.changeDataNumberBy(value, "spawntimer", -1)
        sprites.changeDataNumberBy(value, "creationtimer", -1)
    }
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        sprites.changeDataNumberBy(value, "despawntimer", -1)
    }
})
