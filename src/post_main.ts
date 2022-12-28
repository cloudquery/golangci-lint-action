import process from "process"
import { postRun } from "./run"

process.on("uncaughtException", (e) => console.warn(e.message))

postRun()
