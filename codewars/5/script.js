function getParticipants(handshakes){
    let s = 0;
    for (let i = 1; i <= handshakes+3; i++) {
        console.log(`${i}-я итерация. входное значение s = ${s}`);

        s+=(i-1);
        if (s >= handshakes){
            console.log("сработал иф");
            return i;

        }
    }
    return 1;
}

console.log( getParticipants(1));
