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
    if (schoolType == "elementary") {
        // updating elem personalized card 

        document.getElementById("personalizedicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Elementary%20icon%20personalized.png"
        // updating elem essential card 

        document.getElementById("essentialicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Elementary%20icon%20essential.png"
        // updating elem premier card 

        document.getElementById("premiericon").src = "https://www.cmasas.org/sites/default/files/2025-03/Elementary%20icon%20premier.png"
    }
    else if (schoolType == "middle") {
        // updating MS personalized card 
        document.getElementById("personalizedicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Middle%20School%20Icon%20personalized.png"
        // updating MS essential card 
        document.getElementById("essentialicon").src = "https://www.cmasas.org/sites/default/files/2025-03/Middle%20School%20Icon%20essential.png"
        // updating MS premier card 
        document.getElementById("premiericon").src = "https://www.cmasas.org/sites/default/files/2025-03/Middle%20School%20Icon%20premier.png"

    }
    else {
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

            document.getElementById("personalizeddescrip").className = "tuitiondescrip"
            // updating personalized card          
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizedincluded").innerHTML = "Whats included:"
            document.getElementById("personalizeddescrip").innerHTML = "<li>Low Annual Base Tuition + Pay as you go for Courses</li>        <li>PEC Support Level 1 (1 Day/Week)</li>        <li>Weekly Homeroom</li>        <li>CI Support</li>        <li>Unlimited Club Access</li>        <li>Regional Gathering Opportunities</li>        <li>International Trip Opportunities</li>        <li>Full Elective Course Access</li>"
            document.getElementById("personalizedpowerups").innerHTML= "<div class='tuitionline'></div>        <div class='center'>          <div class='powerupsgreen'>Power-Ups</div>        </div>        <p class='poweruptext'>          PEC Level 2: 2 Total Days/Week        </p>        <p class='powerupsubtext'>          $1,500 (Semester) $2,500 (Annual)        </p>        <p class='poweruptext'>          PEC Level 3: 3 Total Days/Week + Daily Check-Ins        </p>        <p class='powerupsubtext'>          $3,000 (Semester) $5,000 (Annual)        </p>        <p class='powerupsubtext'>          Payment Plan Available        </p>"
            // updating essential card    
            document.getElementById("essentialdescrip").className = "tuitiondescrip"
            document.getElementById("essentialprice").innerHTML = "$6,660 Tuition"
            document.getElementById("essentialincluded").innerHTML = "Whats included:"
            document.getElementById("essentialdescrip").innerHTML = "<li>Up to 5 Full Year Courses</li> <li>4 Core + 1 Elective</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Access*</li>  <li style='list-style-type: none;   font-size: 12px;'>*Included elective courses denoted in course catalog</li>"
             document.getElementById("essentialpowerups").innerHTML= "<div class='tuitionline'></div>        <div class='center'>          <div class='powerupsgreen'>Power-Ups</div>        </div>        <p class='poweruptext'>          PEC Level 2: 2 Total Days/Week        </p>        <p class='powerupsubtext'>          $1,500 (Semester) $2,500 (Annual)        </p>        <p class='poweruptext'>          PEC Level 3: 3 Total Days/Week + Daily Check-Ins        </p>        <p class='powerupsubtext'>          $3,000 (Semester) $5,000 (Annual)        </p>        <p class='powerupsubtext'>          Payment Plan Available        </p>"
            // updating premier card 
             document.getElementById("mostpopular").className = "mostpopular"
            document.getElementById("premierdescrip").className = "tuitiondescrip"
            document.getElementById("premierprice").innerHTML = "$7,750 Tuition"
            document.getElementById("premierincluded").innerHTML = "Whats included:"
            document.getElementById("premierdescrip").innerHTML = "<li>Up to 6 Full Year Courses</li><li>4 Core + 2 Electives</li><li>PEC Support Level 1 (1 Day/Week)</li><li>Weekly Homeroom</li><li>CI Support</li><li>Unlimited Club Access</li><li>Regional Gathering Opportunities</li><li>International Trip Opportunities</li><li>Full Elective Course Access (200+ Courses)</li>"
             document.getElementById("premierpowerups").innerHTML= "<div class='tuitionline'></div>        <div class='center'>          <div class='powerupsgreen'>Power-Ups</div>        </div>        <p class='poweruptext'>          PEC Level 2: 2 Total Days/Week        </p>        <p class='powerupsubtext'>          $1,500 (Semester) $2,500 (Annual)        </p>        <p class='poweruptext'>          PEC Level 3: 3 Total Days/Week + Daily Check-Ins        </p>        <p class='powerupsubtext'>          $3,000 (Semester) $5,000 (Annual)        </p>        <p class='powerupsubtext'>          Payment Plan Available        </p>"
        }

        else if (schoolType == "middle") {
            console.log("Middle School is loaded")
            // updating personalized card 
            document.getElementById("personalizeddescrip").className = "tuitiondescrip"
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizedincluded").innerHTML = "Whats included:"
            document.getElementById("personalizeddescrip").innerHTML = "<li>Low Annual Base Tuition + Pay as you go for Courses</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Access (200+ Courses) </li> "
            document.getElementById("personalizedpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"
            // updating essential card 
            document.getElementById("essentialdescrip").className = "tuitiondescrip"
            document.getElementById("essentialprice").innerHTML = "$7,500 Tuition"
            document.getElementById("essentialincluded").innerHTML = "Whats included:"
            document.getElementById("essentialdescrip").innerHTML = "<li>Up to 5 Full Year Courses</li>  <li>4 Core + 1 Elective</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Choices *</li>  <li>No HS Courses/Credit</li> <li style='list-style-type: none;   font-size: 12px;'>*Included elective courses denoted in course catalog</li>"
             document.getElementById("essentialpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"
            // updating premier card 
            document.getElementById("mostpopular").className = "mostpopular"
            document.getElementById("premierdescrip").className = "tuitiondescrip"
            document.getElementById("premierprice").innerHTML = "$8,500 Tuition"
            document.getElementById("premierincluded").innerHTML = "Whats included:"
            document.getElementById("premierdescrip").innerHTML = "<li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access</li>  <li>HS Courses/Credit</li>"
              document.getElementById("premierpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"


        }
        else {
            console.log("High School is loaded")
            //updating styles for the card
            document.getElementById("personalizeddescrip").className = "tuitiondescriphs"

            // updating personalized card             
            document.getElementById("personalizedprice").innerHTML = "$2,750 Tuition"
            document.getElementById("personalizedincluded").innerHTML = "Whats included:"
            document.getElementById("personalizeddescrip").innerHTML = "  <li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>College Prep Diploma (Recommended)</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access (200+ Courses)</li>  <li>Honors, AP, and Dual Enrollment</li>"
            // updating essential card 
            document.getElementById("essentialdescrip").className = "tuitiondescriphs"
            document.getElementById("essentialprice").innerHTML = "$9,960 Tuition"
            document.getElementById("essentialincluded").innerHTML = "Whats included:"
            document.getElementById("essentialdescrip").innerHTML = " <li>Up to 5 Full Year Courses</li>  <li>4 Core + 1 Elective</li>  <li>Standard Diploma (Recommended)</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Choices</li>  <li>Honors, AP, and Dual Enrollment not included</li> <li style='list-style-type: none;   font-size: 12px;'>*Included elective courses denoted in course catalog</li>"
             document.getElementById("essentialpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"
            // updating premier card 
            document.getElementById("mostpopular").className = "hsmostpopular"
            document.getElementById("premierdescrip").className = "tuitiondescriphs"
            document.getElementById("premierprice").innerHTML = "$11,750 Tuition"
            document.getElementById("premierincluded").innerHTML = "Whats included:"
            document.getElementById("premierdescrip").innerHTML = " <li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access</li>  <li>HS Courses/Credit</li>"
            document.getElementById("premierpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"

        }


    }
    // if it is equal to semster it will change the cards to the following. 
    else {
        if (schoolType == "elementary") {
            //updating styles for the card
            document.getElementById("personalizeddescrip").className = "tuitiondescrip"           
            document.getElementById("essentialdescrip").className = "tuitiondescrip"
            document.getElementById("premierdescrip").className = "tuitiondescrip"
            document.getElementById("mostpopular").className = "mostpopularsemster"
           

         // updating personalized card 
            document.getElementById("personalizedprice").innerHTML = ""
            document.getElementById("personalizedincluded").innerHTML = "NOT AVAILABLE FOR SEMESTER PRICING"
            document.getElementById("personalizeddescrip").innerHTML = ""
            document.getElementById("personalizedpowerups").innerHTML= ""
           

            // updating essential card   
            document.getElementById("essentialprice").innerHTML = ""
            document.getElementById("essentialincluded").innerHTML = "NOT AVAILABLE FOR SEMESTER PRICING"

            document.getElementById("essentialdescrip").innerHTML = ""
             document.getElementById("essentialpowerups").innerHTML= ""
       
           
            // updating premier card 
            document.getElementById("premierprice").innerHTML = ""
            document.getElementById("premierincluded").innerHTML = "NOT AVAILABLE FOR SEMESTER PRICING"
            document.getElementById("premierdescrip").innerHTML = ""
             document.getElementById("premierpowerups").innerHTML= ""

        }
        // updating personalized card 
        else if (schoolType == "middle") {
            console.log("Middle School is loaded")
            //updating styles for the card
            document.getElementById("personalizeddescrip").className = "tuitiondescrip"
            document.getElementById("essentialdescrip").className = "tuitiondescrip"
            document.getElementById("premierdescrip").className = "tuitiondescrip"
            // updating personalized card         
            document.getElementById("personalizedprice").innerHTML = ""
            document.getElementById("personalizedincluded").innerHTML = "NOT AVAILABLE FOR SEMESTER PRICING"
            document.getElementById("personalizeddescrip").innerHTML = ""
            document.getElementById("personalizedpowerups").innerHTML= ""
         
            // updating essential card 
            document.getElementById("essentialprice").innerHTML = "$4,500 Tuition"
            document.getElementById("essentialincluded").innerHTML = "Whats included:"
            document.getElementById("essentialdescrip").innerHTML = "<li>Up to 5 Full Year Courses</li>  <li>4 Core + 1 Elective</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Choices *</li>  <li>No HS Courses/Credit</li> <li style='list-style-type: none;   font-size: 12px;'>*Included elective courses denoted in course catalog</li>"
                  document.getElementById("essentialpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"
            
            // updating premier card 
            document.getElementById("mostpopular").className = "mostpopular"
            document.getElementById("premierprice").innerHTML = "$5,000 Tuition"
            document.getElementById("premierincluded").innerHTML = "Whats included:"
            document.getElementById("premierdescrip").innerHTML = "<li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access</li>  <li>HS Courses/Credit</li>"
                  document.getElementById("premierpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"


        }
        else {
            console.log("High School is loaded")
            document.getElementById("personalizeddescrip").className = "tuitiondescriphs"
            // updating personalized card             
             document.getElementById("personalizedprice").innerHTML = ""
             document.getElementById("personalizedincluded").innerHTML = "NOT AVAILABLE FOR SEMESTER PRICING"
             document.getElementById("personalizeddescrip").innerHTML = ""
             document.getElementById("personalizedpowerups").innerHTML= ""
            // updating essential card 
            document.getElementById("essentialdescrip").className = "tuitiondescriphs"
            document.getElementById("essentialprice").innerHTML = "$5,700 Tuition"
            document.getElementById("essentialincluded").innerHTML = "Whats included:"
            document.getElementById("essentialdescrip").innerHTML = " <li>Up to 5 Full Year Courses</li>  <li>4 Core + 1 Elective</li>  <li>Standard Diploma (Recommended)</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Limited Clubs (1)</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Limited Elective Choices</li>  <li>Honors, AP, and Dual Enrollment not included</li> <li style='list-style-type: none;   font-size: 12px;'>*Included elective courses denoted in course catalog</li>"
              document.getElementById("essentialpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"
            // updating premier card 
            document.getElementById("mostpopular").className = "hsmostpopular"
            document.getElementById("premierdescrip").className = "tuitiondescriphs"
            document.getElementById("premierprice").innerHTML = "$6,700 Tuition"
            document.getElementById("premierincluded").innerHTML = "Whats included:"
            document.getElementById("premierdescrip").innerHTML = " <li>Up to 6 Full Year Courses</li>  <li>4 Core + 2 Electives</li>  <li>PEC Support Level 1 (1 Day/Week)</li>  <li>Weekly Homeroom</li>  <li>CI Support</li>  <li>Unlimited Club Access</li>  <li>Regional Gathering Opportunities</li>  <li>International Trip Opportunities</li>  <li>Full Elective Course Access</li>  <li>HS Courses/Credit</li>"
            document.getElementById("premierpowerups").innerHTML= "<div class='tuitionline'>&nbsp;</div><div class='center'><div class='powerupsblue'>Power-Ups</div></div><p class='poweruptext'>PEC Level 2: 2 Total Days/Week</p><p class='powerupsubtext'>$1,500 (Semester) $2,500 (Annual)</p><p class='poweruptext'>PEC Level 3: 3 Total Days/Week + Daily Check-Ins</p><p class='powerupsubtext'>$3,000 (Semester) $5,000 (Annual)</p><p class='powerupsubtext'>Payment Plan Available</p>"



        }

    }
}






