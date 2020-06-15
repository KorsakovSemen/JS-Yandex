/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

    var newDate = new Date(date);

    return {

        add : function(val, type){

            if(val < 0)
                throw new TypeError('Отрицательное значение');

            switch(type){
                case 'years':
                    newDate.setFullYear(newDate.getFullYear() + val);
                    break;
                case 'months':
                    newDate.setMonth(newDate.getMonth() + val);
                    break;
                case 'days':
                    newDate.setDate(newDate.getDate() + val);
                    break;
                case 'hours':
                    newDate.setHours(newDate.getHours() + val);
                    break;
                case 'minutes':
                    newDate.setMinutes(newDate.getMinutes() + val);
                    break;
                case 'seconds':
                    newDate.setSeconds(newDate.getSeconds() + val);
                    break;
                default:
                    throw new TypeError('Неизвестный тип')
            }
            
            this.value = newDate.getFullYear() + '-' + '0' + (newDate.getMonth() + 1) + '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + ("00" + newDate.getMinutes()).slice(-2);
            console.log(this.value);
            return this;

        },
        
        subtract : function(val, type){

            if(val < 0){
                throw new TypeError('Отрицательное значение');
            }

                switch(type){
                    case 'years':
                        newDate.setFullYear(newDate.getFullYear() - val);
                        break;
                    case 'months':
                        newDate.setMonth(newDate.getMonth() - val);
                        break;
                    case 'days':
                        newDate.setDate(newDate.getDate() - val);
                        break;
                    case 'hours':
                        newDate.setHours(newDate.getHours() - val);
                        break;
                    case 'minutes':
                        newDate.setMinutes(newDate.getMinutes() - val);
                        break;
                    case 'seconds':
                        newDate.setSeconds(newDate.getSeconds() - val);
                        break;
                    default:
                        throw new TypeError('Неизвестный тип')
                }
                
                this.value = newDate.getFullYear() + '-' + '0' + (newDate.getMonth() + 1) + '-' + newDate.getDate() + ' ' + newDate.getHours() + ':' + ("00" + newDate.getMinutes()).slice(-2);
                console.log(this.value);
                return this;

        }

    }

};
