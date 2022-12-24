function e_batida_1 () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        e_batida_12()
        e_batida_12()
        e_batida_1()
    }
    e_batida_12()
    music.playTone(784, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    e_batida_1()
    music.rest(music.beat(BeatFraction.Half))
    f_batida_12()
    f_batida_12()
    f_batida_12()
    f_batida_12()
    f_batida_12()
    e_batida_12()
    e_batida_1()
    e_batida_12()
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    e_batida_12()
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Whole))
})
function f_batida_12 () {
    music.playTone(698, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
}
function e_batida_12 () {
    music.playTone(659, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
}
basic.forever(function () {
    basic.showIcon(IconNames.EigthNote)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
