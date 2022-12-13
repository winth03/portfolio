import { execFile } from 'child_process'

function myPromise(timeout, callback) {
    return new Promise((resolve, reject) => {
        // Set up the timeout
        const timer = setTimeout(() => {
            child?.kill()
            reject(new Error(`Promise timed out after ${timeout} ms`));
        }, timeout);

        // Set up the real work
        callback(
            (value) => {
                clearTimeout(timer);
                resolve(value);
            },
            (error) => {
                clearTimeout(timer);
                reject(error);
            }
        );
    });
}

let child
export default defineEventHandler(async (event) => {
    function waitForOutput() {
        return new myPromise(2000, resolve => {
            function handleOutput(data) {
                resolve(data)
            }

            child.stdout.once('data', handleOutput)
        })
    }

    if (event.node.req.method === 'GET') {
        child?.kill()
        child = execFile(useRuntimeConfig().nodeEnv === 'development' ? 'megadungeon.exe' : 'chmod a+x ./megadungeon.exe && ./megadungeon.exe', { cwd: './public', })
        console.log("spawned", child.pid)
        child.stdout.setEncoding('utf-8')
        const data = await waitForOutput()        
        return data
    }
    else if (event.node.req.method === 'POST') {
        const { prompt } = await readBody(event)

        child.stdin.write(`${prompt}\r\n`)
        const data = await waitForOutput()
        return data
    }
})