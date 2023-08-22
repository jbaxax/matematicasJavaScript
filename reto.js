function moda(lista){
    const contador = {};

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i]; 
        if(contador[element]){
            contador[element]+=1;
        }else{
            contador[element]=1;
        }       
    }
    const newArray = Object.entries(contador);
    const listaOrdenada = newArray.sort((a,b)=>a[1]-b[1]);
    const ultimoElemento = listaOrdenada[listaOrdenada.length-1];
    const mod = ultimoElemento[0];
    return mod;
}


const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

function promedioPonderado(){
    const multipliacionNC = notes.map((n)=>n.note*n.credit);
 
    const sumaArriba = multipliacionNC.reduce((a,b)=>a+b);
    
    const credits = notes.map((n)=>n.credit)
    
    const sumaCredits = credits.reduce((a,b)=>a+b);
    
    console.log(sumaArriba);
    console.log(sumaCredits);
    
    const promedio = Math.floor(sumaArriba/sumaCredits); 
    
    return promedio;
}

const matematica = [
    {
        name: 'PC1',
        pc: 15,
        peso: 0.15
    },
    {
        name: 'PC2',
        pc: 11,
        peso: 0.25
    },
    {
        name: 'PC3',
        pc: 12,
        peso: 0.30
    },
    {
        name: 'EF',
        pc: 11,
        peso: 0.30
    }
]

const notasConPeso = matematica.map((n)=>n.pc*n.peso);
const sumaDeNotasConPeso = Math.round(notasConPeso.reduce((a,b)=>a+b));
console.log(sumaDeNotasConPeso);


