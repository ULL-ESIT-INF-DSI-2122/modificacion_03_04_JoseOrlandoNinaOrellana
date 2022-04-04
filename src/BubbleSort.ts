import { Strategy } from './Strategy'

/**
 * Clase BubbleSort que implementa la interfaz Strategy
 */
export class BubbleSort implements Strategy 
{
    /**
     * execute
     * @param data Array a ordenar
     * @returns Array ordenado
     */
    execute(data: number[]): number[]
    {
        for(let i: number = 0; i < data.length; i++)
        {  
            for(let j: number = 0; j < ( data.length - i -1 ); j++)
            {
                if(data[j] > data[j+1])
                {
                    let temp = data[j]
                    data[j] = data[j + 1]
                    data[j+1] = temp
                }
            }
        }
        return data;
    }
}