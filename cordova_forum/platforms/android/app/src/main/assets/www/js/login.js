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
        var log_reg = document.getElementById('log_reg');
        log_reg.setAttribute('class', "nav-item active");

        var localStorage = window.localStorage;

        postData = {
        username : 'dsfad',
        password : 'adasd'
        }
        console.log(postData);
        postData = JSON.stringify(postData);
        console.log(postData);
        var baseUrl=localStorage.getItem('baseUrl');
        $.ajax(
        {
            url:baseUrl+'/verifyUser',
            type:'POST',
            data:postData,
            success:ajaxCallBack,
            contentType:'application/json',
        }
    );

        var signIn = document.getElementById('sign_in');
        signIn.addEventListener('click',verifyUser);
    },
};

function verifyUser()
{
    var username= document.getElementById('exampleDropdownFormEmail1').value;
    var pass= document.getElementById('exampleDropdownFormPassword1').value;
    
    postData = {
        username : username,
        password : pass
    }
    postData = JSON.stringify(postData);
    var baseUrl=localStorage.getItem('baseUrl');
    $.ajax(
        {
            url:baseUrl+'/verifyUser',
            type:'POST',
            data:postData,
            success:ajaxCallBack,
            content:'application/json',
        }
    );
}
function ajaxCallBack(responseData, status, xhr)
{
    console.log(responseData);
    console.log(xhr);
}
app.initialize();