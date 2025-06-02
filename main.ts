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
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX, playerY + 1))
})
let playerY = 0
let playerX = 0
let mainPlayer: Sprite = null
let queuedMovementX = 0
let queuedMovementY = 0
tiles.setCurrentTilemap(tilemap`level1`)
mainPlayer = sprites.create(assets.image`GearAnimation1`, SpriteKind.Player)
tiles.placeOnTile(mainPlayer, tiles.getTileLocation(3, 0))
let enemyAnimationArray = [
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
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
    `
]
forever(function () {
    mainPlayer.setImage(assets.image`GearAnimation1`)
    pause(100)
    mainPlayer.setImage(assets.image`GearAnimation2`)
    pause(100)
    mainPlayer.setImage(assets.image`GearAnimation3`)
})
game.onUpdateInterval(500, function () {
	
})
