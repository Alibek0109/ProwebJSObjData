let userNum;
let userName;
let userAge;
let userObj = {};
let i = 1;



for (i; i <= 10; i++) {
    userName = prompt('Введите свое имя', 'Имя');
    userAge = +prompt('Введите ваше возраст', i);


    console.log('Пользователь ' + i);
        console.log('Имя ' + userName);
        console.log('Возраст ' + userAge);


    userObj[i] = {
        objName: 'Имя ' + userName,
        objAge: 'Возраст ' + userAge,
    }

    
} console.log(userObj);
