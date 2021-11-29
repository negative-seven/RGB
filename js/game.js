class Game {
	constructor() {
		this.startRound()
		this.currentColor = undefined
	}

	startRound() {
		this.currentColor = Math.floor(Math.random() * 0x1000000)
		$("body").css("background-color", this.currentColor.toString(16))
	}
}