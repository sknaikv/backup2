


//form1
const form1 = document.getElementById('form1');
const firstnameVal = document.getElementById('firstname');
const lastnameVal = document.getElementById('lastname');
const contactVal = document.getElementById('contact');
const emailVal = document.getElementById('email');
const countryVal = document.getElementById('country');
const cityVal = document.getElementById('city');
// const male = document.getElementById('male');
// const female = document.getElementById('female');
// const other = document.getElementById('other');
// const gender = document.getElementById('gender');
const genderval = document.getElementById('radio-gender');


//form2
const form2 = document.getElementById("form2");
const degreeVal = document.getElementById('degree');
const passyearVal = document.getElementById('passyear');


//form3
const otherlang2 = document.getElementById('otherlang2');


//form4
const otherlang4 = document.getElementById('otherlang');

//form5
const form5 = document.getElementById("form5")
const ref = document.getElementById('reference')



const form6 = document.getElementById("form6")
const tnc = document.getElementById('t&C')
const fieldset = document.getElementById('fieldset')

// var form1 = document.getElementById("form1")
const form3 = document.getElementById("form3")
const form4 = document.getElementById("form4")
const submit = document.getElementById("submit")

var next1 = document.getElementById("next1")
var next2 = document.getElementById("next2")
var next3 = document.getElementById("next3")
var next4 = document.getElementById("next4")
var next5 = document.getElementById("next5")
var next6 = document.getElementById("next6")
var back1 = document.getElementById("back1")
var back2 = document.getElementById("back2")
var back3 = document.getElementById("back3")
var back4 = document.getElementById("back4")
var back5 = document.getElementById("back5")

// var progress = document.getElementById("progress")



//progress
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 6;
let current = 1;




// bullet[current - 1].classList.add("active");
// bullet[current - 1].classList.add("active");
// current += 1;



// bullet[current - 1].classList.add("active");
// progressCheck[current - 1].classList.add("active");
// progressText[current - 1].classList.add("active");
// current += 1;
// window.scrollTo(100, 100)




//backbtn

back1.onclick = function () {
    form2.style.left = "150%"
    form1.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;

}

back2.onclick = function () {
    form3.style.left = "150%"
    form2.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}

back3.onclick = function () {
    form4.style.left = "150%"
    form3.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}
back4.onclick = function () {
    form5.style.left = "150%"
    form4.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}
back5.onclick = function () {
    form6.style.left = "150%"
    form5.style.left = "50%"
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
}



// **********************************form1 validation************************************************************

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    validateF1();
})





const sendData = (sRate, count) => {
    if (sRate === count) {
        // alert('success');

        form1.style.left = "-50%";
        form2.style.left = "50%"
        // progress.style.width = "28%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        window.scrollTo(100, 100)

    }
}


// finalvalidation form1
const successMsgF1 = () => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate, count);
        } else if(formCon[i].className === "form-control default") {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate, count);
        }else{
            return false;
        }
    }

}


