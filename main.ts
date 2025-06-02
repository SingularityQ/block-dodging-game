namespace SpriteKind {
    export const mainEnemy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX, playerY - 1))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX - 1, playerY))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX + 1, playerY))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX, playerY + 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let mainEnemyType: Sprite = null
let playerY = 0
let playerX = 0
let mainPlayer: Sprite = null
let queuedMovementX = 0
let queuedMovementY = 0
tiles.setCurrentTilemap(tilemap`level1`)
mainPlayer = sprites.create(assets.image`GearAnimation1`, SpriteKind.Player)
tiles.placeOnTile(mainPlayer, tiles.getTileLocation(1, 3))
game.onUpdateInterval(1000, function () {
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
    timer.after(1900, function () {
        sprites.destroy(mainEnemyType, effects.coolRadial, 500)
    })
})
forever(function () {
    mainPlayer.setImage(assets.image`GearAnimation1`)
    pause(100)
    mainPlayer.setImage(assets.image`GearAnimation2`)
    pause(100)
    mainPlayer.setImage(assets.image`GearAnimation3`)
})
game.onUpdateInterval(500, function () {
	
})
