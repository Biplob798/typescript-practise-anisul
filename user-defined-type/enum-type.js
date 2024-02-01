// enum type- store constants;duplicate value is not allowed here
// enum type:numeric,string,hetergenous
// type:numeric
// enum RequestType{
// readData,
// saveData,
// deleteData,
// getData
//     readData=1,
//     saveData,
//     deleteData,
//     getData
// }
// console.log(RequestType.readData);
// // enum string 
// enum RequestType2{
//     readData='read_data',
//     saveData='save_data',
//     deleteData='delete_data',
//     getData='get_data'
// }
// console.log(RequestType2.deleteData);
// // enum hetaregenioues 
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "read_data";
    RequestType3["saveData"] = "save_data";
    RequestType3["deleteData"] = "delete_data";
    RequestType3[RequestType3["id"] = 12] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
