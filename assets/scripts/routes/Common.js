import Reviews from '../app/reviews'
export default {
  init() {
    // Javascript that fires on all pages.
  },

  finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    window['review'] = new Reviews;
  },
};
