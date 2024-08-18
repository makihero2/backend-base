function operar(operacion: string, a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion ==='multiplicar'){
        return multiplicar(a, b);
    }    else if (operacion ==='dividir'){
        return dividir(a, b);
    } else if (operacion === 'potencia') {
        return potencia(a, b);

    }

}


function suma(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede restar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede multiplicar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a * b;
}

function dividir(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede dividir indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    if (b === 0) {
        console.log("retornando throw")
        throw new Error("No se puede dividir por cero");
    }

    return a / b;
}

function potencia(base: number, exponente: number) {
    if (base === undefined || exponente === undefined) {
        console.log("retornando throw");
        throw new Error("No se puede calcular la potencia de indefinidos");
    }

    if (typeof base !== 'number' || typeof exponente !== 'number') {
        return NaN;
    }

    return base ** exponente;
}

function factorial(n: number): number {
    if (n === undefined) {
        console.log("retornando throw");
        throw new Error("No se puede calcular el factorial de indefinidos");
    }

    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return NaN; // Factorial sólo está definido para enteros no negativos.
    }

    if (n === 0 || n === 1) {
        return 1; // Factorial de 0 o 1 es 1.
    }

    return n * factorial(n - 1);
}


export { suma, restar, multiplicar, dividir, potencia, factorial, operar };