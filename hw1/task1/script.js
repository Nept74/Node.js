function someFunc() {
    console.log('Функция выполниться с задержкой в 2 секунды!');
}

function paused(func){
    return setTimeout(func, 2000)
}
paused(someFunc)