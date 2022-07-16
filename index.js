const args = process.argv.slice(2);

const flagParser = () => {
        let [i, flagIndex, totalFlags] = [0,0,0]
        let currentflagValue = ""
        let flagsObject = {}
        for(i = 0; i < args.length; i++){
                if(args[i].trim().length === 0){
                        continue;
                }

                if(args[i][0] != '-'){
                        currentflagValue += args[i];
                        flagsObject[args[flagIndex]] = currentflagValue;
                        currentflagValue = "";
                        continue;
                }

                flagIndex = i;
        }
        return flagsObject;
}

console.log(flagParser());

module.exports = flagParser;
