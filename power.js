function power(n,p) {
    p--
    if (p>1){
        x=n*power(n,p)
    }
    return x
}

console.log(power(2,2))