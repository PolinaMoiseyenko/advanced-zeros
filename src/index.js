module.exports = function getZerosCount(number, base) {
    let numb = number;
    const primes =  [];  
    let i = 2, j = 2;
    check: for (i = 2; i <= base; i++){
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                continue check;
            }
        }
        primes.push(i);
    }
    //finding prime factors of base
    let primeFactors = 0;
    for (i = 0; i < primes.length; i++) {
        while (base % primes[i] === 0) {
            base /= primes[i];
            primeFactors++; //powers of prime factors of base
        }
        let count = 0;
        let a = Math.floor(number / primes[i])
        while (a > 0) {
            count += a;
            a = Math.floor(a / primes[i]);
        }
        numb = Math.min(numb, Math.floor(count / primeFactors));
        primeFactors = 0;
    }
    return numb;
}
