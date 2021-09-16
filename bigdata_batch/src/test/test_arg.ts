// npx ts-node ./src/test/test_arg.ts --option1 arg1 --option2 arg2
process.argv.forEach((val: string, index: number) => {
    console.log(`${index}: ${val}`)
}
)

console.log(process.argv)