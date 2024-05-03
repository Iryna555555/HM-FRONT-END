// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// let numbersdiv = document.querySelector('.numbers');
// for(let i = 50; i <= 100; i+=10) {
//   let newPelem = document.createElement('p');
//   newPelem.innerText = i;
//   numbersdiv.appendChild(newPelem);  
// }

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// let stringsArray = [
//     'Что разум человека может постигнуть и во что он может поверить, того он способен достичь.Наполеон Хилл, журналист и писатель ',
//     'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан',
//     ' Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других. Флоренс Найтингейл'
// ];
// let stringsContainerDiv = document.querySelector('.strings_container');
// for(let i = 0; i < stringsArray.length; i++ ) {
//     let pElem = document.createElement('p');
//     pElem.innerText = stringsArray[i];
//     stringsContainerDiv.appendChild(pElem);
// }

//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

let usersArray = [
    {first_name: 'Doctor', last_name: 'Dulitl', age: 45 },
    {first_name: 'Devo4ka', last_name: 'Vkrasnom', age: 30 },
    {first_name: 'Time', last_name: 'Live', age: 88},
];

let usersContainerDiv = document.querySelector('.users_container');

for(let i = 0; i < usersArray.length; i++) {
if (usersArray[i].age >=18) {
    let userCard = document.createElement('div');
    userCard.classList.add('user_card');
    let fullName = usersArray[i].first_name + ' ' + usersArray[i].last_name;
    let age = usersArray[i].age;
    userCard.innerText = `${fullName}, ${age}`;
usersContainerDiv.appendChild(userCard)
  }
}