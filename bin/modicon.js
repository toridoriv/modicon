#!/usr/bin/env node

const { spawn } = require("child_process");
const { resolve } = require("path");

const baseCommand = "deno task start";

const program = spawn(baseCommand, process.argv.slice(2), {
  cwd: resolve(__dirname),
  env: process.env,
  shell: true,
});

program.stdout.on("data", (data) => {
  console.log(String(data));
});

program.stderr.on("data", (data) => {
  console.error(String(data));
});

program.on("close", (code) => {
  console.log(`\nchild process exited with code ${code}`);
});
