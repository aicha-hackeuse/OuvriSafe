import childProcess from 'node:child_process'
import { syncBuiltinESMExports } from 'node:module'
import react from '@vitejs/plugin-react'
import { build, createServer, preview } from 'vite'

const originalExec = childProcess.exec

if (process.platform === 'win32') {
  childProcess.exec = function patchedExec(command, ...args) {
    if (command === 'net use') {
      const callback = [...args].reverse().find((arg) => typeof arg === 'function')

      if (callback) {
        queueMicrotask(() => callback(null, '', ''))
      }

      return {
        kill() {},
        on() {
          return this
        },
        once() {
          return this
        },
      }
    }

    return originalExec.call(this, command, ...args)
  }

  syncBuiltinESMExports()
}

const [, , maybeCommand, ...restArgs] = process.argv
const command = maybeCommand && !maybeCommand.startsWith('-') ? maybeCommand : 'dev'
const cliArgs = command === 'dev' ? [maybeCommand, ...restArgs].filter(Boolean) : restArgs

function readOption(name, fallback) {
  const index = cliArgs.findIndex((arg) => arg === `--${name}`)
  if (index === -1) return fallback
  return cliArgs[index + 1] ?? fallback
}

const sharedConfig = {
  configFile: false,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
}

if (readOption('host')) {
  sharedConfig.server.host = readOption('host')
  sharedConfig.preview.host = readOption('host')
}

if (readOption('port')) {
  const port = Number(readOption('port'))
  sharedConfig.server.port = port
  sharedConfig.preview.port = port
}

if (command === 'build') {
  await build(sharedConfig)
} else if (command === 'preview') {
  const previewServer = await preview(sharedConfig)
  previewServer.printUrls()
} else {
  const server = await createServer(sharedConfig)
  await server.listen()
  server.printUrls()
}
