console.group('Cuadrado');

function cuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

var resultado = cuadrado(2);
console.log('Resultado:', resultado);

console.groupEnd();


console.group('Triangulo');

function triangulo(lado1,lado2,base,altura) {
    return {
        perimetro: lado1+lado2+base,
        area:(altura*base)/2,
    };
}

var resultado = triangulo(2,4,8,10);
console.log('Resultado:', resultado);

console.groupEnd('Triangulo');


console.group('Circulo');

function circulo(r) {
    const d = r*2;
    return {
        circunferencia: d*Math.PI,
        area: (Math.pow(r,2))*Math.PI,
    };
}

var resultado = circulo(3);
console.log('Resultado:', resultado);

console.groupEnd('Circulo');


console.group('Triangulo2');

function triangulo2(lado,base) {
    return {
        h: Math.sqrt((Math.pow(lado,2))-((Math.pow(base,2))/4) ),
    };
}

var resultado = triangulo2(6,4);
console.log('Resultado:', resultado);

console.groupEnd('Triangulo2');


console.group('Triangulo Escaleno');

function trianguloEscaleno(a,b,c) {
    if(a==b||a==c||b==c){
        console.warn('Un triangulo Escaleno no puede terner lados iguales')
    }
    return {
        h: Math.sqrt((Math.pow(c,2))-Math.pow(((Math.pow(c,2))-(Math.pow(a,2))+(Math.pow(b,2)))/(2*b),2))
    };
}

var resultado = trianguloEscaleno(4,4,8);
console.log('Resultado:', resultado);

console.groupEnd('Triangulo2 Escaleno');

/* function trianguloEscaleno(a, b, c) {
    if (a === b || a === c || b === c) {
      console.warn('Un triángulo escaleno no puede tener lados iguales.');
      return null;
    }
  
    // Calcula el semiperímetro
    const s = (a + b + c) / 2;
  
    // Calcula el área del triángulo utilizando la fórmula de Herón
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    // Calcula la altura en función del área y el lado correspondiente
    const altura = (2 * area) / a;
  
    return {
      h: altura
    };
  }
  
  var resultado = trianguloEscaleno(4, 4, 8);
  console.log('Resultado:', resultado); */
  


  