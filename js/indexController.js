/**
 * Created by User on 9/15/2017.
 */
var colors=['blue','red','','white','green','yellow','orange'];
var i=0;
function changeColor() {
    $("#topic").css("color",colors[i]);
    i++;
    if (i==colors.length){
        i=0;
    }
}

setInterval(changeColor,500);

////////////////////////////////////////

var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1,2,3,4,5,6,7,8];

var Possition;
var suqres;
var piece;

var poneOfCount;

var CountArray=new Array(9);

$(document).ready(function () {
    suqres=$('.root');
    piece=$('.piece');
    poneOfCount=0;
    for (var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});

$('.piece').on("click",function (eventData) {
    Possition=$(this);
    console.log(Possition);

    if (!(Possition.hasClass('clickpiece'))&& Possition.hasClass('poneBlack')){
        poneOfCount=0;
        pathOfBlackpone(Possition);
    }
    if (!(Possition.hasClass('clickpiece'))&& Possition.hasClass('poneWhite')){
        poneOfCount=0;
        pathOfWhitepone(Possition);
    }
});

function pathOfBlackpone(eventDta) {
    Possition=eventDta;
    suqres.removeClass('selectPath');
    piece.removeClass('clickpiece');
    suqres.removeClass('crosspiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var temId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var temId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var temId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        temId=Letters[x]+numbers[y];
        if (!($("#",temId).children().hasClass('piece'))){
            $("#"+temId).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        else {
            break;
        }
    }
    if (!($("#",temId).children().hasClass('piece'))){
        $("#"+temId).addClass('selectPath');
        Possition.addClass('clickpiece');
        Possition.removeClass('selectPath');
    }
    if (!($("#",temId1).children().hasClass('img'))){
        $("#",temId1).addClass('cross');
        position.addClass('clickpiece');
        Possition.removeClass('selectPath');
    }
    if (!($("#",temId2).children().hasClass('img'))){
        $("#",temId2).addClass('cross');
        position.addClass('clickpiece');
        Possition.removeClass('selectPath');
    }
}

function pathOfWhitepone(eventData) {
    Possition=eventData;
    suqres.removeClass('selectPath');
    piece.removeClass('clickpiece');
    var currentId=Possition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var temId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var temId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    var temId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var temId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    switch (Possition.attr('id')){
        case "3J1" :CountArray[0]++;break;
        case "3J2" :CountArray[1]++;break;
        case "3J3" :CountArray[2]++;break;
        case "3J4" :CountArray[3]++;break;
        case "3J5" :CountArray[4]++;break;
        case "3J6" :CountArray[5]++;break;
        case "3J7" :CountArray[6]++;break;
        case "3J8" :CountArray[7]++;break;
    }

    if (CountArray[0]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))) {
            $("#" + temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[1]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.addClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[2]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[3]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[4]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[5]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[6]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[7]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
    if (CountArray[8]==1){
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId2).children().hasClass('piece'))){
            $("#"+temId2).addClass('selectPath');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }else {
        if (!($("#"+temId1).children().hasClass('piece'))){
            $("#"+temId1).addClass('selectPath');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId3).children().hasClass('img'))){
            $("#"+temId3).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
        if (!($("#"+temId4).children().hasClass('img'))){
            $("#"+temId4).addClass('cross');
            Possition.addClass('clickpiece');
            Possition.removeClass('selectPath');
        }
    }
}

$(".root").on("click",function (eventData) {
    var currenrSquar=$(this);
    var currenrpiece=$(".piece.clickpiece");
    if ($(currenrSquar).hasClass('selectPath')){
        currenrSquar.append(currenrpiece);
        piece.removeClass('clickpiece');
        suqres.removeClass('selectPath');
    }
    if ($(currenrSquar).hasClass('cross')){
         var y=$(currenrpiece).clone();
         $(currenrpiece).remove();
         $(currenrSquar).children().remove();
         currenrSquar.append(currenrpiece);
         suqres.removeClass('selectPath');
         piece.removeClass('clickpiece');
         suqres.removeClass('cross');
     }
});


