// emailvalidator
const isEmail = (emailVal) => {
    var atsymbol = emailVal.indexOf("@");
    if (atsymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atsymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

const validateF1 = () => {

    //form1 inputs
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const contactVal = contact.value.trim();
    const emailVal = email.value.trim();
    const countryVal = country.value.trim();
    const cityVal = city.value.trim();



    // validate firstname
    if (firstnameVal === "") {
        setErrormsg(firstname, 'Firstname is required');
    } else if (firstnameVal.length < 1) {
        setErrormsg(firstname, 'Firstname is required');
    } else {
        setSuccessmsg(firstname);
    }


    // validate lastname
    if (lastnameVal === "") {
        setErrormsg(lastname, 'Lastname is required');
    } else if (lastnameVal.length < 1) {
        setErrormsg(lastname, 'Lastname is required');
    } else {
        setSuccessmsg(lastname);
    }


    // validate email
    if (emailVal === "") {
        setErrormsg(email, 'Email is required');
    } else if (!isEmail(emailVal)) {
        setErrormsg(email, 'Email is required');
    } else {
        setSuccessmsg(email);
    }

    // validate contact
    if (contactVal === "") {
        setErrormsg(contact, 'Contact is required');
    } else if (contactVal.length != 10) {
        setErrormsg(contact, 'Maximum limit 10 digits only');
    } else {
        setSuccessmsg(contact);
    }

    //validate country
    if (countryVal === "") {
        setErrormsg(country, 'Country is required');
    } else if (countryVal.selectedIndex == 0) {
        setErrormsg(country, 'Country is required');
    } else {
        setSuccessmsg(country);
    }

    //validate city
    if (cityVal === "") {
        setErrormsg(city, 'City is required');
    } else if (cityVal.length < 1) {
        setErrormsg(city, 'City is required');
    } else {
        setSuccessmsg(city);
    }

    //validate gender
    let genderops = document.getElementsByName('genderr');
    let genderbox = document.getElementById('gender');

    for (let i = 0; i < genderops.length; i++) {
        genderops[i].onclick = function () {
            setSuccessmsg(genderbox)
        }

    }
    successMsgF1();


}




//form1 validation color change

form1.addEventListener('change', (event) => {
    event.preventDefault();
    validateF12();
})


const validateF12 = () => {

    //form1 inputs
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const contactVal = contact.value.trim();
    const emailVal = email.value.trim();
    const countryVal = country.value.trim();
    const cityVal = city.value.trim();



    // validate firstname
    if (firstnameVal === "") {
        setErrormsg(firstname, 'Firstname is required');
    } else if (firstnameVal.length < 1) {
        setErrormsg(firstname, 'Firstname is required');
    } else {
        setSuccessmsg(firstname);
    }


    // validate lastname
    if (lastnameVal === "") {
        setErrormsg(lastname, 'Lastname is required');
    } else if (lastnameVal.length < 1) {
        setErrormsg(lastname, 'Lastname is required');
    } else {
        setSuccessmsg(lastname);
    }


    // validate email
    if (emailVal === "") {
        setErrormsg(email, 'Email is required');
    } else if (!isEmail(emailVal)) {
        setErrormsg(email, 'Enter a valid email address (eg: yourname@domain.com)');
    } else {
        setSuccessmsg(email);
    }

    // validate contact
    if (contactVal === "") {
        setErrormsg(contact, 'Contact is required');
    } else if (contactVal.length != 10) {
        setErrormsg(contact, 'Maximum limit 10 digits only');
    } else {
        setSuccessmsg(contact);
    }

    //validate country
    if (countryVal === "") {
        setErrormsg(country, 'Country is required');
    } else if (countryVal.selectedIndex == 0) {
        setErrormsg(country, 'Country is required');
    } else {
        setSuccessmsg(country);
    }

    //validate city
    if (cityVal === "") {
        setErrormsg(city, 'City is required');
    } else if (cityVal.length < 1) {
        setErrormsg(city, 'City is required');
    } else {
        setSuccessmsg(city);
    }

    //validate gender
    // let genderops = document.getElementsByName('genderr');


    // for (let i = 0; i < genderops.length; i++) {
    //     genderops[i].onclick = function () {
    //        setSuccessmsg(genderbox);
    //     }   
    // }


}



//validate gender fucntion
function gendernotclick() {
    let radio1 = document.getElementById('radio-male');
    let radio2 = document.getElementById('radio-female');
    let radio3 = document.getElementById('radio-other');
    let genderbox = document.getElementById('gender');

    if (radio1.checked) {
        setSuccessmsg(genderbox);
    } else if (radio2.checked) {
        setSuccessmsg(genderbox);
    } else if (radio3.checked) {
        setSuccessmsg(genderbox);
    } else {
        setErrormsg(genderbox, 'Select a choice');
    }
}











// **********************************form2 validation************************************************************

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    validateF2();
})




const sendDataf2 = (sRate, count) => {
    if (sRate === count) {
      
        form2.style.left = "-50%";
        form3.style.left = "50%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        // progress.style.width = "50%"
        window.scrollTo(100, 100)

    }
}

