function calculo(monto, cuotas) {
    let intereses;
    if (cuotas == 3) {
      intereses = monto * 0.20;
      return intereses;
    } else if (cuotas == 6) {
      intereses = monto * 0.30;
      return intereses;
    } else if (cuotas == 12) {
      intereses = monto * 0.45;
      return intereses;
    } else if (cuotas == 18) {
      intereses = monto * 0.50;
      return intereses;
    } else {
      console.log("Cuota incorrecta, por favor, selecciona una cuota correcta");
      return 0;
    }
  }
  
  alert("\nHola! por favor, simula tu prestamo😎");
  
  let monto = parseInt(
    prompt("Ingresa el monto que quieres solicitar\n\n *recuerda que lo minimo a solicitar es de 10,000$")
  );
  
  while (monto < 10000) {
    alert("El monto " + monto + "$ es menor al permitido");
    monto = parseInt(prompt("Ingresa un nuevo monto"));
  }
  
  let cuotas = parseInt(prompt("Ahora selecciona el numero de cuotas 3-6-12-18"));
  
  console.log("Solicitaste:", monto, "$");
  console.log("En:", cuotas, "cuotas");
  console.log("El intereses que vas a pagar es de:", calculo(monto, cuotas));
  console.log("El monto total a pagar es:", calculo(monto, cuotas) + parseInt(monto));
  