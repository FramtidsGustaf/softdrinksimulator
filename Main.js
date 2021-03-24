class main {
	constructor() {
		this.start();
	}
	start() {
		new Title();
		setInterval(() => {
			new Bubble();
		}, 50);
	}
}
