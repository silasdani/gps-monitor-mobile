
import jwt_decode from "jwt-decode";
 
var token = "eyJhbGciOiJIUzI1NiJ9.eyJ0ZXN0IjoiYmxhaCJ9.e06DxDnwYzeI_ziyXqNlwnBPg534FOCyYiX1qU8l3zI";
var decoded = jwt_decode(token);
console.log(decoded)