console.log(salarios);

function encontrarPersona(personaEnBusqueda){
    return salarios.find((persona)=>persona.name == personaEnBusqueda);
}

function medianaPorPersona(nombrePersona){
    const listaMedianaYears= encontrarPersona(nombrePersona).trabajos;
    const salarios = listaMedianaYears.map((persona)=>persona.salario);
    const m = PlatziMath.mediana(salarios);
    return m;
}

function proyeccionPorPersona(nombrePersona){
    const listaMedianaYears= encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];
    
    for (let i = 1; i < listaMedianaYears.length; i++) {
        const salarioActual = listaMedianaYears[i].salario;
        const salarioPasado = listaMedianaYears[i-1].salario;
        const crecimiento = salarioActual-salarioPasado;
        const porcentajeCrecimiento =  crecimiento/salarioPasado;
       
        porcentajesCrecimiento.push(porcentajeCrecimiento) 
    }

   
    const medianaPorcentajesCrecimiento = PlatziMath.mediana(porcentajesCrecimiento)
    /* console.log(porcentajesCrecimiento,medianaPorcentajesCrecimiento); */
    const ultimoMediana = listaMedianaYears[listaMedianaYears.length-1].salario;
    const aumento =ultimoMediana*medianaPorcentajesCrecimiento;
    const nuevaMedia= ultimoMediana + aumento;
    return nuevaMedia;
}


function medianaEmpresaYear(nombre,year){
    if(!empresas[nombre]){
      console.warn("no existe")
    }else if(!empresas[nombre][year]){
      console.warn('no dio salarios en ese año')
    }else{
      return PlatziMath.mediana(empresas[nombre][year]);
    }
  }
  
  
  function proyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
      console.warn("no existe")
    }else{
      const empresaYears = Object.keys(empresas[nombre]); //lista de todo los años 
      const listaMedianaYears = empresaYears.map((year)=>{
        return medianaEmpresaYear(nombre,year);
      });
      let porcentajesCrecimiento = [];
    
      for (let i = 1; i < listaMedianaYears.length; i++) {
          const salarioActual = listaMedianaYears[i];
          const salarioPasado = listaMedianaYears[i-1];
          const crecimiento = salarioActual-salarioPasado;
          const porcentajeCrecimiento =  crecimiento/salarioPasado;
         
          porcentajesCrecimiento.push(porcentajeCrecimiento) 
      }
      const medianaPorcentajesCrecimiento = PlatziMath.mediana(porcentajesCrecimiento);
      


      const ultimoMediana = listaMedianaYears[listaMedianaYears.length-1];
      const aumento =ultimoMediana*medianaPorcentajesCrecimiento;
      const nuevaMediana= ultimoMediana + aumento;
      return nuevaMediana;
    }
  }

function medianaGeneral(){
  const listaMedianasPorPersonas = salarios.map((persona)=>medianaPorPersona(persona.name));

  const mediana = PlatziMath.mediana(listaMedianasPorPersonas);

  return mediana;
 
}

function medianaTop10(){
  const listaMedianasPorPersonas = salarios.map((persona)=>medianaPorPersona(persona.name));

  const listaMedianasPorPersonasOrdenada = PlatziMath.ordenar(listaMedianasPorPersonas);

  const cantidad = listaMedianasPorPersonasOrdenada.length/10;

  const limite = listaMedianasPorPersonasOrdenada.length-cantidad;

  const top10 = listaMedianasPorPersonasOrdenada.slice(limite,listaMedianasPorPersonasOrdenada.length)

  const medianaTop10 = PlatziMath.mediana(top10);

  return medianaTop10;
}