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

        var uploadImage = document.querySelector('#uploadImage');
        var submit  = document.querySelector('#submit');

        uploadImage.addEventListener('click', openCamera);
        submit.addEventListener('click', saveUser);
        
    },
};

var localStorage = window.localStorage;

function openCamera()
{
    var cameraOptions = {
        "quality":100,
        "destinationType":Camera.DestinationType.DATA_URL,
        "sourceType":Camera.PictureSourceType.CAMERA,
        "allowEdit":true,
        "encodingType":Camera.EncodingType.PNG,
        "targetWidth":100,
        "targetHeight":100,
        "correctOrientation":true,
        "saveToPhotoAlbum":true,
        "cameraDirection":Camera.Direction.FRONT
    }

    navigator.camera.getPicture(cameraSuccessCallBack, cameraErrorCallBack, cameraOptions);
}
function cameraSuccessCallBack(imageData)
{
    var image = document.getElementById('profileImage');
    image.src = "data:image/jpeg;base64," + imageData;  
    localStorage.setItem("profileImageData",imageData);
}
function cameraErrorCallBack(err)
{
    alert('Camera plugin Failed because: ' + err);
}

function saveUser()
{
    showLoading();

    var Username = document.getElementById('inputUserName4').value;
    var Password = document.getElementById('inputPassword4').value;
    var Email = document.getElementById('inputEmail4').value;
    var MobileNo = document.getElementById('inputMobileNumber4').value;
    var Bio = document.getElementById('inputBio').value;

    postData = {
        userName : Username,
        password : Password,
        email : Email,
        mobileNo : MobileNo,
        bio : Bio,
        imgExe : 'png',
        profileImageData : localStorage.getItem('profileImageData')
    }

    postData = JSON.stringify(postData);
    var baseUrl = localStorage.getItem('baseUrl');
    $.ajax(
        {
            url:baseUrl+'/saveUser',
            type:'POST',
            data:postData,
            success:ajaxCallBack,
            contentType:'application/json',
        }
    );
}
function ajaxCallBack(responseData, status, xhr)
{
    removeLoading();
    window.location = 'login.html';
}
function showLoading()
{
    var submit  = document.querySelector('#submit');
        var loading = document.createElement('span');
        loading.id = "spinner";
        loading.setAttribute("class", "spinner-grow spinner-grow-sm");
        loading.setAttribute("role", "status");
        loading.setAttribute("aria-hidden", "true");
        submit.insertBefore(loading, submit.childNodes[0]);

        var text = document.getElementById('text');
        text.textContent="Loading";
}
function removeLoading()
{
    var submit  = document.querySelector('#submit');
        var loading = document.querySelector('#spinner');
        submit.removeChild(loading);

        var text = document.getElementById('text');
        text.textContent="Account Created";
    submit.setAttribute("disabled", "true");
}
app.initialize();