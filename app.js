var accounts = []

function signUp(){
    var mail = document.getElementById("email")
    var pass = document.getElementById("password")
    if(mail.value != "" && pass.value != ""){
        var credentials = {
            email : mail.value,
            password : pass.value
        }
        accounts.push(credentials)
        console.log(accounts)
        alert("SignUp Successfully")
    }
}


function login(){
    var flag = false;
    var loginEmail = document.getElementById("loginEmail").value
    var loginPass = document.getElementById("loginPassword").value
    var btn = document.getElementsByClassName('start_logoo');
    for(var i = 0; i < accounts.length; i++)
    {
        if(loginEmail == accounts[i].email)
        {
            if(loginPass == accounts[i].password){
                alert("Login Successful");
                flag = true;
            }
            else{
                alert("Incorrect Password")
            }
        }
    }
}