
var dropdown=$('.form-select');
var breed;
var allowClick=true;
$.get('https://dog.ceo/api/breeds/list/all',function(data,status){
    let breeds=data.message;
    for(let breed in breeds)
    {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

dropdown.change(function(){
    allowClick=true;
})



function fetchRandomDogImage(breed)
{
    // var xhrRequest = new XMLHttpRequest();

    // xhrRequest.onload = function () {

    //   console.log(xhrRequest.response);  
    //     var responseJSON = JSON.parse(xhrRequest.response)
    //     var imageUrl = responseJSON.message;
    //     $('#dog-image').attr('src' , imageUrl);
    // };
    
    // xhrRequest.open('get' , 'https://dog.ceo/api/breeds/image/random',true);

    // xhrRequest.send();

    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function(data){{
    //         //var responseJSON = JSON.parse(.response)
    //          var imageUrl = data.message;
    //              $('#dog-image').attr('src' , imageUrl);
    //     }}
    // });
    let url='https://dog.ceo/api/breed/'+breed+'/images/random';
    $.get(url, function(data) {

        var imageUrl = data.message;
         $('.dog-image').attr('src' , imageUrl);
        
    }).fail(function(xhr,textStatus,errorThrown){
        console.log("Request Failed");
    });
}

$('.fetch_button').click(

    function(e){
        e.preventDefault();

        if(allowClick)
        {
            breed=dropdown.val();
            fetchRandomDogImage(breed);
            allowClick=false;
        }
    }

);

$('.next_image').click(

    function(e){
        e.preventDefault();
        if(breed !== undefined)
        {
            fetchRandomDogImage(breed);
        }
    }
    
);