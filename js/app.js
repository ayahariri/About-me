'use strict'

var userName = prompt ('Hello, what is your name?');
console.log('userName =', userName);
alert ('Hello ' + userName+ ', Would you like to get to know me?')

var age = prompt ('Do you think I am younger than 30years old?').toLowerCase();
console.log ('age', age)
if (age == 'yes'|| age=='Y' || age=='y'){
    alert ('You are correct!');
    console.log ('You are correct!');
} else if (age == 'no'|| age=='N' || age=='n'){
    alert ('Oops, do I look that old?');
    console.log ('Oops, do I look that old?');
}

var mac = prompt ('Do you think I am addicted to McDonalds?').toLowerCase();
console.log ('mac', mac)
if (mac == 'yes' || mac=='Y' || mac=='y'){
    alert ('You are unfortunately correct!');
    console.log ('You are unfortunately correct!');
} else if (mac == 'no'|| mac=='N' || mac=='n'){
    alert ('Sorry! I am in fact a Mac addict!');
    console.log ('Sorry! I am in fact a Mac addict!');
}

var videogames = prompt ('Do I like video games?').toLowerCase();
console.log ('videogames', videogames)
if (videogames == 'yes'|| videogames=='Y' || videogames=='y'){
    alert ('Yes, I do love videogames!');
    console.log ('Yes, I do love videogames!');
} else if (videogames == 'no'|| videogames=='N' || videogames=='n'){
    alert ('Sorry! You are wrong!');
    console.log ('Sorry! You are wrong!');
}

var birds = prompt ('Do I like birds?').toLowerCase();;
console.log ('birds', birds)
if (birds == 'yes'|| birds=='Y' || birds=='y'){
    alert ('No!! Birds scare me!');
    console.log ('No!! Birds scare me!');
} else if (birds == 'no'|| birds=='N' || birds=='n'){
    alert ('You are totally right!');
    console.log ('You are totally right!');
}

alert ('Thank you for taking the quiz ' + userName+ ', you can find more facts about me here!');





