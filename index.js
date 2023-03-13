// localStorage.clear();
let upl_photo = document.getElementById('upl_photo');

function age_num(age_n) 
{
	document.getElementById('age_value').innerHTML=age_n; 
}
function fname_validation()
{
	let fname = document.getElementById('fname');
	let fnm_error = document.getElementById('fnm_error');
    let fname_value = fname.value;
    if(fname_value.length == 0)
    {
        console.log(" enter fnm");
        fnm_error.innerHTML = "Please enter Firstname";
        return false;
    }
    if(!fname_value.match(/^[A-Za-z]+$/))
    {
        fnm_error.innerHTML="Please enter valid name";
        console.log("null");
        return  false;
    }
    else
    {
        console.log("valid fnm");
        fnm_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function lname_validation()
{
	let lname = document.getElementById('lname');
	let lname_error = document.getElementById('lname_error');
    let lname_value = lname.value;
	if(lname_value.length == 0)
    {
        console.log(" enter fnm");
        lname_error.innerHTML = "Please enter Lastname";
        return false;
    }
    if(!lname_value.match(/^[A-Za-z]+$/))
    {   
        lname_error.innerHTML="Please enter valid name";
        console.log("null");
        return  false;
    }
    else
    {
        console.log("valid fnm");
        lname_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }	
}
function email_validation()
{
	let email = document.getElementById('email');
	let email_error = document.getElementById('email_error');
    let email_value = email.value;
    if(email_value.length == 0)
    {
        email_error.innerHTML = "Enter email address";
        return false;
    }
    if(!email_value.match(/^([a-z0-9\.-]+)(@)([a-z0-9]+).([a-z]{2,3})$/))
    {
        console.log("sfgd");
        email_error.innerHTML="Please enter valid email";
        return  false;
    }
    else
    {
        email_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function phone_num_validation()
{
	let phone = document.getElementById('phone');
	let mnum_error = document.getElementById('mnum_error');
    let phone_value = phone.value;
    if(phone_value.length == 0)
    {
        console.log("0");
        mnum_error.innerHTML = "Enter Mobile Number";
        return false;
    }
    if(phone_value.length > 10)
    {
        console.log("11");
        mnum_error.innerHTML = "Enter Valid Mobile Number";
        return false;
    }
    if(!phone_value.match(/^[0-9]{10}$/))
    {
        console.log("valid1");
        mnum_error.innerHTML="Please enter valid number";
        return  false;
    }
    else
    {
        console.log("valid");
        mnum_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function birth_dateValidation()
{
	let b_date = document.getElementById('b_date');
	let bd_error = document.getElementById('bd_error');
    let bDate_value = b_date.value;
    if(!bDate_value)
    {
        console.log("0");
        bd_error.innerHTML = "Please Select Date";
        return false;
    }
    else
    {
        console.log("valid");
        bd_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function atime_validation()
{
	let ap_time = document.getElementById('ap_time');
	let ap_error = document.getElementById('ap_error');
    let ap_time_value = ap_time .value;
    if(!ap_time_value)
    {
        console.log("0");
        ap_error.innerHTML = "Please Select Time Period";
        return false;
    }
    else
    {
        console.log("valid");
        ap_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function color_validation()
{
	let color = document.getElementById('color');
	let clr_error = document.getElementById('clr_error');
    let color_value = color.value;
    if (color_value == "select") 
    {
		clr_error.innerHTML = "Please Select color";
        console.log("not selected");
        return false;
    }
    else
    {
		clr_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        console.log("done");
        return true;
    }
}
function age_validation()
{
	let age = document.getElementById('age');
	let age_error = document.getElementById('age_error');
    let age_value = age.value;
    if (!age_value) 
    {
        console.log("0");
        age_error.innerHTML = "Please Select Age";
        return false;
    }
    else
    {
        console.log("valid");
        age_error.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function radio_validation()
{
	let method1 = document.getElementById('method1');
	let method2 = document.getElementById('method2');
	let method3 = document.getElementById('method3');
	let method4 = document.getElementById('method4');
	let method5 = document.getElementById('method5');
	let radio_error =document.getElementById('radio_error');
	if(method1.checked==true || method2.checked==true || method3.checked==true || method4.checked==true || method5.checked==true)
	{
		return true;
	}
	else
	{
		radio_error.innerHTML="Please Select Payment Method!";
	}
}
function chk_validation()
{
	let chk_box = document.getElementById('chk_box');
	let chk_error = document.getElementById('chk_error');
	chk_value = chk_box.value;
	if(chk_value==checked)
	{
		return true;	
	}
	else
	{
		chk_error.innerHTML = "Please Check The T&C";
		return false;	
	}
}
function submission()
{
    if(! fname_validation() || !lname_validation() || ! email_validation() || ! phone_num_validation() || ! birth_dateValidation() || ! atime_validation() || !color_validation() || ! age_validation())
    {
        alert("Please Fill detail");
        return false;
    }
    else
    {
        return true;
    }
}
