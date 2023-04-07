function goodMorning(name) {
    var suffix = (name ? ",".concat(name, " .") : '.');
    return 'GoodMorning' + suffix;
}
console.log(goodMorning());
console.log(goodMorning('Ronald'));
