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
]

if($("#questionairre")){
    $("#questionairre").empty();
    $.each(questions, function(i){
        $("#questionairre").append(`<h1>${questions[i]}</h1>`);
        for(var dot = 0; dot < 10; dot++){
            $("#questionairre").append(`<div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">${dot + 1}</label>
          </div>`)
        }
    })
};

$("#tester-bb").click(function(){
    $("#friendo-show-o").empty();
    $.get("/api/friends/", function(data){
        for(var prop in data[0]){
            $("#friendo-show-o").append("<h1>" + data[0][prop] + "</h1>");
        };
    });
    // $.ajax({
    //     url: "/api/friends",
    //     method: "GET"
    // }).then(data =>{
    //     for(var prop in data[0]){
    //         $("#friendo-show-o").append("<h1>" + data[0][prop] + "</h1>");
    //     };
    // });
});

