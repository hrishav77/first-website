
let box=document.getElementById('anime');
box.addEventListener('click',function run(){
    window.location=`https://gogoanime.lu/`
});

document.getElementById('youtube').addEventListener('click',function youtube(){
    window.location=`https://www.youtube.com/`
});

function insta(){
    window.location=`https://www.instagram.com/`
}
function whatsapp(){
    window.location=`https://web.whatsapp.com/`
}
function slack(){
    window.location=`https://slack.com/intl/en-in/get-started#/createnew`
}
function discord(){
    window.location=`https://discord.com/login`
}

let input=document.getElementById('input1');


input.addEventListener('keyup', e => {
    let myinput=e.target.value
    let search=myinput;
    if (e.key === 'Enter'){
    switch(search){
    case 'e':
        window.location=`https://sis.erp.bits-pilani.ac.in/psp/sisprd/EMPLOYEE/HRMS/h/?tab=DEFAULT`;
        break;
    case 'q':
        window.location=`https://quanta.bits-goa.ac.in/my/`;
        break;
    case 'd':
        window.location=`https://drive.google.com/drive/my-drive`;
        break;
    case 'g':
        window.location=`https://github.com/`;
        break;
     case 's':
        window.location=`https://swd.bits-goa.ac.in/`;
        break;
    default:
        window.location=`https://mail.google.com/mail/u/0/?ogbl#inbox`;
        break;
    }}
})