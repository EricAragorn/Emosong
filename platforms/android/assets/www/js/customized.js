function getclick(){
    //Get status---------
    var storage = window.localStorage;
    var status = storage.getItem('status'); // Pass a key name to get its value.
    console.log("DEBUG: GET CLICKED");
    console.log("DEBUG: STATUS IS : " + status);
    //-------------------
    if (!status){
        alert("Systematic Error");
    }
    else if (status == "2"){
        //Nothing to do
        alert("Enjoy");
    }
    else{
        var iniKey = "gyafZerNi5uqInyNMRFa_ubASgM";
        var platform = "";
        if (status == "0"){
            //About to authorize Twitter
            platform = "twitter";
        }
        if (status == "1") {
            //About to authorize Spotify
            platform = "spotify";
        }
        OAuth.initialize('gyafZerNi5uqInyNMRFa_ubASgM');
        OAuth.popup(platform)
        .done(function(result) {
            console.log("Result is: ");
            console.log(result);
            if(status == "1"){
                console.log("DEBUG: Begin to write twitter data to cookie");
                var platformData = {"expires_in": result['expires_in'], 
                "access_token": result['access_token']};
                result.me().done(function(data){
                    console.log(data);
                    platformData['user_id'] = data.id;
                    storage.setItem(platform,JSON.stringify(platformData));
                    var data_ = {};
                    data_['twitter'] = storage.getItem('twitter');
                    data_['spotify'] = storage.getItem('spotify');
                    $.ajax({
                        type: 'POST',
                        url: 'http://10.140.145.33:8081/post',
                        crossDomain: true,
                        data: data_,
                        dataType: 'json',
                        success: function(responseData, textStatus, jqXHR) {
                            console.log(responseData);
                            storage.setItem('status', "2");
                        },
                        error: function (responseData, textStatus, errorThrown) {
                            alert('POST failed.');
                        }
                    });  
                });
             
            }else{
                console.log("DEBUG: Begin to write twitter data to cookie");
                var platformData = {
                    "oauth_token": result['oauth_token'],
                    "oauth_token_secret": result['oauth_token_secret']
                };
                result.me().done(function(data) {
                platformData['user_id'] = data.id;
                storage.setItem(platform,JSON.stringify(platformData));
                storage.setItem('status', "1");
                })
            }
        })
        .fail(function (err) {
         //handle error with err
            console.log("Err is: ");
            console.log(err);
        });
    }

}

