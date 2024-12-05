import {readTextFile, readTextSample} from "../ReadInput";

const day = __filename[__filename.length - 4].toString()

export const Part1 = async () => {
    const start = performance.now()

    const input = await readTextFile(day)
    // const sample = await readTextSample()

    const answer = "Pending..."

    const end = performance.now();
    console.log(answer, " in ", (end-start).toFixed(2), " milliseconds");
}

export const Part2 = async () => {
    const start = performance.now()

    const input = await readTextFile(day)

    const answer = "Pending..."

    const end = performance.now();
    console.log(answer, " in ", (end-start).toFixed(2), " milliseconds");
}
export const Tests = async () => {

}