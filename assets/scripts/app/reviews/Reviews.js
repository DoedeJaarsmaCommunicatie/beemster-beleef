export default class Reviews {
	/**
	 *
	 * @type {Array<HTMLButtonElement>}
	 */
	indicators = [];
	/**
	 *
	 * @type {Array<HTMLElement>}
	 */
	reviews = [];

	constructor() {
		this.#onload();
	}

	/**
	 *
	 * @param {number} i index of the
	 */
	setReviewActive(i) {
		this.hideAll();
		this.show(i);
	}

	/**
	 *
	 * @param {number} n index of the
	 */
	showSlide(n) {
		if (n > this.reviews.length) {
			return;
		}
		this.setReviewActive(n);
	}

	/**
	 *
	 * @param {number} i
	 */
	show(i) {
		this.reviews[i].classList.add('is-active');
		this.indicators[i].classList.add('is-active');
	}

	hideAll() {
		for ( let j = 0; j < this.reviews.length; j++ ) {
			this.reviews[j].classList.remove('is-active');
			this.indicators[j].classList.remove('is-active');
		}
	}

	#onload() {
		this.#setIndicators();
		this.#setReviews();
		this.showSlide(0);
	}

	#setIndicators() {
		const indicators = document.querySelectorAll('.review-dot');

		if (indicators.length === 0) {
			throw new Error('No indicators found');
		}

		this.indicators = indicators;
	}

	#setReviews() {
		const reviews = document.querySelectorAll('.review');

		if (reviews.length === 0) {
			throw new Error('No reviews found');
		}

		this.reviews = reviews;
	}
}
