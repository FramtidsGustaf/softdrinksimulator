class Bubble {
	constructor() {
		this.body = document.body;
		this.bubble = document.createElement('div');
		this.size = this.setSize();
		this.position = this.setPosition();
		this.lifeTime = this.setLifeTime();
		this.style = this.setStyle();
		this.isClicked = false;
		this.applyStyle();
		this.createStar();
	}

	setSize() {
		return Math.random() * 50 + 1;
	}

	setPosition() {
		const x = Math.random() * window.innerWidth;
		const y = Math.random() * window.innerHeight;
		return { x, y };
	}

	setLifeTime() {
		return Math.random() * 2500 + 500;
	}

	setStyle() {
		return {
			height: `${this.size}px`,
			width: `${this.size}px`,
			position: 'absolute',
			left: `${this.position.x}px`,
			top: `${this.position.y}px`,
			borderRadius: '50%',
			background: '#F6A85A',
			transition: 'ease-in-out .7s',
		};
	}

	applyStyle() {
		Object.assign(this.bubble.style, this.style);
	}

	createStar() {
		this.body.append(this.bubble);
		setTimeout(() => {
			this.bubble.style.top = '-10%';
		}, this.lifeTime - 500);

		setTimeout(() => {
			this.bubble.removeEventListener('click', this.handleClick);
			if (!this.isClicked) {
				this.body.removeChild(this.bubble);
			}
		}, this.lifeTime);
	}
}
