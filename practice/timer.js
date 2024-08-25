const fs = require('fs');

function someAsyncOperation(callback) {
    fs.readFile('/path/to/file', callback);
const timeoutScheduled = Date.now();
}
setTimeout(() => {
    const delay = Date.now() - timeoutScheduled
    console.log(`${delay}ms have passed since scheduling`)
    }, 100);

someAsyncOperation(() => {
    const startCallback = Date.now();
    // do something else that takes 10 ms...
    while (Date.now() - startCallback < 10) {
        // do nothing
    }
});