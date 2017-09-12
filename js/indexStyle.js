/**
 * Created by User on 9/1/2017.
 */
var colors=['red','green','black','blue','brown'];
var i=0;
function changeColor() {
    $("#header").css("color",colors[i]);
    i++;
    if(i==colors.length){
        i=0;
    }
}
setInterval(changeColor,200);

var enemyList=new Array();
var highLightedList=new Array();
var clickedDiv;

function searchIsEnemy (parentId) {
    for(var i in enemyList){
        if(enemyList[1]=="#"+parentId){
            return true;
        }
    }
}
function searchIsHighLight (parentId) {
    for(var i in highLightedList){
        if(highLightedList[1]=="#"+parentId){
            return true;
        }
    }
}

function cellClickeEvent(parentId) {
    if (searchIsHighLight($(parentId).attr("id"))){
        var pid=parentId();
        var cid="#"+clickedDiv();
        $(pid).html("<p>");
        $($(pid).contents()).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }
}

function imgClickEventWitePawn(parentId) {
    if (searchIsEnemy($(parentId).parent().attr("id"))){
        $(parentId).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        whitePawnPath($(parentId).parent().attr("id"));
    }
}

function imgClickEventBlackPawn(parentId) {
    if (searchIsEnemy($(parentId).parent().attr("id"))){
        $(parentId).replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        blackPawnPath($(parentId).parent().attr("id"));
    }
}

$("w1").click(function () {
    imgClickEventWitePawn("w1");
});
$("w2").click(function () {
    imgClickEventWitePawn("w2");
});
$("w3").click(function () {
    imgClickEventWitePawn("w3");
});
$("w4").click(function () {
    imgClickEventWitePawn("w4");
});
$("w5").click(function () {
    imgClickEventWitePawn("w5");
});
$("w6").click(function () {
    imgClickEventWitePawn("w6");
});
$("w7").click(function () {
    imgClickEventWitePawn("w7");
});
$("w8").click(function () {
    imgClickEventWitePawn("w8");
});

//////////////////////////////////////////////////////

$("b1").click(function () {
    imgClickEventBlackPawn("b1");
});
$("b2").click(function () {
    imgClickEventBlackPawn("b2");
});
$("b3").click(function () {
    imgClickEventBlackPawn("b3");
});
$("b4").click(function () {
    imgClickEventBlackPawn("b4");
});
$("b5").click(function () {
    imgClickEventBlackPawn("b5");
});
$("b6").click(function () {
    imgClickEventBlackPawn("b6");
});
$("b7").click(function () {
    imgClickEventBlackPawn("b7");
});
$("b8").click(function () {
    imgClickEventBlackPawn("b8");
});

function setInitialColour() {
    var divBoxes = $(".higlighedBoxes");
    for (var i = 0; i<divBoxes.length;i++){
        $(divBoxes[i]).removeClass("higlightedBoxes");
    }
    divBoxes = $(".enemyBoxes");
    for (var i = 0;i < divBoxes.length; i++){
        $(divBoxes[i]).removeClass("enemyBoxes");
    }
    for (var l in enemyList){
        enemyList.pop();
    }
    for (var k in highLightedList){
        highLightedList.pop();
    }
    clickedDiv="null";
}

function whitePawnPath(parentId) {
    clickedDiv=parentId;
    var res=parentId.split("j");
    if (res[0]>2){
        if (res[1]==1){
            var en1="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+1);
            if ($(en1).contents().attr("class")=="groupBlack"){
                $(en1).addClass("enemyBoxes");
                enemyList.push(en1);
            }
        }else if (res[1]==8){
            var en2="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
            if ($(en2).contents().attr("class")=="groupBlack"){
                $(en2).addClass("enemyBoxes");
                enemyList.push(en2);
            }
        }else {
            var en3="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+1);
            if ($(en3).contents().attr("class")=="groupBlack"){
                $(en3).addClass("enemyBoxes");
                enemyList.push(en3);
            }
            var en4="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
            if ($(en4).contents().attr("class")=="groupBlack"){
                $(en4).addClass("enemyBoxes");
                enemyList.push(en4);
            }
        }
        if (res[0]==7){
            var en5="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1]));
            if ($(en5).html()==""){
                $(en5).addClass("higlightedBoxes");
                highLightedList.push(en5);
                var en6="#"+(parseInt(res[0])-2)+"j"+(parseInt(res[1]));
                if ($(en6).html()==""){
                    $(en6).addClass("higlightedBoxes");
                    highLightedList.push(en6);
                }
            }
        }else {
            var en7="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1]));
            if ($(en7).html()==""){
                $(en7).addClass("higlightedBoxes");
                highLightedList.push(en7);
            }
        }
    }
}

