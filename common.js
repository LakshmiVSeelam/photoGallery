function getImages() {
    //     AUTH=$(echo -ne "$API_KEY:$API_SECRET" | base64 --wrap 0)
    // curl \
    //   --header "Content-Type: application/json" \
    //   --header "Authorization: Basic $AUTH" \
    //   --request GET "https://api.image4.io/v1.0/listFolder?path=/&continuationToken=token" \

    // $.getJSON('https://image4.io/v1.0/subscription', {
    //     'auth': {
    //         'API_KEY': 'lakshmivseelam',
    //         'API_SECRET': 'lucky365*'
    //     }
    // }, function (res) {
    //     debugger
    // })
    $.ajax({
        url: 'https://image4.io/v1.0/subscription',
        type: 'GET',
        dataType: 'json',
        cors: true,
        crossDomain: true,
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': 'http://localhost:8081/',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'

        },
        success: function (res) {
            console.log('suceess');
        },
        error: function (err) {
            console.log(err);
        },
        beforeSend: setHeader
    })

    function setHeader(xhr) {
        xhr.setRequestHeader('API_KEY', '+CKP7LJZoM105c8kbxDCjw==');
        xhr.setRequestHeader('API_SECRET', 'tZz0fDrTLpQ+GF7uY5lGiUJES89+gV9g58SBp9WfN0Q=');
    }
}

$(document).ready(function () {
    getImages()
})