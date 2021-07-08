const students =[
    {name : "aba", age: 20},
    {name : "bara" , age: 21},
    {name : "caca", age:20}
];

function coba(){
    myBody = document.getElementsByTagName("body")[0];
    myTbl = document.createElement("table");
    myTblBody = document.createElement("tbody");

    for (var i = 0; i< students.length; i++){
        row = document.createElement("tr");

        for (var j = 0 ; j < 1; j++){
            cell = document.createElement("td");
            text = document.createTextNode(students[i].name + " - " +students[i].age);
            cell.appendChild(text);
            row.appendChild(cell);
            myTblBody.appendChild(row);
        }
       
    }
    myTbl.appendChild(myTblBody);
    myBody.appendChild(myTbl);
    myTbl.setAttribute("border", 2);
}
var a = 1
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time))
function myFunction() {
    var total = 0;
    if (a === 1) {
        for (i = 0; i < students.length; i++) {
            console.log(students[i]);
            let totalTemp = total + students[i].age;
            total = totalTemp;
        }
        let avg = total / students.length;
        wait(5000).then(() => {
            console.log('age is ' + avg)
            document.getElementById('result').innerHTML = 'The average result: ' + avg
            flag = -1
          })
          console.log('second call started')
          wait(2000).then(() => {
            console.log('second call finished')
            console.log('third call started')
            wait(5000).then(() => {
                console.log('third call finished')
            })
          })
    } else {
        document.getElementById("result").innerHTML = "No result";
        a = 1;
    }
}