function blackPawnPath(parentId) {
    clickedDiv=parentId;
    var res=parentId.split("j");
    if (res[0]<=7){
        if (res[1]==1){
            var en1="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+1);
            if ($(en1).contents().attr("class")=="groupWhite"){
                $(en1).addClass("enemyBoxes");
                enemyList.push(en1);
            }
        }else if (res[1]==8){
            var en2="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
            if ($(en2).contents().attr("class")=="groupWhite"){
                $(en2).addClass("enemyBoxes");
                enemyList.push(en2);
            }
        }else {
            var en3="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+1);
            if ($(en3).contents().attr("class")=="groupWhite"){
                $(en3).addClass("enemyBoxes");
                enemyList.push(en3);
            }
            var en4="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-1);
            if ($(en4).contents().attr("class")=="groupWhite"){
                $(en4).addClass("enemyBoxes");
                enemyList.push(en4);
            }
        }
        if (res[0]==2){
            var en5="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1]));
            if ($(en5).html()==""){
                $(en5).addClass("higlightedBoxes");
                highLightedList.push(en5);
                var en6="#"+(parseInt(res[0])+2)+"j"+(parseInt(res[1]));
                if ($(en6).html()==""){
                    $(en6).addClass("higlightedBoxes");
                    highLightedList.push(en6);
                }
            }
        }else {
            var en7="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1]));
            if ($(en7).html()==""){
                $(en7).addClass("higlightedBoxes");
                highLightedList.push(en7);
            }
        }
    }
}

function colourPathFiller(cellId,team) {
    if ((team="black") && ($(cellId).contents().attr("class")=="groupWhite")){
        $(cellId).addClass("enemyBoxes");
        enemyList.push(cellId);
    }else if ((team="white") && ($(cellId).contents().attr("class")=="groupBlack")) {
        $(cellId).addClass("enemyBoxes");
        enemyList.push(cellId);
    }
}

