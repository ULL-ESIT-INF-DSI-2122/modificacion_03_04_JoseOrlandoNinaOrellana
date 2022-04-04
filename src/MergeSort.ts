import { Strategy } from './Strategy'

/**
 * Clase MergeSort que implementa la interfaz Strategy
 */
export class MergeSort implements Strategy
{
    /**
     * execute
     * @param data Array a ordenar
     * @returns Array ordenado
     */
    execute(data: number[]): number[] 
    {
        this.mergeSort(data, 0, data.length - 1);
        return data;
    }

    /**
     * mergeSort
     * @param data Array a ordenar
     * @param l Limite izquierda
     * @param r Limite derecha
     */
    mergeSort(data: number[], l: number, r: number)
    {
        if(l >= r )
            return

        let m: number = l + Math.floor((r-l)/2);
        this.mergeSort(data, l ,m);
        this.mergeSort(data, m+1 , r);
        this.merge(data, l, m, r);
    }

    /**
     * merge
     * Ordena un subarray
     * @param data Array a ordenar
     * @param l Limite izquierda
     * @param m Medio
     * @param r Limiete derecha
     */
    merge(data: number[], l: number, m: number, r: number)
    {
        let n1: number = m - l + 1;
        let n2: number = r - m;
  
        let L: number[] = []; 
        let R: number[] = [];
  
        for(let i: number = 0; i < n1; i++)
            L.push(data[l + i]);
        for(let j: number = 0; j < n2; j++)
            R.push(data[m + 1 + j]);
  
  
        let i: number = 0;
        let j: number = 0;
        let k: number = l;
  
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                data[k] = L[i];
                i++;
            }
            else {
                data[k] = R[j];
                j++;
            }
            k++;
        }
  
        while (i < n1) {
            data[k] = L[i];
            i++;
            k++;
        }
  
        while (j < n2) {
            data[k] = R[j];
            j++;
            k++;
        }
    }
}