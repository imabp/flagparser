## Flagparser

We are building a feature-rich flag parser. 

If you are new to flag parsing.
Check the following below:

```sh
node index.js -p hello -i world
```

`-p` and `-h` are flags.

Value of flag `p` is `hello`
Value of flag `h` is `world`


# Local run

To run the project locally.

1. Clone the repo: `git clone https://git clone https://github.com/imabp/flagparser.git`
2. Run the project: `node index.js -exampleFlag helloworld`
3. Expected Output `{ '-exampleFlag': 'helloworld' }`
