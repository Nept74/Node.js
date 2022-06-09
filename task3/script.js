const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{
    fs.readFile('data.txt', "utf-8", (err, data) => {
        if (err) throw err
        let arr = data.split(' ');
        let sort1 = [];
        let sort2 = [];
        arr.forEach(el => {
            if (el % 2 === 0) {
                sort1.push(el);
            }
            if (el **= 3) {
                sort2.push(el);
            }
        })
        fs.writeFile('out-1.txt', sort1.join(' '), function(error){
            if(error) throw error; // ошибка чтения файла, если есть
            console.log(`Данные в первый файл успешно записаны записать файл`);
        });
        fs.writeFile('out-2.txt', sort2.join(' '), function(error){
            if(error) throw error; // ошибка чтения файла, если есть
            console.log(`Данные во второй файл успешно записаны записать файл`);
        });


    })
})

server.listen(8080, () => {
    console.log('Сервер запущен')
});