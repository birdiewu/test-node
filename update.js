var fs = require('fs');

const readlineSync = require('readline-sync');

let todos = JSON.parse(fs.readFileSync("todos.json"));
let todolist = '';
for (let [index, todo] of todos.entries()) {
    todolist = todolist + `\n#${index} ${todo.title}`;
}

let result = readlineSync.question(`您要更新哪個待辦事項？${todolist}\n`)
let content = readlineSync.question(`您想把內容更新成什麼？\n`)
todos[result].title = content;
console.log(`更新事項：${todos[result].title}`);
fs.writeFileSync("todos.json", JSON.stringify(todos));