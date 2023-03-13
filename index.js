// localStorage.clear();
let stud_form = document.getElementById('std_form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let b_date = document.getElementById('b_date');
let ap_time = document.getElementById('ap_time');
let color = document.getElementById('color');
let age = document.getElementById('age');
let upl_photo = document.getElementById('upl_photo');
let rst_btn = document.getElementById('rst_btn');
let sub_btn = document.getElementById('sub_btn');
function form_validation()
{
    let name = document.forms['stud_form']['fname'].value;
  if(name == "") 
  {
    let msg = document.getElementById('msg').innerHTML="Please enter value!";
  }
  console.log('msg');
}