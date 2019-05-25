class Greeting{

    showRules(container){
        const greeting = document.createElement('div');
        greeting.classList.add('greeting');

        greeting.innerHTML = `
        <h2>Selamat Datang Di Match-Match game</h2>
        <span> Aturan Mainnya </span>
        <ol>
            <li>Misi Anda adalah menemukan pasangan kartu yang sama.</li>
            <li>Semua kartu dicampur dan diletakkan menghadap ke bawah. Balikkan dua kartu.
            Jika kedua kartu cocok, Anda mendapatkan poin dalam skor dan kartunya akan menghilang.
            Jika kartu tidak cocok, kartunya akan tetap pada posisi.
            <li>Ingat apa yang ada di setiap kartu dan di mana posisi itu.
            Permainan akan berakhir ketika semua kartu telah cocok.</li>
            <li>Pemain dengan waktu tercepatakan menang.</li>
            <li>Untuk memulai permainan, Anda harus memilih "Tema Kartu", "Kesulitan" dan klik "Next".
             Setelah menyimpan informasi tentang pemain, tombol "Mulai permainan" akan aktif.
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

