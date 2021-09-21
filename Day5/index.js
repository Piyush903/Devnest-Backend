var fs = require("fs");
const program = require("commander");

program.command("mkdir <name>").action((name) => {
    fs.mkdirSync(name);
});

program.command("rmdir <name>").action((name) => {
    fs.rmdirSync(name);
});

program.command("writefile <path>").action((path) => {
    fs.writeFileSync(path, "Hello awesome people");
});

program.command("readfile <name>").action((name) => {
    var str = fs.readFileSync(name, "utf-8");
    console.log(str);
});

program.parse(process.argv);