function getData(){
        $('#giphy').show();
        $('#indice').hide();
        $('#indice1').hide();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
                if(response['status']==401){
                    $('#giphy').hide();
                    $('#indice1').show();
                }else{
                    $('#giphy').hide();
                    $('#indice').show();
                    location.href= "/static/chat.html"
                }
            }
        });
    }
