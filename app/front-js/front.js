var questions = ["Rock-climbing?",
    "Watching movies/shows?",
    "Playing video games?",
    "Reading?",
    "Going to parties?",
    "Going on walks?",
    "Getting lost in the 11th spacial dimension?",
    "Debating?",
    "Relaxing by doing nothing with others?",
    "Always being on the move, carrying out activities with others?"
];
var friendNums = [];

if($("#questionairre")){
    $("#questionairre").empty();
    $("#questionairre").append(`<h3 class="card-header">On a scale of 1-10, how much do you like . . .</h3>`)
    $.each(questions, function(i){
        $("#questionairre").append(`<section class="card bg-light my-5 py-2 text-center">
        <h4>${questions[i]}</h4>
        <div id="buttons${i}" class="btn-group form-check form-check-inline">`
        );
            for(var dot = 0; dot < 10; dot++){
                $(`#buttons${i}`).append(`<div class="mx-auto form-inline">
                <input class="btn btn-choices-in form-check-input" type="radio" name="ansRadio${i}" id="qArr${i}-pos${dot + 1}" value="${dot + 1}">
                <label class="radio-inline" for="qArr${i}-pos${dot + 1}">${dot + 1}</label>
                </div>`
                );
            };
        $("#questionairre").append(`</div></section>`);
        if(i === questions.length - 1){
            $("#questionairre").append(`<button id="switch-me" class="btn btn-primary">Submit</button>`);
            $("#switch-me").prop("disabled", true);
        };
    });
};

$("#tester-bb").click(function(){
    $("#friendo-show-o").empty();
    $.get("/api/friends/", function(data){
        for(var prop in data[0]){
            $("#friendo-show-o").append("<h1>" + data[0][prop] + "</h1>");
        };
    });
});

$(".btn-choices-in").click(function(){
    $.each(questions, function(i){
        var numPush = $(`input[name=ansRadio${i}]:checked`).val();
        friendNums[i] = numPush;
    });
    for(var i = 0; i < 10; i ++){
        if(friendNums[i] === undefined){
            return;
        };
    };
    $("button#switch-me").prop("disabled", false);
});

