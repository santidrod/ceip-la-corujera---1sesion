input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Skull)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(2000)
})
