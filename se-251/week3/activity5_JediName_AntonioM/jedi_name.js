//Antonio Martinez
//Student test scores
//Activity 1
//SE251


const $ = selector => document.querySelector(selector);

//email_1 || get the stuff before @ => Find the @(indexOf), copy the stuff from pos 0 to the @ 

//first_name || use last 2 characters of the name => Get length (1 greater than last subscript) -> startingPoint = length -2, Copy (substr) 2 chars

//smurf | personality trait => copy the first three characters => substr(0, 3)

// season => => Does it have an A, U, I || If it has an A, Store an A ||Else if has an I else Store the U
 
//birthplace => First chars ()=> substr(0, 2)

//Jedi Name = tEmail + tFirst_Name + tSmurf + "-" + tBirthplace + tSeason;

const joinList = evt => {
    //get user entries from the text boxes
    let hourly = $("#hourly").value;
    let hours = $("#hours").value;
    let tax = $("#tax").value;
    let name = $("#name").value;
    
    alert("Full Name: " + name);

    //email_1  => stuff before @ => Find the @(indexOf), copy the stuff from 0 to @ (exlusive)
    let grosspay = hourly * hours;
    alert("Grosspay: " + grosspay);


    let tTax = grosspay * tax;
    alert("Taxes: " + tTax);


    let netpay = grosspay - tTax;

    alert("netpay: " + netpay);



//first_name => last 2 characters of the name => Get length (1 greater than last subscript) -> startingPoint = length -2, Copy (substr) 2 chars
   // let lenFirst = tFirstName.length;
    //tFirstName = tFirstName.substr(lenFirst - 2, 2);

    //alert(tFirstName);

    //smurf / personality trait => copy the first three characters => substr(0, 3)
    //tSmurf = tSmurf.substr(0, 3);


// season => => Does it have an A, U, I || If it has an A, Store an A  || Else if has an I, Store it  else Store the u

 
   // if (tSeason.indexOf("a", 0) > -1) { tSeason = "a"; }
    //else if (tSeason.indexOf("i", 0) > -1) { tSeason = "i"; }
   // else { tSeason = "u"; }

    //birthplace => First chars ()=> substr(0, 2)
    //grosspay = hourly * hours;

    //Jedi Name = tEmail + tFirst_Name + tSmurf + "-" + tBirthplace + tSeason;
    //let netpay = "net:" + grosspay - taxes ;

    //alert("Your Sith-Name henceforth will be: " + netpay);

    // cancel form submit if any user entries are invalid
    if (false=== false) {
        evt.preventDefault();
    }
    alert(("Employee Name: "+ name + 
     " Take Home weekly pay: " + netpay));




};



const clearForm = () => {

    //clear each text-box

    $("#hourly").value = "";
    $("#hours").value = "";
    $("#tax").value = "";
    $("#name").value = "";
    

    //clear span elements
    $("#hourly").textContent = "*";
    $("#hours").textContent = "*";
    $("#tax").textContent = "*";
    $("#name").textContent = "*";
 
    

    //set focus for first text-box after resetting the form
    $("#hourly").focus();
};


document.addEventListener("DOMContentLoaded", () => {

    //set click events for both buttons
    $("#join_list").addEventListener("click", joinList);
    $("#clear_form").addEventListener("click", clearForm);

    //focus for first text-box once the form loads
 
    $("#hourly").focus();
    }
);