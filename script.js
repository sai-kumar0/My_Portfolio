let btn = document.getElementById('btn');


 
btn.addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var body = 'name : ' + name + '<br/> email : ' + email + '<br/> number : ' + number + '<br/> Message : '+ message;

    Email.send({
        SecureToken : "9e4219dd-79f8-4ee6-a0ce-a116345215c3",
        To : 'saichary934@gmail.com',
        From : "saikumarchary024@gmail.com",
        Subject : "Contact Message",
        Body : body
    }).then(
      message => alert(message)
    );

})