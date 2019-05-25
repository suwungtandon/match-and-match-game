class User{

    set firstName(value){
        this.name = value;
    }
    get firstName(){
        return this.name;
    }
    set lastName(value){
        this.surname = value;
    }
    get lastName(){
        return this.surname;
    }
    set email(value){
        this.mail = value;
    }
    get email(){
        return this.mail;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set score(time){
        this.time = time;
    }
    get score(){
        return this.time;
    }

    init(block){
        let loginForm = document.createElement('div');
        loginForm.classList.add('loginForm');
        loginForm.innerHTML = `
        <p>Please fill the information about the player</p>
        <form id="loginUser">
            <label for "firstName">First Name:</label>
            <input id="firstName" data-value="userName" type="text" placeholder="First Name" required/>
            <label for "lastName">Last Name:</label> 
            <input id="lastName" type="text" placeholder="Last Name" required/>
            <label for "email">Email:</label> 
            <input id="email" type="email" placeholder="email" required/>
        </form>
        <button class="saveForm" id="saveForm" type="submit">Save</button>
    `;

        block.appendChild(loginForm);
        const btnSave = document.getElementById('saveForm');
        btnSave.addEventListener('click', this.saveInfo.bind(this));
    }

    saveInfo(){
        const userName = document.getElementById('userInfo');
        this.firstName = document.getElementById('firstName').value;
        this.lastName = document.getElementById('lastName').value;
        this.email = document.getElementById('email').value;
        if(this.firstName){
            userName.innerHTML = `<p>User name :  ${this.fullName}</p>`;
            start.classList.remove('untouchable');
        }else{
            alert('Please enter your name');
        }
    }

    saveToLocalStorage(){
        let users =  JSON.parse(localStorage.getItem('users'));
        if(users){
            users.push(this);
            this.sortTableScore(users);
        }else{
            users = [];
            users.push(this);
        }
        localStorage.setItem('users',JSON.stringify( users));
    }

    sortTableScore(arr){
        arr.sort(this.compareTime);
    }

    compareTime(userOne, userTwo){
        return userOne.time - userTwo.time;
    }
}