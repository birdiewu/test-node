var fs = require('fs');

var colors = require('colors');

const readlineSync = require('readline-sync');

let todos = JSON.parse(fs.readFileSync("todos.json"));
let todolist = '';
for (let [index, todo] of todos.entries()) {
    todolist = todolist + `\n#${index} ${todo.title}`;
}

let result = readlineSync.question(colors.bgBrightWhite(`您要刪除哪個待辦事項？`)+colors.white(`${todolist}\n`))
console.log(colors.red(`刪除事項：${todos[result].title}`));
todos.splice(result,1)
fs.writeFileSync("todos.json", JSON.stringify(todos));