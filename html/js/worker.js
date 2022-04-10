self.addEventListener('message', function (e) {
    let n, i, count = 0;
    const num = e.data.invest;
 
    for (n = 2; n <= num; n++) {
        for (i = 2; i < n; i++) {
            if (n % i == 0)
                break;
        }
        if (n == i) {
            console.log(n);
            count++;
            postMessage({count, n});
        }
    }
})
