import { Strategy } from './Strategy'

/**
 * Clase Sort que implementa el patron strategy
 */
export class Sort
{
    /**
     * Constructor
     * @param data Array de numero a ordenar 
     * @param strategy Estrategia
     */
    constructor(private data: number[], private strategy: Strategy) {}

    /**
     * setStrategy
     * Establece una nueva estrategia
     * @param strategy Nueva estrategia
     */
    setStrategy(strategy: Strategy) 
    {
        this.strategy = strategy;
    }

    /**
     * setData
     * Establece un nuevo array de numeros
     * @param data Nuevo array
     */
    setData(data: number[])
    {
        this.data = data;
    }

    /**
     * logic
     * Oredan el array
     * @returns El array ordenado
     */
    logic(): number[]
    {
        return this.strategy.execute(this.data);
    }
}