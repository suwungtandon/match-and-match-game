class Cards{
    constructor(){
        this.bg = 'img/bg1.jpg';
        this.num = 4;
        this.picturesArray = [
            {
                'name': 'mouse',
                'img': 'img/img1.jpeg'
            },
            {
                'name': 'bear',
                'img': 'img/img2.jpeg'
            },
            {
                'name': 'elephant',
                'img': 'img/img3.jpeg'
            },
            {
                'name': 'pig',
                'img': 'img/img4.jpeg'
            },
            {
                'name': 'rabbit',
                'img': 'img/img5.jpeg'
            },
            {
                'name': 'Karlson',
                'img': 'img/img6.png'
            },
            {
                'name': 'bee',
                'img': 'img/img7.png'
            },
            {
                'name': 'bear2',
                'img': 'img/img8.png'
            },
            {
                'name': 'Simka',
                'img': 'img/img9.png'
            },
            {
                'name': 'cat',
                'img': 'img/img10.png'
            },
            {
                'name': 'sun',
                'img': 'img/img11.jpg'
            },
            {
                'name': 'clock',
                'img': 'img/img12.jpg'
            },
        ];
    }

    get backgroundCards(){
        return this.bg;
    }

    set backgroundCards(value){
        this.bg = value;
    }

    get numberOfCards(){
        return this.num;
    }

    set numberOfCards(value){
        this.num = value;
    }

}