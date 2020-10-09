'use strict'
var score = 0;
var userName = " ";
function getName(fName, sName) {

    fName = prompt('Hello there! What is your name? ');
    sName = prompt('And your last name? ');
    userName = [fName+sName];
    alert('Would you like to get to know me ' + fName + ' ' +  sName + ' ?')
    return userName;
}
getName();



function question1() {
    var age = prompt('Do you think I am younger than 30years old?').toLowerCase();

    if (age == 'yes' || age == 'Y' || age == 'y') {
        alert('You are correct!');

        score++;
    } else if (age == 'no' || age == 'N' || age == 'n') {
        alert('wow, do I look that old?');

    }
}

question1();

function question2() {
    var mac = prompt('Do I like McDonalds?').toLowerCase();
    if (mac == 'yes' || mac == 'Y' || mac == 'y') {
        alert('You are unfortunately correct!');
    } else if (mac == 'no' || mac == 'N' || mac == 'n') {
        alert('Sorry! I am in fact a Mac addict!');
        score++;
    }
}

question2();

function videogames() {
    var videogames = prompt('Do I like video games?').toLowerCase();
    if (videogames == 'yes' || videogames == 'Y' || videogames == 'y') {
        alert('Yes, I do love videogames!');
        score++;
    } else if (videogames == 'no' || videogames == 'N' || videogames == 'n') {
        alert('Sorry! You are wrong!');
    }
}
videogames();

function birdquestion() {
    var birds = prompt('Do I like birds?').toLowerCase();
    if (birds == 'yes' || birds == 'Y' || birds == 'y') {
        alert('No!! Birds scare me!');
    } else if (birds == 'no' || birds == 'N' || birds == 'n') {
        alert('You are totally right!');
        score++;
    }
}
birdquestion();
function age() {
    for (var i = 0; i < 5; i++) {
        var actualage = prompt('Now, how old do you actually think I am?');
        if (actualage == 27) {
            alert('You are correct!')
            score++;
            break;
        } else if (actualage > 27) {
            alert('Too High!')
        } else if (actualage < 27) {
            alert('Too Low!')
        }
    }

}

age();
var correctanswer = ['call of duty', 'black ops', 'drive', 'smash brothers', 'gta', 'drive', 'mario kart', 'battlefied', 'pepsi man'];


function games() {
    for (var j = 1; j <= 6; j++) {
        var topten = prompt('What do you think are my favorite video games?');


        for (var i = 0; i <= correctanswer.length; i++) {
            if (topten === correctanswer[i]) {
                alert('You are correct!');
                score++;
                j = 10;
                break;
            }
        }
    }
}
games();

alert('My favorite games are the following: call of duty, black ops, battlefield, drive, burnout, smash brothers, mario kart, crash bandicoot, gta, pepsi man')
alert('You scored ' + score + ' out of 7 on this quiz. Hope you enjoyed it!');
