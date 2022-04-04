/**
 * Interfaz Strategy
 * Debe implentar un funcion execute que reciba un array de numeros y lo devuelva ordenado
 */
export interface Strategy
{
    execute(data: number[]): number[],
}