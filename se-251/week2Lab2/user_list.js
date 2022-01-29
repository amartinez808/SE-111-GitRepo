
//Antonio Martinez
//Student test scores
//lab2
//SE251

//One do Loop without Arrrays**********************************************************
names = [];
let again = "y";
do {
    let name = prompt("Enter Employee's Name: \t ");
    
    //set object {} target property is ['name'] array literal
    //names != null
    
    //document.getElementById("demo").innerHTML = "Lets take a look at your finances, \t" +names
        

    let tHours = prompt("Enter Hours worked: \t ");
    const hours = parseFloat(tHours);

    let tRate = prompt("Enter hourly rate: \t");
    const rate = parseFloat(tRate);

    let tTaxes = prompt("Enter tax rate (Ex: for 20% Enter .20):\t");
    const taxes =parseFloat(tTaxes);
    
        //again = to initialize
    if (hours > 0 && rate > 0){
        names[names.length] = name;
        const gross_pay = hours * rate;
            
        let tax = gross_pay * taxes;
            
        var net = gross_pay - tax;

        document.write("<br> \t"+names);
        document.write("<br> Gross pay is \t $"+gross_pay);
        document.write("<br> Deductions are \t $"+tax);
        document.write("<br> Net income is \t $"+net);
}
    else {
        alert("One or more entries are invalid");
    }

   again = prompt("Repeat entries? (y/n)", "y");

} while (again == "y");

if (names.length>0){

    let total = 0;

    document.write("<h1>Display results using arrays (INDEX)</h1>");
    for (let i in names) {
        total += names[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${ names[i]}</p >`);
    }

  
}

//********************************************************************************************* */

/*

let again = "y";
do {
    let name = prompt("Enter Employee's Name: \t ");
    const names = name;
    //set object {} target property is ['name'] array literal
    //names != null
    
    //document.getElementById("demo").innerHTML = "Lets take a look at your finances, \t" +names
        

    let tHours = prompt("Enter Hours worked: \t ");
    const hours = parseFloat(tHours);

    let tRate = prompt("Enter hourly rate: \t");
    const rate = parseFloat(tRate);

    let tTaxes = prompt("Enter tax rate (Ex: for 20% Enter .20):\t");
    const taxes =parseFloat(tTaxes);
    
        //again = to initialize
    if (hours > 0 && rate > 0){
        const gross_pay = hours * rate;
            
        let tax = gross_pay * taxes;
            
        var net = gross_pay - tax;

        document.write("<br> \t"+names);
        document.write("<br> Gross pay is \t $"+gross_pay);
        document.write("<br> Deductions are \t $"+tax);
        document.write("<br> Net income is \t $"+net);
}
    else {
        alert("One or more entries are invalid");
    }

   again = prompt("Enter another employee? (y/n)", "y");

} while (again == "y");

let again = "n";

if (again == "n" ){
        const gross_pay = hours * rate;
            
        let tax = gross_pay * taxes;
            
        var net = gross_pay - tax;
        document.write("<h1>Display results NOT using arrays</h1>");
        document.write("<br> \t"+names);
        document.write("<br> Gross pay is \t $"+gross_pay);
        document.write("<br> Deductions are \t $"+tax);
        document.write("<br> Net income is \t $"+net);
};
    
    
    
*/
