
const PlatziMath = {}

PlatziMath.esPar= function esPar(array){
 return !(array.length % 2);
}
PlatziMath.esImpar= function esImpar(array){
 return array.length % 2;
}

PlatziMath.mediana= function mediana(listaDesordenada){
    array = PlatziMath.ordenar(listaDesordenada);
    const a = PlatziMath.esPar(array);
    
    if(a){
         const par1 = array[((array.length/2)-1)];
         const par2 = array[array.length/2];

         const nuevoArray=[];

         nuevoArray.push(par1);
         nuevoArray.push(par2);

        medi = PlatziMath.promedio(nuevoArray);
    }else{
        const m = Math.floor(array.length/2);     
        medi = array[m];           
    }
    
    return medi;
}

PlatziMath.moda= function moda(lista){
    const contador = {};

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        
        if(contador[element]){
            contador[element]+=1
        }else{
            contador[element]=1;
        }
        
    }
    const listaArray =  Object.entries(contador);
    //const listaOrdenada = ordenarListBidimensional(listaArray,1);
    const listaOrdenada = listaArray.sort((a,b)=>a[1]-b[1]);   
    const ultimo = listaOrdenada[listaOrdenada.length-1]
    //console.log({contador,listaArray,listaOrdenada});
    const moda = ultimo[0];
    return moda;
}

PlatziMath.ordenarListBidimensional= function ordenarListBidimensional(listaDesordenada,i){
    
    const lista = listaDesordenada.sort((a,b)=>a[i]-b[i]);
    return lista;

}
PlatziMath.promedio= function promedio(array){
    /* let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma+= array[i];        
    } */
   const suma = array.reduce( (acumulado,valor) =>acumulado + valor)
   const  p = suma/array.length;
   return p;
}

PlatziMath.ordenar= function ordenar(listaDesordenada){
    const d = listaDesordenada.sort((a,b)=>a-b);
    return d;
}

