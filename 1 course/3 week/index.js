/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var newDate = new Date(date);
    console.log(newDate.getFullYear())
    return {
        add : function(val, type){
            newDate.setDate(newDate.getDate() + 2);
            return this.newDate;
        },
        subtract : function(val, type){
            console.log(newDate.getFullYear())
            newDate.setDate(date.getDate() - val);
            console.log(newDate.getFullYear())
            return this.newDate;
        }

    }
};
