class Timer{
    constructor(){
        this.timer = 0;
        this.stop = 0;
    }

    startTimer(elem){
        const blockTimer = document.createElement('div');
        blockTimer.classList.add('timer');
        elem.appendChild(blockTimer);
        this.interval = setInterval(() => {
            this.timer++;
            blockTimer.innerHTML = `${this.tick(this.timer)}`;
        }, 1000);

    }

    stopTick(){
        this.stop = this.timer;
        this.timer = 0;
        clearInterval(this.interval);
    }

    tick(sec){
        let seconds = sec % 60 || 0;
        let minutes = Math.floor(sec/60)|| 0;
        let hours = Math.floor(sec/3600) || 0;

        if(sec < 60){
            return seconds;
        }else if(sec < 3600){
            return  `${minutes} : ${seconds}`;
        }else{
            return  `${minutes} : ${seconds} : ${hours}`;
        }
    }

    get finishTime(){
        return this.stop;
    }
}