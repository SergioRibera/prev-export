#!/usr/bin/env node
import { yargs } from "yargs";

const options = yargs
    .usage("Usage: -c <file>")
    .option("c", { alias: "compile", describe: "Compile a file", type: "string", demandOption: true})
    .args;

console.log('This is a command ${options.compile}');