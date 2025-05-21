#!/usr/bin/env node

import { buildQuartz } from "./src/build/build.js"
import { quartzLogger } from "./src/utils/logger.js"
import fs from "fs/promises"
import path from "path"
import { sync } from "./src/build/sync.js"

const args = process.argv.slice(2)

const command = args[0]

switch (command) {
  case "build":
    buildQuartz()
    break
  case "sync":
    sync()
    break
  case "help":
  default:
    quartzLogger.info("Usage: quartz <command>")
    quartzLogger.info("Available commands: build, sync")
    break
}