// finalvalidation form2
const successMsgF2 = () => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendDataf2(sRate, count);
        } else {
            return false;
        }
    }

}

const validateF2 = () => {
    //form2 inputs
    const degreeVal = degree.value.trim();
    // const passyearVal = passyear.value.trim();


    // validate degree
    if (degreeVal === "") {
        setErrormsg(degree, 'Degree is required');
    } else if (degreeVal.length < 1) {
        setErrormsg(degree, 'Degree is required');
    } else {
        setSuccessmsg(degree);
    }

    //validate passyear
    if (passyearVal === "") {
        setErrormsg(passyear, 'Pass year is required');
    } else if (passyearVal.selectedIndex == 0) {
        setErrormsg(passyear, 'Pass year is required');
    } else {
        setSuccessmsg(passyear);
    }





    successMsgF2();
}



//form2 validation on color change


form2.addEventListener('change', (event) => {
    event.preventDefault();
    validateF22();
})


const validateF22 = () => {
    //form2 inputs
    const degreeVal = degree.value.trim();
    // const passyearVal = passyear.value.trim();


    // validate degree
    if (degreeVal === "") {
        setErrormsg(degree, 'Degree is required');
    } else if (degreeVal.length < 1) {
        setErrormsg(degree, 'Degree is required');
    } else {
        setSuccessmsg(degree);
    }

    //validate passyear
    if (passyearVal === "") {
        setErrormsg(passyear, 'Pass year is required');
    } else if (passyearVal.selectedIndex == 0) {
        setErrormsg(passyear, 'Pass year is required');
    } else {
        setSuccessmsg(passyear);
    }

}


//errormsg
function setErrormsg(input, errormsg) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = "form-control error"
    small.innerText = errormsg;
}
//succesmsg
function setSuccessmsg(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success"
}


function setdefault(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control default"
}




// **********************************************form3validation****************************************




form3.addEventListener('submit', (event) => {
    event.preventDefault();
    validateF3();
})



const sendDataf3 = (sRate, count) => {
    if (sRate === count) {
        form3.style.left = "-50%";
        form4.style.left = "50%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        window.scrollTo(100, 100)

    }
}

// finalvalidation form3
const successMsgF3 = () => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendDataf3(sRate, count);
        } else {
            return false;
        }
    }

}




const validateF3 = () => {
    const otherlang = otherlang2.value.trim();

    //validate otherinput


    var otherbtn = document.getElementById('otherlan2');

    if (otherbtn.checked == true) {


        if (otherlang === "") {
            setErrormsg(otherlang2, '');
        } else if (otherlang.length < 1) {
            setErrormsg(otherlang2, '');
        } else {
            setSuccessmsg(otherlang2);
        }
    }

    successMsgF3();
}


//form3 validation on change


form3.addEventListener('change', (event) => {
    event.preventDefault();
    validateF32();
})

const validateF32 = () => {
    const otherlang = otherlang2.value.trim();

    //validate otherinput


    var otherbtn = document.getElementById('otherlan2');

    if (otherbtn.checked == true) {


        if (otherlang === "") {
            setErrormsg(otherlang2, '');
        } else if (otherlang.length < 1) {
            setErrormsg(otherlang2, '');
        } else {
            setSuccessmsg(otherlang2);
        }
    }
}


// **********************************************form4validation****************************************


form4.addEventListener('submit', function (e) {
    e.preventDefault();
    next4.onclick = function () {
        validateF4();
    }

})


const sendDataf4 = (sRate, count) => {
    if (sRate === count) {
        form4.style.left = "-50%";
        form5.style.left = "50%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        window.scrollTo(100, 100)

    }
}

// finalvalidation form4
const successMsgF4 = () => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendDataf4(sRate, count);
        } else {
            return false;
        }
    }

}


const validateF4 = () => {
    const otherlang1 = otherlang4.value.trim();

    //validate otherinput4


    var otherbtn = document.getElementById('otherlan');

    if (otherbtn.checked == true) {


        if (otherlang1 === "") {
            setErrormsg(otherlang4, '');
        } else if (otherlang1.length < 1) {
            setErrormsg(otherlang4, '');
        } else {
            setSuccessmsg(otherlang4);
        }
    }else {
        
    }

    successMsgF4();
}




