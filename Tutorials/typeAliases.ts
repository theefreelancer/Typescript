// type 
// material, color, size, shape, weight, serialnumber
type PhoneSerialNumber = number;
type PhoneMaterial = string;
type PhoneColor = string;
type PhoneWeight = number;
type PhoneShape = string;
 
type Phone ={
   serialNumber: PhoneSerialNumber, 
   material: PhoneMaterial,
   color: PhoneColor,
   weight: PhoneWeight,
   shape: PhoneShape
}

const phoneserial: PhoneSerialNumber = 1800723401
const phonemater: PhoneMaterial = "Nylon";
const phonecol: PhoneColor = "Blue";
const phoneweigh: PhoneWeight = 2.3;
const phoneshap: PhoneShape = "Rectangular";

const phone: Phone = {
        serialNumber: phoneserial,
        material: phonemater,
        color: phonecol,
        weight: phoneweigh,
        shape: phoneshap

}
