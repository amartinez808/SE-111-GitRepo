
//Antonio Martinez
//Student test scores
//lab2
//SE251
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

   again = prompt("Repeat entries? (y/n)", "y");

} while (again == "y");

/*const $ = selector => document.querySelector(selector);

const name   = $("#name").value;
const hours   = $("#hours").value;
const rate  = $("#rate").value;

const joinList = evt => {
    //get data from user input
        const name   = $("#name").value;
        const hours   = $("#hours").value;
        const rate  = $("#rate").value;
        

        
    //check entries

    let isValid = true;

    if (name == "") {
        $("#name_error").textContent = "Name is required.";
        isValid = false;
    }
    else {
        $("#name_error").textContent = "";
    }

    if (hours == "") {
        $("#hours_error").textContent = "Hours worked is required.";
        isValid = false;
    }
    else {
        $("#hours_error").textContent = "";
    }

    if (rate == "") {
        $("#rate_error").textContent = "hourly rate is required.";
        isValid = false;
    }
    else {
        $("#rate_error").textContent = "";
    }
    // deny submition if user data entrie is invalid
    if (isValid === false) {
        evt.preventDefault();
    }
    document.write(`<p> ${names}${net}</p>`);

};


const clearForm = () => {

    //clear each text-box
    $("#name").value = "";
    $("#hours").value = "";
    $("#rate").value = "";
    $("#tax").value = "";

    //clear span elements
    $("#name_error").textContent = "*";
    $("#hours_error").textContent = "*";
    $("#rate_error").textContent = "*";
    $("#tax_error").textContent = "*";

    //focus for first text-box after resetting the form
    $("#name").focus();
};


document.addEventListener("DOMContentLoaded", () => {

    //set click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    //focus for first text-box once the form loads
    $("#email_1").focus();
});
*/