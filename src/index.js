module.exports = function reverse (n) {
        let str = n.toString(10);
        let str2 = str.split('').reverse().join('');
        return parseInt(str2); }
