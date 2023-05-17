const Handlebars = require('handlebars');

module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // Format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  starRating: function (rating) {
    let stars = '';

    // Generate the checked stars
    for (let i = 0; i < rating; i++) {
      stars += '<span class="fa fa-star checked"></span>';
    }

    // Generate the unchecked stars
    for (let i = rating; i < 5; i++) {
      stars += '<span class="fa fa-star"></span>';
    }

    return new Handlebars.SafeString(stars);
  },
};
Handlebars.registerHelper('starRating', module.exports.starRating);