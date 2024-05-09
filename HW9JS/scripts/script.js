//Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

document.getElementById('changeButton').addEventListener('click', function () {
    const square = document.getElementById('square');
    if (square.style.backgroundColor === 'red') {
        square.style.backgroundColor = 'green';
        square.style.width = '100px';
        square.style.height = '100px';
    }
    else {
        square.style.backgroundColor = 'red';
        square.style.width = '200px';
        square.style.height = '200px';
    }

});

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
document.getElementById('changeButton2').addEventListener('click', function () {
    let square_2 = document.getElementById('square_2');
    const button = document.getElementById('changeColorButton2');
    if (square_2.style.backgroundColor === 'pink');
        square_2.style.backgroundColor = 'blue';
console.log('ColorBlue', square_2.style.backgroundColor);
});

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
document.getElementById('changeButton3').addEventListener('click', function () {
    const square_3 = document.getElementById('square_3');
    if (square_3.style.backgroundColor === 'yellow') {
        square_3.style.backgroundColor = 'orange';
        square_3.style.width = '170px';
        square_3.style.height = '170px';
    }
    else {
        square_3.style.backgroundColor = 'yellow';
        square_3.style.width = '150px';
        square_3.style.height = '150px';
    }

});

// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
document.querySelector('.happy').addEventListener('click', function() {
    let pElem = document.createElement('p');
    pElem.innerText = 'Счастье — это как загадка, которую мы постоянно пытаемся разгадать. Оно странное и иногда неуловимое, но всегда так желанное. Мы ищем его в мельчайших моментах повседневной жизни: в улыбке незнакомца, в теплом луче солнца на лице, в объятиях близких людей. Иногда оно кажется нам недостижимым, но именно стремление к нему делает наш путь таким увлекательным. Пусть счастье всегда сопровождает вас на вашем пути!';
    pElem.classList.add('blue-text');
    document.querySelector('.root').appendChild(pElem);
});


// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.


// const button = document.querySelector('.choice');
// const rootDiv = document.querySelector('root2');
// let colorIndex = 0;
// button.addEventListener('click', function () {
//     const paragraph = document.createElement('p');
//     const color = colorIndex % 2 === 0 ? "blue" : "green";
//     paragraph.style.backgroundColor = color;

//     paragraph.innerText = `Что такое зло?Зло - это состояние или действие, которое наносит вред, боль и страдание другим людям. Это проявление эгоизма, жестокости, ненависти и насилия. Зло может привести к конфликтам, разрушению и несправедливости в обществе, а также вызвать страх и беспокойство у других. ${color} Что такое добро? Добро - это состояние или действие, которое приносит пользу, благо и радость другим людям. Это проявление доброжелательности, сострадания, честности и любви к окружающим. Добро помогает создавать гармонию и благополучие в обществе, способствует справедливости и мирному сосуществованию. `;

//     colorIndex++;
//     root2Div.append(paragraph);
// });''

// const button = document.querySelector('.choice');
// const rootDiv = document.querySelector('.root2');
// let colorIndex = 0;
// button.addEventListener('click', function () {
//     const paragraph = document.createElement('p');
//     const color = colorIndex % 2 === 0 ? "blue" : "green";
//     paragraph.style.backgroundColor = color;

//     paragraph.innerText = ` Что такое зло? Зло - это состояние или действие, которое наносит вред, боль и страдание другим людям. Это проявление эгоизма, жестокости, ненависти и насилия. Зло может привести к конфликтам, разрушению и несправедливости в обществе, а также вызвать страх и беспокойство у других. ${color}. Что такое добро? Добро - это состояние или действие, которое приносит пользу, благо и радость другим людям. Это проявление доброжелательности, сострадания, честности и любви к окружающим. Добро помогает создавать гармонию и благополучие в обществе, способствует справедливости и мирному сосуществованию.`;

//     colorIndex++;
//     rootDiv.append(paragraph);
// });
const button = document.querySelector('.choice');
const rootDiv = document.querySelector('.root2');
let colorIndex = 0;
button.addEventListener('click', function () {
    const paragraph = document.createElement('p');
    const color = colorIndex % 2 === 0 ? "blue" : "green";
    paragraph.style.backgroundColor = color;

    paragraph.innerHTML = `Что такое <span class="highlight">зло</span>? Зло - это состояние или действие, которое наносит вред, боль и страдание другим людям. Это проявление эгоизма, жестокости, ненависти и насилия. Зло может привести к конфликтам, разрушению и несправедливости в обществе, а также вызвать страх и беспокойство у других. Что такое <span class="highlight">добро</span>? Добро - это состояние или действие, которое приносит пользу, благо и радость другим людям. Это проявление доброжелательности, сострадания, честности и любви к окружающим. Добро помогает создавать гармонию и благополучие в обществе, способствует справедливости и мирному сосуществованию.`;

    colorIndex++;
    rootDiv.append(paragraph);
});
