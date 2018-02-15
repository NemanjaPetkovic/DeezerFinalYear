// 
      DZ.init({
      appId  : '253822',
      channelUrl : 'http://127.0.0.1:5000',
    });

        function login(){
    DZ.login(function(response) {
    if (response.authResponse) {
    DZ.api('/user/me', function(user) {
    window.location.href = 'http://127.0.0.1:5000/main';

    console.log('Successful Login!');   
                       
    });
}
             }, {perms: 'email'});
        }