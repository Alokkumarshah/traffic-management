const { spawn } = require('child_process');
const path = require('path');

console.log("==================================================");
console.log("🚦 Starting Aegis Traffic Intelligence Dashboard...");
console.log("==================================================\n");

// Spawn Backend Server
const backend = spawn('npm', ['start'], {
  cwd: path.join(__dirname, 'backend'),
  shell: true,
  stdio: 'inherit'
});

// Spawn Frontend Developer Server
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  shell: true,
  stdio: 'inherit'
});

// Graceful cleanup on terminate
const cleanup = () => {
  console.log("\n🛑 Terminating Aegis services. Goodbye!");
  backend.kill();
  frontend.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
