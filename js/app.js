'use strict'

var userName = prompt ('Hello, what is your name?');
console.log('userName =', userName);
alert ('Hello ' + userName+ ', Would you like to get to know me?')

//var age = age.tolowercase();
var age = prompt ('Do you think I am younger than 30years old?');
console.log ('age', age)
if (age == 'yes'){
    alert ('You are correct!');
    console.log ('You are correct!');
} else if (age == 'no'){
    alert ('Oops, do I look that old?');
    console.log ('Oops, do I look that old?');
}

var question1 = prompt ('Do you think I am addicted to McDonalds?');
console.log ('question1', question1)
if (question1 == 'yes'){
    alert ('You are unfortunately correct!');
    console.log ('You are unfortunately correct!');
} else if (question1 == 'no'){
    alert ('Sorry! I am in fact a Mac addict!');
    console.log ('Sorry! I am in fact a Mac addict!');
}

var question2 = prompt ('Do I like video games?');
console.log ('question2', question2)
if (question2 == 'yes'){
    alert ('Yes, I do love videogames!');
    console.log ('Yes, I do love videogames!');
} else if (question2 == 'no'){
    alert ('Sorry! You are wrong!');
    console.log ('Sorry! You are wrong!');
}

var question3 = prompt ('Do I like birds?');
console.log ('question3', question3)
if (question3 == 'yes'){
    alert ('No!! Birds scare me!');
    console.log ('No!! Birds scare me!');
} else if (question3 == 'no'){
    alert ('You are totally right!');
    console.log ('You are totally right!');
}

alert ('Thank you for taking the quiz ' + userName+ ', you can find more facts about me here!');





