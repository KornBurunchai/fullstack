function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run(){
    console.log("Start!");
    await promiseTimeout(3000);
    console.log("Stop");
}

console.log("before run()");
run()
console.log("After run()");