

function signup(){
    var getEmail = document.getElementById('semail')
    var getPass = document.getElementById('spass')
    sessionStorage.setItem('email',getEmail.value)
    sessionStorage.setItem('password',getPass.value)
    alert("Sign-up Successfully")
    location.href = 'login.html'

}
signup.value = ''
function login(){
    var getEmail = document.getElementById('lemail')
    var getPass = document.getElementById('lpass')
    
    if(localStorage.getItem('email') == getEmail.value && localStorage.getItem('password') == getPass.value){
        alert("You are Successfully login")
        location.href = 'quiz.html'
    } else{
        alert("Invalid email or password")
    }
}
