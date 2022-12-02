let first = document.getElementById("first");
let word = document.getElementById("word");
let points = document.getElementById("points");
let summ = document.getElementById("summ");

let point = 0;
let sum = 0;

let kards = ["first.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg", "six.jpg", "seven.jpg", "eight.jpg", "nine.jpg", "ten.jpg"];

$("#nex").click(function(){
    $("#right").css("display", "none");
    $("#wrong").css("display", "none");

    let i = Math.floor(Math.random() * kards.length);
    sum++;

    setTimeout(function(){
        first.dataset.index = i;
        first.src = kards[i];
    }, 500);

    if(sum == 10){
        if(point<3){
            alert("You don`t know english")
        }
        else if(point>3&&point<6){
            alert("You have an average level of English")
        }
        else if(point>6){
            alert("You have a high level of English")
        }
        point = 0;
        sum = 0;
    }
    points.textContent = String(point);
    summ.textContent = String(sum);
    word.value = "";
});
$("#ent").click(function(){
    if(first.dataset.index == 0){
        if(word.value === 'Banana'||word.value === 'banana'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 1){
        if(word.value === 'Spoon'||word.value === 'spoon'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 2){
        if(word.value === 'Knife'||word.value === 'knife'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 3){
        if(word.value === 'Cat'||word.value === 'cat'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 4){
        if(word.value === 'Duck'||word.value === 'duck'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 5){
        if(word.value === 'Salt'||word.value === 'salt'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 6){
        if(word.value === 'Car'||word.value === 'car'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 7){
        if(word.value === 'Mouse'||word.value === 'mouse'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 8){
        if(word.value === 'Wolf'||word.value === 'wolf'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    else if(first.dataset.index == 9){
        if(word.value === 'Fish'||word.value === 'Fish'){
            point++;
            $("#right").css("display", "inherit");
            setTimeout(function(){$("#right").css("display", "none");}, 1000);
        }
        else{
            $("#wrong").css("display", "inherit");
            setTimeout(function(){$("#wrong").css("display", "none");}, 1000);
        }
    }
    summ.textContent = String(sum);
    points.textContent = String(point);

});
