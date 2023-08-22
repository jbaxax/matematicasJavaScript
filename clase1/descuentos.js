const input1 = document.querySelector('#price');
const input2 = document.querySelector('#coupon');
const btnCalcular = document.querySelector('#calcular');
const result = document.querySelector('#result');

btnCalcular.addEventListener('click', calcularDescuento);


/* const cupon = {
    cupo1: 50,
    cupo2: 10,
    cupo3:2,
} */

const cupo = [];

cupo.push({
    name:'aea1',
    discount: 30,
});
cupo.push({
    name:'aea2',
    discount: 15,
});

function calcularDescuento() {
    const price = Number(input1.value);
    const coupon = input2.value;
    let discount;
   /* if (!price || !coupon) {
        return result.innerText = 'Llena el formulario'
    } */
    
   /*  if(coupon=='cupon1'){
        discount = 30;
    } else if(coupon=='cupon2'){
        discount = 25;
    }else{
        return result.innerText="no existe ese cupon"
    } */ 

    /* switch (coupon) {
        case "cupon1": discount = 30; break;
        case "cupon2": discount = 25; break;
        default: result.innerText="no existe ese cupon";
        return;
    } */
  /*   if(cupon[coupon]){
        discount =  cupon[coupon];
    }else{
        return result.innerText = "NO "
    } */

    /* function busca(elCupon){
       return elCupon.name == coupon; 
    } */


    /* const hola = cupo.find(busca); */
    const hola = cupo.find((elCupon)=>elCupon.name==coupon);

    if(hola){
        discount = hola.discount;
    }else{
        result.innerText = "NE ";
        return 
    }

    const monto = (price * (100 - discount)) / 100;

    result.innerText = "MONTO A PAGAR: " + monto;
}