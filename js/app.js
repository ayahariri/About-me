/*'use strict'
var score = 0;

var userName = prompt('Hello, what is your name?');
console.log('userName =', userName);
alert('Hello ' + userName + ', Would you like to get to know me?')

var age = prompt('Do you think I am younger than 30years old?').toLowerCase();
console.log('age', age)
if (age == 'yes' || age == 'Y' || age == 'y') {
    alert('You are correct!');
    console.log('You are correct!');
    score++;
} else if (age == 'no' || age == 'N' || age == 'n') {
    alert('Oops, do I look that old?');
    console.log('Oops, do I look that old?');
}

var mac = prompt('Do you think I am addicted to McDonalds?').toLowerCase();
console.log('mac', mac)
if (mac == 'yes' || mac == 'Y' || mac == 'y') {
    alert('You are unfortunately correct!');
    console.log('You are unfortunately correct!');
} else if (mac == 'no' || mac == 'N' || mac == 'n') {
    alert('Sorry! I am in fact a Mac addict!');
    console.log('Sorry! I am in fact a Mac addict!');
    score++;
}

var videogames = prompt('Do I like video games?').toLowerCase();
console.log('videogames', videogames)
if (videogames == 'yes' || videogames == 'Y' || videogames == 'y') {
    alert('Yes, I do love videogames!');
    console.log('Yes, I do love videogames!');
    score++;
} else if (videogames == 'no' || videogames == 'N' || videogames == 'n') {
    alert('Sorry! You are wrong!');
    console.log('Sorry! You are wrong!');
}

var birds = prompt('Do I like birds?').toLowerCase();
console.log('birds', birds)
if (birds == 'yes' || birds == 'Y' || birds == 'y') {
    alert('No!! Birds scare me!');
    console.log('No!! Birds scare me!');
} else if (birds == 'no' || birds == 'N' || birds == 'n') {
    alert('You are totally right!');
    console.log('You are totally right!');
    score++;
}

for (var i = 0; i < 5; i++) {
    var actualage = prompt('Now, how old do you think I actually am?');
    console.log(actualage);
    if (actualage == 27) {
        alert('You are correct!')
        console.log('You are correct!')
        score++;
        break;
    } else if (actualage > 27) {
        alert('Too High!')
        console.log('Too High!')
    } else if (actualage < 27) {
        alert('Too Low!')
        console.log('Too Low!')
    }
}

var correctanswer = ['call of duty', 'black ops', 'drive', 'smash brothers', 'gta', 'drive','mario kart', 'battlefied', 'pepsi man'];

//j = 1
for (var j = 1; j <= 6; j++) {
    var topten = prompt('What do you think are my favorite video games?');
    //call

    for (var i = 0; i <= correctanswer.length; i++) {
        console.log(topten);
        if (topten === correctanswer[i]) {
            alert('You are correct!');
            console.log('You are correct!')
            score++;
            j = 10;
            break;
        }
    }
}

alert('My favorite games are the following: call of duty, black ops, battlefield, drive, burnout, smash brothers, mario kart, crash bandicoot, gta, pepsi man')
alert('You scored ' + score + ' on this quiz. Hope you enjoyed it!');
alert('Welcome to my page ' + userName + '!')