//form4 validation on change

form4.addEventListener('change', (event) => {
    event.preventDefault();
    validateF42();
})


const validateF42 = () => {
    const otherlang1 = otherlang4.value.trim();

    //validate otherinput4


    var otherbtn = document.getElementById('otherlan');

    if (otherbtn.checked == true) {


        if (otherlang1 === "") {
            setErrormsg(otherlang4, '');
        } else if (otherlang1.length < 1) {
            setErrormsg(otherlang4, '');
        } else {
            setSuccessmsg(otherlang4);
        }
    }else{
        setdefault(otherlang4);
    }

}



// **********************************************************form5validation***********************************************

form5.addEventListener('submit', function (e) {
    e.preventDefault();
    validateF5();
})



const sendDataf5 = (sRate, count) => {
    if (sRate === count) {
        form5.style.left = "-50%";
        form6.style.left = "50%"
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        window.scrollTo(100, 100)

    }
}

// finalvalidation form5
const successMsgF5 = () => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendDataf5(sRate, count);
        } else {
            return false;
        }
    }

}



const validateF5 = () => {
    const refe = ref.value.trim();

    //validateref
    if (refe === "") {
        setErrormsg(ref, 'Reference is required');
    } else if (refe.length < 1) {
        setErrormsg(ref, 'Reference is required');
    } else {
        setSuccessmsg(ref);
    }

    successMsgF5();
}



//form5 validation on change

form5.addEventListener('change', (event) => {
    event.preventDefault();
    validateF52();
})


const validateF52 = () => {
    const refe = ref.value.trim();

    //validateref
    if (refe === "") {
        setErrormsg(ref, 'Reference is required');
    } else if (refe.length < 1) {
        setErrormsg(ref, 'Reference is required');
    } else {
        setSuccessmsg(ref);
    }

}





function enabledisableTB() {
    var other = document.getElementById("otherlan");
    var otherlan = document.getElementById("otherlang");
    otherlan.disabled = other.checked ? false : true;
    otherlan.value = "";

    if (!otherlan.disabled) {
        otherlan.focus();
    }
}

function enabledisableTB2() {
    var other2 = document.getElementById("otherlan2");
    var otherlan2 = document.getElementById("otherlang2");
    otherlan2.disabled = other2.checked ? false : true;
    otherlan2.value = "";

    if (!otherlan2.disabled) {
        otherlan2.focus();
    }
}



// const smallgender = document.getElementById('small-gender');
// function selectedgender() {


//     if (document.getElementById('male').checked) {
//         document.getElementById('gender').style.borderColor = 'green';
//         document.getElementById('small-gender').style.display = "none";
//     } else if (document.getElementById('female').checked) {
//         document.getElementById('gender').style.borderColor = 'green';
//         document.getElementById('small-gender').style.display = "none";
//     } else if (document.getElementById('other').checked) {
//         document.getElementById('gender').style.borderColor = 'green';
//         document.getElementById('small-gender').style.display = "none";
//     } else {
//         document.getElementById('gender').style.borderColor = '#BC383E';
//         document.getElementById('small-gender').style.display = "inline";

//     }


//     let genderops = document.getElementsByName('genderr');

//     for (let i = 0; i < genderops.length; i++) {
//         genderops[i].onclick = function () {
//             let target = document.getElementById('gender');
//             let target2 = document.getElementById('small-gender');
//             target.style.borderColor = 'green';
//             target2.style.display = 'none';

//         }
//     }
// }


// var selected = document.querySelector('input[name="gender"]:checked');
// if (selected) {
//     document.getElementById('gender').style.borderColor = 'green';
//     smallgender.style.display="none";
// } else if(document.getElementById('male').checked){
//     document.getElementById('gender').style.borderColor = 'green';

