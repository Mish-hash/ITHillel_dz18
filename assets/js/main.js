/*
    1) Создать функцию, которая при каждом вызове будет показывать разницу в секундах между временем,
    когда ее вызывали последний раз и теперешним.
    Если вызываем первый раз, то возвращаем строку 'Enabled' и сохраняем время вызова функции.
    Последующий вызов функции вернет строку вида '2 seconds have passed'
    Запрещается использовать глобальные переменные как хранилище значений.

    getTime() // 'Enabled'
    // Запускаем через 2 сек
    getTime() // 2 seconds have passed
    // Запускаем через 3 сек
    getTime() // 3 seconds have passed
    // Запускаем через 60 сек
    getTime() // 60 seconds have passed

*/

class Time {
    constructor() {
        this.lastTime = null;
    }

    getTime() {
        if (this.lastTime === null) {
            this.lastTime = new Date;
            return 'Enabled';
        } else {
            const diffTime = ((new Date - this.lastTime)/1000).toFixed();
            this.lastTime = new Date;
            return `${diffTime} seconds have passed`;
        }
    }
}

const time = new Time;



