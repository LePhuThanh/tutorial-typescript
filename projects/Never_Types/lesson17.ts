function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}

//Void types => return undefine
//Never types => don't eturn 
//Normally , to handle error

function runInfinity(): void {
    // while (true) {
    //     // console.log("running...")
    // }
}

// handleException("just a test error");

let a = handleException("just a test error");
console.log(">> check a= ", a)