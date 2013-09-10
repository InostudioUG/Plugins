/**
 * An alternative to the formatted number sorting function above (particularly
 * useful when considering localisation which uses dots/periods for 10^3
 * separation rather than decimal places). Another method of overcoming it
 * difficulties of sorting formatted numbers is to have the data to be sorted
 * upon separate from the visual data. This sorting function pair will use the
 * 'title' attribute of en empty span element (or anything else) to sort
 * numerically (for example <span title="1000000"><span>1'000'000).
 *  @name Hidden title numeric sorting
 *  @anchor hidden_title
 *  @author <a href="http://sprymedia.co.uk">Allan Jardine</a>
 */

define([
    'jquery',
    'dataTables'
], function (jQuery) {
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        'title-numeric-pre': function (a) {
            var x = a.match(/title="*(-?[0-9\.]+)/)[1];
            return parseFloat(x);
        },

        'title-numeric-asc': function (a, b) {
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },

        'title-numeric-desc': function (a, b) {
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        }
    });
});