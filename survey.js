const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name or nickname? ", (answer1) => {
  rl.question("What's your favourite activity? ", (answer2)=> {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("What's your favourite sport? ", (answer4) => {
        rl.question("What's your superpower? ", (answer5) => {
          console.log(`Your name/nickname is ${answer1}.`);
          console.log(`Your favourite activity is ${answer2}.`);
          console.log(`You listen to ${answer3} while doing ${answer2}.`);
          console.log(`Your favourite sport is ${answer4}.`);
          console.log(`Your superpower is ${answer5}.`);
          rl.close();
        });
      });
    });
  });
});