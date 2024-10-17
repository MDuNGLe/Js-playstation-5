
class User {
    constructor(nickname, email, phone, fullName, balance, paymentCard, address) {
        this.nickname = nickname;
        this.email = email;
        this.phone = phone;
        this.fullName = fullName;
        this.balance = balance;
        this.paymentCard = paymentCard;
        this.address = address;
    }

    getProfile() {
        return {
            nickname: this.nickname,
            email: this.email,
            phone: this.phone,
            fullName: this.fullName,
            balance: this.balance,
            paymentCard: this.paymentCard,
            address: this.address
        };
    }
}

export default User;
