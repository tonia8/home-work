let a = Number(prompt('Enter a'));
let b = Number(prompt('Enter b'));
let c = Number(prompt('Enter c'));

calculateQuadratic(a, b, c);

function calculateQuadratic(a, b, c) {
    if (a === 0) {
        alert('a == 0, no results');
        return;
    }
    
    let D = (b * b - 4 * a * c);

    if (D < 0) {
        alert('D < 0, no results');
        return;
    }
    
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    
    alert('Entered values are: ' + a + ', ' + b + ' and ' + c);
    alert('results: x1 = ' + x1 + ', x2 = ' + x2);
}