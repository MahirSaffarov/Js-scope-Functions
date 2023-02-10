function signFunction(mail, password){
    if(mail == "cavid@code.edu.az" && password == 12345){
        alert("Signed in")
    }
    else{
        alert("Mail or password is not correct")
    }
}
mail = prompt("Enter your mail address:")
password = prompt("Enter your password:")

signFunction(mail,password)