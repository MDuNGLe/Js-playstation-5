class Friends {
    constructor(friendsList) {
        this.friendsList = friendsList;  // Массив объектов { isOnline, email }
    }

    getFriends() {
        return this.friendsList;
    }
}

export default Friends;
