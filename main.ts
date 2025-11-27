input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Confused)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Skull)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
