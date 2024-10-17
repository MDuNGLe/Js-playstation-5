class Console {
    constructor(title, hasWarranty, ports, settings, connectedGamepads = []) {
        this.title = title;
        this.hasWarranty = hasWarranty;
        this.ports = ports;
        this.settings = settings; // Объект настроек (System)
        this.connectedGamepads = connectedGamepads;
    }

    // Метод для подключения геймпада
    connectGamepad(gamepad) {
        this.connectedGamepads.push(gamepad);
        console.log(`${gamepad} подключен к ${this.title}.`);
    }

    // Метод для отображения информации о консоли
    displayInfo() {
        console.log(`Консоль: ${this.title}`);
        console.log(`Гарантия: ${this.hasWarranty ? 'Да' : 'Нет'}`);
        console.log(`Порты: ${this.ports.join(', ')}`);
        console.log(`Настройки:`, this.settings);
        console.log(`Подключенные геймпады: ${this.connectedGamepads.join(', ') || 'Нет'}`);
    }
}

export default Console;
