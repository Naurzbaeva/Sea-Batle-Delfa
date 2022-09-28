class ShipView extends Ship {
    div = null;

    startX = null;
	startY = null;

	constructor(size, direction, startX, startY) {
		super(size, direction);

		const div = document.createElement("div");
		div.classList.add("ship");
        this.div = div;
		Object.assign(this, { div, startX, startY });

	}

    setDirection(newDirection) {
		if (this.direction === newDirection) {
			return false;
		}

		this.direction = newDirection;

		return true;
	}
}