$("#white1").click(function () {
    if (searchIsEnemy($("#white1").parent().attr("id"))){
        $("#white1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        rookPath($("#white1").parent().attr("id"),"white");
    }
});
$("#white8").click(function () {
    if (searchIsEnemy($("#white8").parent().attr("id"))){
        $("#white8").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        rookPath($("#white8").parent().attr("id"),"white");
    }
});

$("#black1").click(function () {
    if (searchIsEnemy($("#black1").parent().attr("id"))){
        $("#black1").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        rookPath($("#black1").parent().attr("id"),"black");
    }
});
$("#black8").click(function () {
    if (searchIsEnemy($("#black8").parent().attr("id"))){
        $("#black8").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        rookPath($("#black8").parent().attr("id"),"black");
    }
});

$("#white4").click(function () {
    if (searchIsEnemy($("#white4").parent().attr("id"))){
        $("#white4").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        rookPath($("#white4").parent().attr("id"),"white");
        bishopPath($("#white4").parent().attr("id"),"white");
    }
});
$("#black4").click(function () {
    if (searchIsEnemy($("#black4").parent().attr("id"))){
        $("#black4").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        rookPath($("#black4").parent().attr("id"),"black");
        bishopPath($("#black4").parent().attr("id"),"black");
    }
});

function rookPath(parentId,team) {
    clickedDiv=parentId;
    var res=parentId.split("j");
    for (var i=(res[1]-1);i>=1;i--){
        var en1="#"+res[0]+"j"+i;
        if ($(en1).html()==""){
            $(en1).addClass("hilightedBoxes");
            highLightedList.push(en1);
        }else {
            colourPathFiller(en1,team);
            break;
        }
    }
    for(var j=(parseInt(res[1])+1);j<=8;j++){
        var en2="#"+res[0]+"j"+j;
        if ($(en2).html()==""){
            $(en2).addClass("hilightedBoxes");
            highLightedList.push(en2);
        }else {
            colourPathFiller(en2,team);
            break;
        }
    }
    for (var k=(res[0]-1);k>=1;k--){
        var en3="#"+k+"j"+res[1];
        if ($(en3).html()==""){
            $(en3).addClass("hilightedBoxes");
            highLightedList.push(en3);
        }else {
            colourPathFiller(en3,team);
            break;
        }
    }
    for(var l=(parseInt(res[0])+1);l<=8;l++){
        var en4="#"+l+"j"+res[1];
        if ($(en4).html()==""){
            $(en4).addClass("hilightedBoxes");
            highLightedList.push(en4);
        }else {
            colourPathFiller(en4,team);
            break;
        }
    }
}
$("#white3").click(function () {
    if (searchIsEnemy($("#white3").parent().attr("id"))){
        $("#white3").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        bishopPath($("#white3").parent().attr("id"),"white");
    }
});
$("#black3").click(function () {
    if (searchIsEnemy($("#black3").parent().attr("id"))){
        $("#black3").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        bishopPath($("#black3").parent().attr("id"),"black");
    }
});
$("#white6").click(function () {
    if (searchIsEnemy($("#white6").parent().attr("id"))){
        $("#white6").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        bishopPath($("#white6").parent().attr("id"),"white");
    }
});
$("#black6").click(function () {
    if (searchIsEnemy($("#black6").parent().attr("id"))){
        $("#black6").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        bishopPath($("#black6").parent().attr("id"),"black");
    }
});

function bishopPath(parentId,team) {
    clickedDiv=parentId;
    var res=parentId.split("j");
    var b=parseInt(res[0]);
    for (var a=(res[1]-1);a>=1;a--){
        var en1="#"+(b-1)+"j"+a;
        b--;
        if ($(en1).html()==""){
            $(en1).addClass("higlightedBoxes");
            highLightedList.push(en1);
        }else {
            colourPathFiller(en1,team);
            break;
        }
    }
    b=parseInt(res[0]);
    for (var x=(parseInt(res[1])+1);x<=8;x++){
        var en2="#"+(b-1)+"j"+x;
        b--;
        if ($(en2).html()==""){
            $(en2).addClass("higlightedBoxes");
            highLightedList.push(en2);
        }else {
            colourPathFiller(en2,team);
            break;
        }
    }
    b=parseInt(res[1]);
    for (var y=(parseInt(res[0])+1);y<=8;y++){
        var en3="#"+y+"j"+(b-1);
        b--;
        if ($(en3).html()==""){
            $(en3).addClass("higlightedBoxes");
            highLightedList.push(en3);
        }else {
            colourPathFiller(en3,team);
            break;
        }
    }
    b=parseInt(res[1]);
    for (var z=(parseInt(res[0])+1);z<=8;z++){
        var en4="#"+z+"j"+(b+1);
        b++;
        if ($(en4).html()==""){
            $(en4).addClass("higlightedBoxes");
            highLightedList.push(en4);
        }else {
            colourPathFiller(en4,team);
            break;
        }
    }
}

$("#black2").click(function () {
    if (searchIsEnemy($("#black2").parent().attr("id"))){
        $("#black2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        knightPath($("#black2").parent().attr("id"),"black");
    }
});
$("#black7").click(function () {
    if (searchIsEnemy($("#black7").parent().attr("id"))){
        $("#black7").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        knightPath($("#black7").parent().attr("id"),"black");
    }
});
$("#white2").click(function () {
    if (searchIsEnemy($("#white2").parent().attr("id"))){
        $("#white2").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        knightPath($("#white2").parent().attr("id"),"white");
    }
});
$("#white7").click(function () {
    if (searchIsEnemy($("#white7").parent().attr("id"))){
        $("#white7").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        knightPath($("#white7").parent().attr("id"),"white");
    }
});

function knightPath(parentId,team) {
    clickedDiv=parentId;
    var res=parentId.split("j");
    var en1="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-2);
    if ($(en1).html()==""){
        $(en1).addClass("higlightedBoxes");
        highLightedList.push(en1);
    }else {
        colourPathFiller(en1,team);
    }

    var en2="#"+(parseInt(res[0])-2)+"j"+(parseInt((res[1])-1));
    if ($(en2).html()==""){
        $(en2).addClass("higlightedBoxes");
        highLightedList.push(en2);
    }else {
        colourPathFiller(en2,team);
    }

    var en3="#"+(parseInt(res[0])-2)+"j"+(parseInt(res[1])-1);
    if ($(en3).html()==""){
        $(en3).addClass("higlightedBoxes");
        highLightedList.push(en3);
    }else {
        colourPathFiller(en3,team);
    }

    var en4="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+2);
    if ($(en4).html()==""){
        $(en4).addClass("higlightedBoxes");
        highLightedList.push(en4);
    }else {
        colourPathFiller(en4,team);
    }

    var en5="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-2);
    if ($(en5).html()==""){
        $(en5).addClass("higlightedBoxes");
        highLightedList.push(en5);
    }else {
        colourPathFiller(en5,team);
    }

    var en6="#"+(parseInt(res[0])+2)+"j"+(parseInt(res[1])-1);
    if ($(en6).html()==""){
        $(en6).addClass("higlightedBoxes");
        highLightedList.push(en6);
    }else {
        colourPathFiller(en6,team);
    }

    var en7="#"+(parseInt(res[0])+2)+"j"+(parseInt(res[1])+1);
    if ($(en7).html()==""){
        $(en7).addClass("higlightedBoxes");
        highLightedList.push(en7);
    }else {
        colourPathFiller(en7,team);
    }

    var en8="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+2);
    if ($(en8).html()==""){
        $(en8).addClass("higlightedBoxes");
        highLightedList.push(en8);
    }else {
        colourPathFiller(en8,team);
    }
}

$("#white5").click(function () {
    if (searchIsEnemy($("#white5").parent().attr("id"))){
        $("#white5").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        knigPath($("#white5").parent().attr("id"),"white");
    }
});

$("#black5").click(function () {
    if (searchIsEnemy($("#black5").parent().attr("id"))){
        $("#black5").replaceWith($("#"+clickedDiv).contents());
        setInitialColour();
    }else {
        setInitialColour();
        knigPath($("#black5").parent().attr("id"),"black");
    }
});

function kingPath(parentId,team) {
    clickedDiv=parentId;
    var res=parentId.split("j");
    var en1="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])-1);
    if ($(en1).html()==""){
        $(en1).addClass("higlightedBoxes");
        highLightedList.push(en1);
    }else {
        colourPathFiller(en1,team);
    }

    var en2="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1]));
    if ($(en2).html()==""){
        $(en2).addClass("higlightedBoxes");
        highLightedList.push(en2);
    }else {
        colourPathFiller(en2,team);
    }

    var en3="#"+(parseInt(res[0])-1)+"j"+(parseInt(res[1])+1);
    if ($(en3).html()==""){
        $(en3).addClass("higlightedBoxes");
        highLightedList.push(en3);
    }else {
        colourPathFiller(en3,team);
    }

    var en4="#"+(parseInt(res[0]))+"j"+(parseInt(res[1])-1);
    if ($(en4).html()==""){
        $(en4).addClass("higlightedBoxes");
        highLightedList.push(en4);
    }else {
        colourPathFiller(en4,team);
    }

    var en5="#"+(parseInt(res[0]))+"j"+(parseInt(res[1])+1);
    if ($(en5).html()==""){
        $(en5).addClass("higlightedBoxes");
        highLightedList.push(en5);
    }else {
        colourPathFiller(en5,team);
    }

    var en6="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])-1);
    if ($(en6).html()==""){
        $(en6).addClass("higlightedBoxes");
        highLightedList.push(en6);
    }else {
        colourPathFiller(en6,team);
    }

    var en7="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1]));
    if ($(en7).html()==""){
        $(en7).addClass("higlightedBoxes");
        highLightedList.push(en7);
    }else {
        colourPathFiller(en7,team);
    }

    var en8="#"+(parseInt(res[0])+1)+"j"+(parseInt(res[1])+1);
    if ($(en8).html()==""){
        $(en8).addClass("higlightedBoxes");
        highLightedList.push(en8);
    }else {
        colourPathFiller(en8,team);
    }
}

$("1G1").click(function () {
    cellClickeEvent("1G1");
});
$("1G2").click(function () {
    cellClickeEvent("1G2");
});
$("1G3").click(function () {
    cellClickeEvent("1G3");
});
$("1G4").click(function () {
    cellClickeEvent("1G4");
});
$("1G5").click(function () {
    cellClickeEvent("1G5");
});
$("1G6").click(function () {
    cellClickeEvent("1G6");
});
$("1G7").click(function () {
    cellClickeEvent("1G7");
});
$("1G8").click(function () {
    cellClickeEvent("1G8");
});

$("2G1").click(function () {
    cellClickeEvent("2G1");
});
$("2G2").click(function () {
    cellClickeEvent("2G2");
});
$("2G3").click(function () {
    cellClickeEvent("2G3");
});
$("2G4").click(function () {
    cellClickeEvent("2G4");
});
$("2G5").click(function () {
    cellClickeEvent("2G5");
});
$("2G6").click(function () {
    cellClickeEvent("2G6");
});
$("2G7").click(function () {
    cellClickeEvent("2G7");
});
$("2G8").click(function () {
    cellClickeEvent("2G8");
});

$("3G1").click(function () {
    cellClickeEvent("3G1");
});
$("3G2").click(function () {
    cellClickeEvent("3G2");
});
$("3G3").click(function () {
    cellClickeEvent("3G3");
});
$("3G4").click(function () {
    cellClickeEvent("3G4");
});
$("3G5").click(function () {
    cellClickeEvent("3G5");
});
$("3G6").click(function () {
    cellClickeEvent("3G6");
});
$("3G7").click(function () {
    cellClickeEvent("3G7");
});
$("3G8").click(function () {
    cellClickeEvent("3G8");
});

$("4G1").click(function () {
    cellClickeEvent("4G1");
});
$("4G2").click(function () {
    cellClickeEvent("4G2");
});
$("4G3").click(function () {
    cellClickeEvent("4G3");
});
$("4G4").click(function () {
    cellClickeEvent("4G4");
});
$("4G5").click(function () {
    cellClickeEvent("4G5");
});
$("4G6").click(function () {
    cellClickeEvent("4G6");
});
$("4G7").click(function () {
    cellClickeEvent("4G7");
});
$("4G8").click(function () {
    cellClickeEvent("4G8");
});

$("5G1").click(function () {
    cellClickeEvent("5G1");
});
$("5G2").click(function () {
    cellClickeEvent("5G2");
});
$("5G3").click(function () {
    cellClickeEvent("5G3");
});
$("5G4").click(function () {
    cellClickeEvent("5G4");
});
$("5G5").click(function () {
    cellClickeEvent("5G5");
});
$("5G6").click(function () {
    cellClickeEvent("5G6");
});
$("5G7").click(function () {
    cellClickeEvent("5G7");
});
$("5G8").click(function () {
    cellClickeEvent("5G8");
});

$("6G1").click(function () {
    cellClickeEvent("6G1");
});
$("6G2").click(function () {
    cellClickeEvent("6G2");
});
$("6G3").click(function () {
    cellClickeEvent("6G3");
});
$("6G4").click(function () {
    cellClickeEvent("6G4");
});
$("6G5").click(function () {
    cellClickeEvent("6G5");
});
$("6G6").click(function () {
    cellClickeEvent("6G6");
});
$("6G7").click(function () {
    cellClickeEvent("6G7");
});
$("6G8").click(function () {
    cellClickeEvent("6G8");
});

$("7G1").click(function () {
    cellClickeEvent("7G1");
});
$("7G2").click(function () {
    cellClickeEvent("7G2");
});
$("7G3").click(function () {
    cellClickeEvent("7G3");
});
$("7G4").click(function () {
    cellClickeEvent("7G4");
});
$("7G5").click(function () {
    cellClickeEvent("7G5");
});
$("7G6").click(function () {
    cellClickeEvent("7G6");
});
$("7G7").click(function () {
    cellClickeEvent("7G7");
});
$("7G8").click(function () {
    cellClickeEvent("7G8");
});

$("8G1").click(function () {
    cellClickeEvent("8G1");
});
$("8G2").click(function () {
    cellClickeEvent("8G2");
});
$("8G3").click(function () {
    cellClickeEvent("8G3");
});
$("8G4").click(function () {
    cellClickeEvent("8G4");
});
$("8G5").click(function () {
    cellClickeEvent("8G5");
});
$("8G6").click(function () {
    cellClickeEvent("8G6");
});
$("8G7").click(function () {
    cellClickeEvent("8G7");
});
$("8G8").click(function () {
    cellClickeEvent("8G8");
});






