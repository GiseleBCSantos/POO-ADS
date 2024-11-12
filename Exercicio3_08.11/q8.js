function main() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    doubleMap(array);
    console.log(array);
    console.log(sumReduce(array));
}
var doubleMap = function (list) {
    for (var i = 0; i < list.length; i++) {
        list[i] *= 2;
    }
};
var sumReduce = function (list) {
    var amount = 0;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        amount += item;
    }
    return amount;
};
main();
