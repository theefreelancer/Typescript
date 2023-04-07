var PersonalComputer = /** @class */ (function () {
    function PersonalComputer() {
    }
    PersonalComputer.prototype.screenMount = function (data) {
        if (typeof (data) === "number")
            return data.toString();
        if (typeof (data) === "string")
            return data.length;
    };
    return PersonalComputer;
}());
var pcObject = new PersonalComputer();
console.log("The result is :" + pcObject.screenMount(911));
var welcomeBrandName = "Linux-distros";
console.log("The distributor of this Operating system is " + pcObject.screenMount(welcomeBrandName));
