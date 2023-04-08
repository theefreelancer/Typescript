//A simple arrow function that takes in values of different primitive types and 
//Outputs a string.

let userDetails = (
        name: string,
        dateOfBirth: string,
        accolades: string[]
): string => {
        let userDetail = name + " was born in " + dateOfBirth + " and he has achieved the following accolades " + accolades[0] + ","
        accolades[1] + "," + accolades[2] + "," + accolades[3];
return userDetail;
}
console.log(userDetails("James", "2003",["Accidental Vlogger", "Open Source Community Leader", "OpenUK","FINOS Leader Community"]))