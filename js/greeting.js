class Greeting{

    showRules(container){
        const greeting = document.createElement('div');
        greeting.classList.add('greeting');

        greeting.innerHTML = `
        <h2>Welcome to the Match-Match game</h2>
        <span> Rules of the game </span>
        <ol>
            <li>Your mission is to find pairs of the same cards.</li>
            <li>All cards are mixed and layed face down. Turn over any two cards.
            If the two cards match, you get points in the score and they are disappeard.
            If they don't match, they are turn back.
            <li>Remember what was on each card and where it was.
            The game is over when all the cards have been matched.</li>
            <li>The player with the fastest time wins .</li>
            <li>To start tha game you have to chose the "Cards wrapper" , "Difficulty" and press "Next".
             After saving information about the player tha button "Start game" will be active.
            <li>Have fun ang good luck!!!.</li>
        </ol>
        <button id="userLogin">Next</button>
        `;
        container.appendChild(greeting);
    }

    showCongratulations(container, user, time){
        const congratulations = document.createElement('div');
        congratulations.setAttribute('id', 'congratulations');
        congratulations.classList.add('congratulations');

        congratulations.innerHTML = `
            <h2>Congratulation, ${user}!!!!</h2>
            <p> Your time is : ${time}</p>
            <button class="score" id="tableScore">Show table score</button>
        `
        container.appendChild(congratulations);

        const tableScore = document.getElementById('tableScore');
        tableScore.addEventListener('click', this.showTableScore);
    }

    showTableScore(){
        const greeting = document.getElementById('congratulations');
        let list = document.createElement('div');
        list.classList.add('tableScore');
        list.setAttribute('id', 'list');

        let users =  JSON.parse(localStorage.getItem('users'));
        let top = (users.length >= 10) ? users.slice(0, 10) : users;
        let resArray = [];

        greeting.appendChild(list);

        let line;
        top.forEach((item)=>{
            resArray.push( item.name + ' ' + item.surname + ':   ' + item.time);
        });

        resArray.forEach((item)=>{
            line = document.createElement('span');
            line.innerHTML = item ;
            list.appendChild(line);
        })
    }
}

