/**
 * Created by Olexiy Lyhun on 15.08.2016.
 */

function factorial(n) {
    return new Promise(function (resolve, reject) {
        if (n > 0) {
            console.log("N =",n);
            let fact = n--;
            while (n > 0)
            {
                fact *= n--;
            }
            resolve(fact);
        }
        else {
            reject("N < 1");
        }
    });
}
function fibonacci(n) {
    if (n == 1 || n == 2) return 1;
    let res = fibonacci(n-1)+fibonacci(n-2);
    return res;
}
let f = factorial(4)
    .then(
        result => {
            console.log("Factorial =",result);
            result = fibonacci(result);
            return result;
        },
        error => {
            console.log("Error",error);
            return error;
        }
    )
    .then(
        result => console.log("Number Fibonacci =",result),
        error => console.log("Error ",error)
    );
