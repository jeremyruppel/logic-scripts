# logic scripts

If you just want to download some Scripter scripts, go to the [latest Release](https://github.com/jeremyruppel/logic-scripts/releases).

## important files

- TypeScript source files should be placed in `src/`
- JavaScript output files will be written to `dist/`

## commands

- `npm run build` builds the `src/` directory
- `npm run watch` does the above but watches for changes

## scripts

Built JavaScript files end up in `dist/`. From there, you can copy and paste
them into Scripter and save them for later use.

### clap

When a noteon comes in, fire off a few other notes with different pitch and
random velocity. Useful for adding realism to a clap sample. It's good for a
snap too.
