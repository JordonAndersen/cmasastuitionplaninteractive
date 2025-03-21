document.addEventListener("DOMContentLoaded", function () {
    console.log("Page has fully loaded.")
})



function selection() {
    // defining varibales 
    var paymentType = ""
    var schoolType = ""
    let checkPayment = document.querySelector('input[name="tuition-plan"]:checked');
    let checkSchool = document.querySelector('input[name="school-level"]:checked');

    paymentType = checkPayment.value
    schoolType = checkSchool.value

    //changing image based on school type
    if (schoolType == "elementary" ){
        // updating elem personalized card 
        document.getElementById("personalizedicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Elementary%20icon%20personalized.png"
        // updating elem essential card 
        document.getElementById("essentialicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Elementary%20icon%20essential.png"
        // updating elem premier card 
        document.getElementById("premiericon").src = "https://www.cmasas.org/sites/default/files/2025-03/Elementary%20icon%20premier.png"
    }
    else if (schoolType == "middle"){
        // updating MS personalized card 
        document.getElementById("personalizedicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Middle%20School%20Icon%20personalized.png"
        // updating MS essential card 
        document.getElementById("essentialicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Middle%20School%20Icon%20essential.png"
        // updating MS premier card 
        document.getElementById("premiericon").src = "https://www.cmasas.org/sites/default/files/2025-03/Middle%20School%20Icon%20premier.png"

    }
    else{
       // updating HS personalized card 
       document.getElementById("personalizedicon").src = "https://www.cmasas.org/sites/default/files/2025-03/High%20School%20Icon.png"
       // updating HS essential card 
       document.getElementById("essentialicon").src = "https://www.cmasas.org/sites/default/files/2025-03/High%20School%20Icon.png"
       // updating HS premier card 
       document.getElementById("premiericon").src = "https://www.cmasas.org/sites/default/files/2025-03/High%20School%20Icon.png"

    }



    //Checking to see if the annual toggle is selected. 
    if (paymentType == "annual") {
        if (schoolType == "elementary") { 
            // updating personalized card          
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizeddescrip").innerHTML = "<li>Low Annual Base Tuition + Pay as you go for Courses</li>        <li>PEC Support Level 1 (1 Day/Week)</li>        <li>Weekly Homeroom</li>        <li>CI Support</li>        <li>Unlimited Club Access</li>        <li>Regional Gathering Opportunities</li>        <li>International Trip Opportunities</li>        <li>Full Elective Course Access</li>"
            // updating essential card             
            document.getElementById("essentialprice").innerHTML = "$6,660 Tuition"
            document.getElementById("essentialdescrip").innerHTML = "<li>Up to 5 Full Year Courses</li> <li>4 Core + 1 Elective</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Access</li>"
            // updating premier card 
            document.getElementById("premierprice").innerHTML = "$7,750 Tuition"
            document.getElementById("premierdescrip").innerHTML = "<li>Up to 6 Full Year Courses</li><li>4 Core + 2 Electives</li><li>PEC Support Level 1 (1 Day/Week)</li><li>Weekly Homeroom</li><li>CI Support</li><li>Unlimited Club Access</li><li>Regional Gathering Opportunities</li><li>International Trip Opportunities</li><li>Full Elective Course Access (200+ Courses)</li>"
        }
        
        else if (schoolType == "middle") {
            console.log("Middle School is loaded")
            // updating personalized card 
          
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizeddescrip").innerHTML = "<li>Low Annual Base Tuition + Pay as you go for Courses</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Access (200+ Courses)</li>"
            // updating essential card 
            document.getElementById("essentialprice").innerHTML = "$7,500 Tuition"
            document.getElementById("essentialdescrip").innerHTML = "<li>Up to 5 Full Year Courses</li>  <li>4 Core + 1 Elective</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Choices *</li>  <li>No HS Courses/Credit</li>"
            // updating premier card 
            document.getElementById("premierprice").innerHTML = "$8,500 Tuition"
            document.getElementById("premierdescrip").innerHTML = "<li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access</li>  <li>HS Courses/Credit</li>"


        }
        else {
            console.log("High School is loaded")
            // updating personalized card             
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizeddescrip").innerHTML = "  <li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>College Prep Diploma (Recommended)</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access (200+ Courses)</li>  <li>Honors, AP, and Dual Enrollment</li>"
            // updating essential card 
            document.getElementById("essentialprice").innerHTML = "$9,960 Tuition"
            document.getElementById("essentialdescrip").innerHTML = " <li>Up to 5 Full Year Courses</li>  <li>4 Core + 1 Elective</li>  <li>Standard Diploma (Recommended)</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Choices</li>  <li>Honors, AP, and Dual Enrollment not included</li>"
            // updating premier card 
            document.getElementById("premierprice").innerHTML = "$11,750 Tuition"
            document.getElementById("premierdescrip").innerHTML = " <li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access</li>  <li>HS Courses/Credit</li>"

        }


    }
    // if it is equal to semster it will change the cards to the following. 
    else{
        if (schoolType == "elementary") { 
            // updating personalizd card          
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizeddescrip").innerHTML = ""
            // updating essential card             
            document.getElementById("essentialprice").innerHTML = "$6,660 Tuition"
            document.getElementById("essentialdescrip").innerHTML = ""
            // updating premier card 
            document.getElementById("premierprice").innerHTML = "$7,750 Tuition"
            document.getElementById("premierdescrip").innerHTML = ""
        }
        // updating personalized card 
        else if (schoolType == "middle") {
            console.log("Middle School is loaded")
            // updating personalized card 
          
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizeddescrip").innerHTML = ""
            // updating essential card 
            document.getElementById("essentialprice").innerHTML = "$7,500 Tuition"
            document.getElementById("essentialdescrip").innerHTML = ""
            // updating premier card 
            document.getElementById("premierprice").innerHTML = "$8,500 Tuition"
            document.getElementById("premierdescrip").innerHTML = ""


        }
        else {
            console.log("High School is loaded")
            // updating personalized card             
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizeddescrip").innerHTML = ""
            // updating essential card 
            document.getElementById("essentialprice").innerHTML = "$2,750 Tuition"
            document.getElementById("essentialdescrip").innerHTML = ""
            // updating premier card 
            document.getElementById("premierprice").innerHTML = "$2,750 Tuition"
            document.getElementById("premierdescrip").innerHTML = ""

        }

    }
}






