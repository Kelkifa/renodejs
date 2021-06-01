function typesParseArr(objArray) {
    var arr = objArray.map(value => value.type);
    return Array.from(new Set(arr));
}
module.exports = typesParseArr;