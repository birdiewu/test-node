const readlineSync = require('readline-sync');
var colors = require('colors');

var module1 = require('./create');
var module2 = require('./read');
var module3 = require('./update');
var module4 = require('./delete');

function showList() {
    const answer = readlineSync.question(colors.bgBrightWhite('\n您要執行下列什麼指令?')+colors.white(`\n1. 建立待辦事項\n2. 讀取待辦事項\n3. 更新待辦事項\n4. 刪除待辦事項\n5. 離開\n`));

    if (answer === '1') {
        module1.createTodo();
        showList();
    } else if (answer === '2') {
        module2.readTodo();
        showList();
    } else if (answer === '3') {
        module3.updateTodo();
        showList();
    } else if (answer === '4') {
        module4.deleteTodo();
        showList();
    } else {
        process.exit();
    }
}

showList();