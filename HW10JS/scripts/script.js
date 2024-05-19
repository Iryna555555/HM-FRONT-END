document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const users = [];

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;

        if (age < 0) {
            alert('Age cannot be negative.');
            return;
        }

        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`);

        const user = {
            id: Date.now(),
            firstName,
            lastName,
            age
        };

        users.push(user);
        rerender(users);
    });

    const rerender = (users) => {
        const userCards = document.getElementById('userCards');
        userCards.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <p>First Name: ${user.firstName}</p>
                <p>Last Name: ${user.lastName}</p>
                <p>Age: ${user.age}</p>
            `;
            userCard.addEventListener('dblclick', () => {
                removeUser(user.id);
            });

            userCards.appendChild(userCard);
        });
    };

    const removeUser = (id) => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            rerender(users);
        }
    };
});
