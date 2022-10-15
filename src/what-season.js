const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date*/) {
  /**let month = date.getMonth();
  let days = date.getDays();
  switch(month){
    case 01:
      return 'winter';
    case 02:
      return 'winter';
    case 03:
      return 'spring';
    case 04:
      return 'spring';
    case 05:
      return 'spring';
    case 06:
      return 'summer';
    case 07:
      return 'summer';
    case 08:
      return 'summer';
    case 09:
      return 'fall';
    case 10:
      return 'fall';
    case 11:
      return 'fall';
    case 12:
      return 'winter';

  }
*/
}

module.exports = {
  getSeason
};
