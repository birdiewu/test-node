// var fs = require('fs');

// var colors = require('colors');

// fs.readFile('todos.json', function(err, data) {
//     let todos = JSON.parse(data);
//     let todolist = '您的待辦事項：';
//     for (let [index, todo] of todos.entries()) {
//         todolist = todolist + `\n#${index} ${todo.title}`;
//     }
//     console.log(colors.bold(todolist));
//     process.exit(0);
// });

var fs = require('fs');

let todos = JSON.parse(fs.readFileSync("todos.json"));

let todolist = '您的待辦事項：';

for (let [index, todo] of todos.entries()) {
    todolist = todolist + `\n#${index} ${todo.title}`;
}
console.log(todolist);