import bcrypt from 'bcrypt';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter admin password: ', async (password) => {
  const hash = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hash);
  rl.close();
});
