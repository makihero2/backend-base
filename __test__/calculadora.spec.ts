import { describe, test, expect } from "@jest/globals";
import { restar, suma, operar, multiplicar, dividir, potencia, factorial } from "../src/calculadora.js";
import app from "../src/server.js";
import request from "supertest";

describe("Calculadora", () => {

    test("sumar dos numeros", () => {
        let a: any = 100;
        let b: any = 200;
        expect(suma(a, b)).toBe(300);

        a = 10;
        b = "a";
        expect(suma(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { suma(a, b) }).toThrow("No se puede sumar indefinidos");
    });

    test("restar dos numeros", () => {
        let a: any = 100;
        let b: any = 200;
        expect(restar(b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(restar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { restar(a, b) }).toThrow("No se puede restar indefinidos");
    });

    test("multiplicar dos numeros", () => {
        let a: any = 10;
        let b: any = 20;
        expect(multiplicar(a, b)).toBe(200);

        a = 5;
        b = "a";
        expect(multiplicar(a, b)).toBeNaN();

        a = undefined;
        b = 2;
        expect(() => { multiplicar(a, b) }).toThrow("No se puede multiplicar indefinidos");
    });

    test("dividir dos numeros", () => {
        let a: any = 20;
        let b: any = 5;
        expect(dividir(a, b)).toBe(4);

        a = 10;
        b = "a";
        expect(dividir(a, b)).toBeNaN();

        a = 10;
        b = 0;
        expect(() => { dividir(a, b) }).toThrow("No se puede dividir por cero");

        a = undefined;
        b = 2;
        expect(() => { dividir(a, b) }).toThrow("No se puede dividir indefinidos");

        // Caso de prueba: división con un número negativo
        a = 20;
        b = -4;
        expect(() => { dividir(a, b) }).toThrow("No se puede dividir números negativos");

         // Caso de prueba: división con números fraccionados
        a = 40;
        b = 1.5;
        expect(() => { dividir(a, b) }).toThrow("No se puede dividir números fraccionados");
    });

    test("calcular potencia", () => {
        let base: any = 2;
        let exponente: any = 3;
        expect(potencia(base, exponente)).toBe(8);

        base = 5;
        exponente = "a";
        expect(potencia(base, exponente)).toBeNaN();

        base = undefined;
        exponente = 2;
        expect(() => { potencia(base, exponente) }).toThrow("No se puede calcular la potencia de indefinidos");
    
         // Caso de prueba: Exponente negativo
         base = 2;
         exponente = -3;
         expect(() => { potencia(base, exponente) }).toThrow("No se puede calcular la potencia con un exponente negativo");
 
         // Caso de prueba: Base negativa con exponente impar
         base = -2;
         exponente = 3;
         expect(potencia(base, exponente)).toBe(-8);  // (-2)^3 = -8
 
         // Caso de prueba: Base negativa con exponente par
         base = -2;
         exponente = 4;
         expect(potencia(base, exponente)).toBe(16);  // (-2)^4 = 16    
         
       
    });

    test("potencia de números", () => {
        // Caso de prueba: Base y exponente indefinido
        let base: any = undefined;
        let exponente: any = undefined;
        expect(() => { potencia(base, exponente) }).toThrow("Base y exponente indefinido");
    
        // Otros casos de prueba...
    });
    

    test("calcular factorial", () => {
        let n: any = 5;
        expect(factorial(n)).toBe(120);

        n = -5;
        expect(factorial(n)).toBeNaN();

        n = "a";
        expect(factorial(n)).toBeNaN();

        n = undefined;
        expect(() => { factorial(n) }).toThrow("No se puede calcular el factorial de indefinidos");
    });

    test("operar dos numeros", () => {
        let a: any = 100;
        let b: any = 200;
        expect(operar("resta", b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(operar("suma", a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { operar("suma", a, b) }).toThrow("No se puede sumar indefinidos");

        // Nuevas pruebas para operar con multiplicación, división, potencia y factorial
        a = 10;
        b = 20;
        expect(operar("multiplicar", a, b)).toBe(200);

        a = 20;
        b = 5;
        expect(operar("dividir", a, b)).toBe(4);

        a = 2;
        b = 3;
        expect(operar("potencia", a, b)).toBe(8);

       // a = 5;
       // expect(operar("factorial", a)).toBe(120);
    });

    test("test de endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola mundo al usuario Juan Hernandez D.");
            });
    });

    test("test de endpoint operar", async () => {
        return await request(app)
            .get("/operar?a=30&b=30&oper=suma")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion suma de 30 y 30 es 60");
            });
    });

});
