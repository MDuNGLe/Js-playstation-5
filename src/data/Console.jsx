class Console {
    constructor(title, warranty, ports) {
        this.title = title;
        this.warranty = warranty;
        this.ports = ports;  // массив портов
    }

    getConsoleSpecs() {
        return {
            title: this.title,
            warranty: this.warranty,
            ports: this.ports
        };
    }
}

export default Console;
