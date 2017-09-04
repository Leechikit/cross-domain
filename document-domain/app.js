const child_process = require('child_process');

const p1 = child_process.exec(
    'node server1.js',
    {},
    (err, stdout, stderr) => {
        if (err) {
            // err.code 是进程退出时的 exit code，非 0 都被认为错误
            // err.signal 是结束进程时发送给它的信号值
            console.log('err:', err, err.code, err.signal);
        }
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }
)

console.log('child pid:', p1.pid);

const p2 = child_process.exec(
    'node server2.js',
    {},
    (err, stdout, stderr) => {
        if (err) {
            // err.code 是进程退出时的 exit code，非 0 都被认为错误
            // err.signal 是结束进程时发送给它的信号值
            console.log('err:', err, err.code, err.signal);
        }
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }
)

console.log('child pid:', p2.pid);