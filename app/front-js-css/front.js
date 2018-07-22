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
var contPostSwitch = false;
var friendNums = [];
function friendIn(numsPasser){
    this.name = $("#first-nam").val().trim() +
        " " + $("#second-nam").val().trim();
    this.photo = $("#pic-link").val().trim();
    this.scores = numsPasser;
}

function pageWriterStarter(){
    if($("#questionairre")){
        $("#questionairre").empty();
        $("#questionairre").append(`
            <h2 class="card-header text-center">Who Are You?</h2>
            <div class="row justify-content-center">
                <input class="mx-1 my-3 col-5" id="first-nam" placeholder="first">
                <input class="mx-1 my-3 col-5" id="second-nam" placeholder="last"   >
            </div>
            <h2 class="card-header text-center">Picture Link</h2>
            <input class="mx-1 my-3" id="pic-link">
            <h3 class="card-header">On a scale of 1-10, how much do you like . . .</h3>`)
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
                $("#questionairre").append(`<button type="button" class="btn btn-primary mb-3 ml-3 mr-auto" id="tester-bb" data-toggle="modal" data-target="#friendFound">Submit</button>`);
                $("#tester-bb").prop("disabled", true);
            };
        });
    };

    radioClicker();
    submitSurvey();
};

function submitSurvey(){
    $("#tester-bb").click(function(){
        event.preventDefault();
        responseWriter(radioSetter);
    });
};

function responseWriter(writing){
    $("#friendo-show-o").empty();
    console.log(writing().name);
    if((writing().name === "Link ") || (writing().name === "Sakura ") || (writing().name === "Aang ")){
        $("#friendo-show-o").append("<div>Please Make a change to the first name, or add a second name</div>");
    } else {
        $.post("/api/friends", writing())
        .then(data =>{
            if(data !== undefined){
                $("#friendo-show-o").append(`
                <h2>${data.name}</h2>
                <hr>
                <img class="mx-auto d-block rounded img-fluid" src="${data.photo}" alt="Picture of ${data.name}">`);
            } else {
                $("#friendo-show-o").append(`
                    <div>Please make a change to the first name
                    or add a second name.
                    </div>
                `);
            };
        });
    };
};


function radioSetter(){
    var friendPass = new friendIn(friendNums);
    return friendPass;
};

function radioClicker(){
    $(".btn-choices-in").click(function(){
        $.each(questions, function(i){
            var numPush = $(`input[name=ansRadio${i}]:checked`).val();
            friendNums[i] = numPush;
        });
        for(var i = 0; i < questions.length; i ++){
            if(friendNums[i] === undefined){
                return;
            };
        };
        $("#tester-bb").prop("disabled", false);
    });
};

pageWriterStarter();