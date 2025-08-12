function calculateLove () {
    const name1 = document.getElementById("name1").value 
    const name2 = document.getElementById("name2").value
    

    if (name1 && name2) {
   
    const regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!regexSoloLetras.test(name1)) {
        document.getElementById("result").style.color = 'red';
        document.getElementById("result").textContent = 'El primer nombre no debe contener números ni caracteres especiales';
        return;
    }
    if (!regexSoloLetras.test(name2)) {
        document.getElementById("result").style.color = 'red';
        document.getElementById("result").textContent = 'El segundo nombre no debe contener números ni caracteres especiales';
        return;
    }

    const hash = (name1 + name2).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const lovePorcentage = hash % 101;
    document.getElementById("result").style.color = 'green';
    document.getElementById("result").textContent = `Tienes un ${lovePorcentage}% de compatibilidad`;

} else {

    let mensaje = 'Por favor, ingresa ambos nombres. ';
    if (!name1) mensaje += 'El primer nombre está vacío. ';
    if (!name2) mensaje += 'El segundo nombre está vacío. ';


    const regexNumeros = /[0-9]/;
    if (name1 && regexNumeros.test(name1)) mensaje += 'El primer nombre no debe contener números. ';
    if (name2 && regexNumeros.test(name2)) mensaje += 'El segundo nombre no debe contener números. ';

    document.getElementById("result").style.color = 'red';
    document.getElementById("result").textContent = mensaje;
}

}