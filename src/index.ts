import { getStudentIDs } from "./dataService";


async function main() {
    const studentIDs = await getStudentIDs('John Doe');
    console.log(studentIDs);
}

main();