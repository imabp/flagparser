
# Flagparser

We are building a feature-rich flag parser. 

If you are new to flag parsing.
Check the following below:

### install packages
```sh
npm install
```

### Build and run parser
```sh
npm run build
node build/src/index.js -p hello -i world
```

`-p` and `-h` are flags.

Value of flag `p` is `hello`
Value of flag `h` is `world`


## Local run

To run the project locally.

- Clone the repo: `git clone https://git clone https://github.com/imabp/flagparser.git`
- Intall packages: `npm install`
- Run the project: `npm run dev -- -exampleFlag helloworld`
- Expected Output `{ '-exampleFlag': 'helloworld' }`

## Development commands
- `npx ts-node src/index.ts -exampleFlag helloworld` to run on local
- `npm run watch` to continuously watch your code
- `npm run lint` to check your code is clean from error & warnings
- `npm run fix` to fix errors & warnings

```
Structure
.
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
├── .eslintrc.json
├── .prettierrc.js
├── .gitignore
├── .eslintignore
└── src
    ├── index.ts
    ├── type.ts
```
