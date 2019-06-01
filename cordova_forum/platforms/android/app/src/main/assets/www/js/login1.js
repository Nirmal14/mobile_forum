var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var localStorage = window.localStorage;
        if(localStorage.login){
            if(localStorage.getItem('login')==true) {
                window.location='homepage.html';
            }
        }
        var log_reg = document.getElementById('log_reg');
        log_reg.setAttribute('class', "nav-item active");
        
        var login = document.getElementById('sign_in');
        login.addEventListener('click',check_credentials);
        
    },
};
function check_credentials()
{
    var username= document.getElementById('exampleDropdownFormEmail1').value;
    var pass= document.getElementById('exampleDropdownFormPassword1').value;
    postData = {
        user_name : username,
        password : pass
    }
    console.log(postData);
    postData = JSON.stringify(postData);
    console.log(postData);
    var baseUrl = localStorage.getItem('baseUrl');
    $.ajax(
        {
            url:baseUrl+'/verifyUser',
            type:'POST',
            data:postData,
            success:ajaxCallBack,
            contentType:"application/json"
        }
    );
}
function ajaxCallBack(responseData, status, xhr)
{
    console.log(responseData);
    // if (responseData) {
    //     window.localStorage.setItem('login',true);
    //     window.location='homepage.html';
    // }
    // window.alert("inavlid username or password");
}
app.initialize();