class Menu {
    constructor(networkStatus, memory, notifications, controller) {
        this.networkStatus = networkStatus;
        this.memory = memory;
        this.notifications = notifications;
        this.controller = controller;
    }

    getMenuSpecs() {
        return {
            networkStatus: this.networkStatus,
            memory: this.memory,
            notifications: this.notifications,
            controller: this.controller
        };
    }
}

export default Menu;
