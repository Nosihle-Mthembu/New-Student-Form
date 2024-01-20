function butn(){
    var Name = document.getElementById("Name").value
    var Surname = document.getElementById("Surname").value
    var Student_number = document.getElementById("Student-number").value
    var DOB = document.getElementById("calender").value
    var Gmail = document.getElementById("gmail").value
    var umber = document.getElementById("umber").value
    var Cellphone_no = document.getElementById("cellphone_no").value
    var cell = umber + Cellphone_no
    var address = document.getElementById("address").value
    var crime = document.getElementById("crime").value
    var Sub = document.getElementById("stream").value
    var Institute = document.getElementById("institute").value
    var Currently_doing = document.getElementById("currently_doing").value
    var Qualification = document.getElementById("quali").value
    var Faculty = document.getElementById("faculty").value
    var Qualification_obtained = document.getElementById("qo").value


    

    var contact_details = {
        Name : Name,
        Surname : Surname,
        Student_number : Student_number,
        DOB : DOB,
        Gmail : Gmail,
        Cellphone_no : Cellphone_no,
        umber : cell,
        address  : address,
        crime : crime,
        Sub : Sub,
        Institute : Institute,
        Currently_doing : Currently_doing,
        Qualification : Qualification,
        Faculty : Faculty,
        Qualification_obtained : Qualification_obtained,
        south_african: decision1,
        Applied: decision2,
        Matric_only: decision3,
        Oppotunities: decision4,
        Criminal: decision5,
        Over_oppotunities: decision6,

    }
const url = "https://formspree.io/f/mkndggpw"
// const url = "https://formspree.io/f/mdoqkynl"
let send = JSON.stringify(contact_details)

fetch(url, {method:"POST", body:send, headers:{"Content-Type" : "application/json"}}).catch(function(error){console.log(error)})


  console.log(contact_details)  
}

var decision1,decision2,decision3,decision4,decision5,decision6

function ansa1(value){
  decision1 = value
}

function ansa2(value){
  decision2 = value
}

function ansa3(value){
  decision3 = value
}

function ansa4(value){
  decision4 = value
}

function ansa5(value){
  decision5 = value
  document.getElementById("explain").style.display ="block"
}

function ansa(value){
  decision5 = value
  document.getElementById("explain").style.display ="none"
}

function ansa6(value){
  decision6 = value
}





// var Gmail

// function Gmail1(){
 
//   if(Gmail1.indexOf("@") == -1){
//       alert("Invalid email address")
//   }
// }


// const butn = function(){
//   let response = 'SA citizen:' + decision1 + "\nApplied:" + decision2+ "\nMatric only:" + decision3 + "\nOppotunities:" + decision4 + "\nOther countries:" + decision5 + "\nOver oppotunities:" + decision6;
//   console.log(response)
// }