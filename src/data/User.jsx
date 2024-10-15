class User {
    constructor(username, balance, friends = [], email, phone) {
        this.username = username;
        this.balance = balance;
        this.friends = friends;
        this.email = email;
        this.tel = phone;

    }

}

export default User;
