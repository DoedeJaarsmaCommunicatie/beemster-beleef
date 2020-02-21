import Filter from '../app/filter/Filter'

export default {
	init() {
		// Fire initial hooks
		filterOpener();
	},
	finalize() {
		// Javascript that fires on page. after page specific JS is fires.
		themeFilter();
		timeFilter();
	},
};

const themeFilter = () => {
	new Filter()
		.setTarget('thema')
		.isUrl()
		.build();
}

const timeFilter = () => {
	new Filter()
		.setTarget('tijd')
		.isUrl()
		.build();
}

const filterOpener = () => {
	const button = document.querySelector('.js-filter-open');
	if (!button) { return; }
	button.addEventListener('click', () => document.querySelector('.js-filter')?.classList.toggle('hidden'));
}
