function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run(){
    console.log("Start!");
    await promiseTimeout(3000);
    const response = await longRunningOperation();
    console.log(response);
    console.log("Stop");
}

console.log("before run()");
run()
console.log("After run()");