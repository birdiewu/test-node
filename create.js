// var fs = require('fs');

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// fs.readFile('todos.json', function(err, data) {
//     readline.question('您要新增什麼待辦事項？\n', function (result) {
//         let todos = JSON.parse(data);
//         let newTodo = { title : result };
//         todos.push(newTodo);
//         fs.writeFile('todos.json', JSON.stringify(todos), function (err) {
//             console.log(`新增事項：${result}`);
//             process.exit(0);
//         });
//     });
// });

var fs = require('fs');

const readlineSync = require('readline-sync');

let todos = JSON.parse(fs.readFileSync("todos.json"));

let result = readlineSync.question('您要新增什麼待辦事項？\n')

let newTodo = { title : result };

todos.push(newTodo);

fs.writeFileSync("todos.json", JSON.stringify(todos));

console.log(`新增事項：${result}`);