// }else if(document.getElementById('male').checked){
//     document.getElementById('gender').style.borderColor = 'green';
// }else if(document.getElementById('other').checked){
//     document.getElementById('gender').style.borderColor = 'green';
// }else{
//     document.getElementById('gender').style.borderColor = '#BC383E';
//     smallgender.style.display="inline";
// }





// function checkref(input) {
//     var letters = /^[A-Za-z]+$/;
//     if (input.value.match(letters)) {
//         showsuccess(input);
//         next5.onclick = function () {
//             form5.style.left = "-50%"
//             form6.style.left = "50%"
//             bullet[current - 1].classList.add("active");
//             progressCheck[current - 1].classList.add("active");
//             progressText[current - 1].classList.add("active");
//             current += 1;
//             // progress.style.width = "88.5%"
//             window.scrollTo(100, 100)
//         }
//     } else {
//         input.preventDefault();
//         showerror(input, 'Reference is required');
//     }
// }

// function checkLengthref(input, min, max) {
//     if (input.value.length < min) {
//         showerror(inName(input)} must be atleast  ${min} characters`);
//         input.preventDefault();
//     } else if (input.value.length > max) {
//         showerror(input, `${getfieldName(input)} must be less than ${max} characters`);
//         input.preventDefault();
//     } else {
//         showsuccess(input);
//         next5.onclick = function () {
//             form5.style.left = "-50%"
//             form6.style.left = "50%"
//             bullet[current - 1].classList.add("active");
//             progressCheck[current - 1].classList.add("active");
//             progressText[current - 1].classList.add("active");
//             current += 1;
//             // progress.style.width = "88.5%"
//             window.scrollTo(100, 100)
//         }
//     }
// }


// ***************************************************validation form6***************************************

form6.addEventListener('submit', function (e) {
    e.preventDefault();
    validateF6();
})



const sendDataf6 = (sRate, count) => {
    if (sRate === count) {
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        Swal.fire(
            'Your Form has been submitted Successfully!'
        )
        setTimeout(() => {
            location.reload();
        }, 3500);

    }
}

// finalvalidation form6
const successMsgF6 = () => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendDataf6(sRate, count);
        } else {
            return false;
        }
    }

}






const validateF6 = () => {

    //validate gender
    let tncbox = document.getElementById('fieldset');
    const tnc = document.querySelector('#tnC');


    if (tnc.checked) {
        setSuccessmsg(tncbox);
    } else {
        setErrormsg(tncbox, 'Please accept the Terms and Conditions!');
    }


    successMsgF6();
}




//form6 validation on chnge

form6.addEventListener('change', (event) => {
    event.preventDefault();
    validateF62();
})

const validateF62 = () => {

    //validate gender
    let tncbox = document.getElementById('fieldset');
    const tnc = document.querySelector('#tnC');


    if (tnc.checked) {
        setSuccessmsg(tncbox);
    } else {
        setErrormsg(tncbox, 'Please accept the Terms and Conditions!');
    }

}

//topview

const topview = document.querySelector(".topview");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topview.classList.add("active");
    } else {
        topview.classList.remove("active");
    }
})





// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         if (input.value.trim() === '') {
//             showerror(input, `${getfieldName(input)} is Required`);
//         }else{
// submit.onclick = function(){
//     setTimeout(function(){
//         alert("submitted successfully")
//         location.reload();
//     })
// }
//         }
//     });
// }


// form6.addEventListener('submit',function(){
//     e.preventDefault();
//     submit.onclick = function(){
//         setTimeout(function(){
//             alert("submitted successfully")
//             location.reload();
//         })
//     }
// })


//hamburger removed

// const hamburger = document.querySelector('.hamburger');
// const navmenu = document.querySelector('.center-nav>ul');
// const navbar = document.querySelector('.navbar');
// const centernav = document.querySelector('.center-nav');
// const leftnav = document.querySelector('.left-nav');
// const listnames = document.querySelector('.list-names');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navmenu.classList.toggle('active');
//     navbar.classList.toggle('active');
//     centernav.classList.toggle('active');
//     leftnav.classList.toggle('active');
//     listnames.classList.toggle('active');
// })