function game(container){
    const backgroundCards = document.getElementById('cardsBg');
    const cardsNumber = document.getElementById('difficulty');
    const btnNext = document.getElementById('userLogin');
    const start = document.getElementById('start');

    let user = new User();
    let cardsGame = new Cards();
    let timer = new Timer();

    backgroundCards.addEventListener('click',(e) =>{
        const cards = document.querySelector('.backgroundCards');
        cards.classList.toggle('hidden');
        cardsGame.backgroundCards = e.target.getAttribute('src') || 'img/bg1.jpg';
        console.log(cardsGame);
    });

    cardsNumber.addEventListener('click', (e)=>{
        const cardsNumber = document.querySelector('.cardsNumber');
        cardsNumber.classList.toggle('hidden');
        cardsGame.numberOfCards = e.target.getAttribute('data-value') || 4;
        console.log(cardsGame);
    });

    btnNext.addEventListener('click', ()=>{
        container.innerHTML = '';
        user.init(container);
    });

    start.addEventListener('click', ()=>{
        console.log(cardsGame);

        startGame(cardsGame, user, timer);
    });
    return cardsGame;
}

function startGame(cards, user, clock){

    const game = document.getElementById('cardContainer');
    const userName = document.getElementById('userInfo');
    const grid = document.createElement('section');

    let test = document.querySelector('.timer');

    if(test){
        clock.stopTick();
        test.remove();
    }

    clock.startTimer(userName);
    game.innerHTML = '';


    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    let pictures = cards.picturesArray.slice(0,Number(cards.numberOfCards));
    let gameGrid = pictures.concat(pictures);

    gameGrid.sort(() => 0.5 - Math.random());

    gameGrid.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;

        const front = document.createElement('div');
        front.classList.add('front');
        front.style.backgroundImage = `url(${cards.bg})` ;

        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${item.img})`;
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });

    let firstGuess = '';
    let secondGuess = '';
    let count = 0;
    let previousTarget = null;
    let delay = 1000;
    let countMatches = 0;


    grid.addEventListener('click', (e) =>{
        let clicked = e.target;
        if (
            clicked.nodeName === 'SECTION' ||
            clicked === previousTarget ||
            clicked.parentNode.classList.contains('selected')
        ) {
            return;
        }

        if (count < 2) {
            count++;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            } else {
                secondGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            }
            if (firstGuess !== '' && secondGuess !== '') {
                if (firstGuess === secondGuess) {
                    setTimeout(match, delay);
                    setTimeout(resetGuesses, delay);
                } else {
                    setTimeout(resetGuesses, delay);
                }
            }
            previousTarget = clicked;
        }
    });

    function match(){
        let congratulation = new Greeting();
        countMatches += 2;

        let selected = document.querySelectorAll('.selected');
        selected.forEach(card => {
            card.classList.add('match');
        });

        if(countMatches === cards.numberOfCards*2){
            clock.stopTick();
            grid.style.display = 'none';
            user.score = clock.finishTime;
            user.saveToLocalStorage();
            congratulation.showCongratulations(game, user.fullName,  clock.finishTime);
        }

    }

    function resetGuesses(){
        firstGuess = '';
        secondGuess = '';
        count = 0;

        let selected = document.querySelectorAll('.selected');
        selected.forEach(card => {
            card.classList.remove('selected');
        });
    }
}



