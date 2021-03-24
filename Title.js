class Title {
	constructor() {
		this.body = document.body;
		this.titleContainer = document.createElement('div');
		this.title = 'Softdrink simulator';
		this.titleContainer.textContent = this.title;
		this.fontFamily = "'Modak', cursive";
		this.color = '#FFED66';
		this.size = '5rem';
		this.initiallStyle = this.setInitiallStyle();
		this.applyInitiallStyle();
		this.titleAppears();
		this.titleDisapears();
	}

	setInitiallStyle() {
		return {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			fontFamily: this.fontFamily,
			fontSize: this.size,
			color: this.color,
			opacity: 0,
			transition: 'ease-in-out 1s',
		};
	}

	applyInitiallStyle() {
		Object.assign(this.titleContainer.style, this.initiallStyle);
	}

	titleAppears() {
		this.body.append(this.titleContainer);
		setTimeout(() => {
			this.titleContainer.style.opacity = 1;
		}, 100);
	}

	titleDisapears() {
		setTimeout(() => {
			this.titleContainer.style.top = '-20%';
		}, 2000);
		setTimeout(() => {
			this.body.removeChild(this.titleContainer);
		}, 3000);
	}
}
