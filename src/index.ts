import {FlagsObjectInterface} from './type'
const args: string[] = process.argv.slice(2)

const flagParser = (): FlagsObjectInterface => {
    let [i, flagIndex] = [0, 0]
    let currentflagValue = ''
    const flagsObject: FlagsObjectInterface = {}
    for (i = 0; i < args.length; i++) {
        if (args[i].trim().length === 0) {
            continue
        }

        if (args[i][0] !== '-') {
            currentflagValue += args[i]
            flagsObject[args[flagIndex]] = currentflagValue
            currentflagValue = ''
            continue
        }

        flagIndex = i
    }
    return flagsObject
}

console.log(flagParser())

export default flagParser
