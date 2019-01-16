var array_counter = function (array) {
    return "COUNT: " + array.length;
};

var multyply = function (x,y) {
    return `${x} multy ${y} ecvl ${x * y}`;
};

var val = 598;

module.exports = {
    array_counter: array_counter,
    multyply: multyply,
    val: val
};

// module.exports.array_counter = array_counter;
// module.exports.multyply = multyply;
// module.exports.val = val;