
window.onload = function () {
    
/*     let formulario = document.querySelector("#formulario");
    let inputs = document.querySelectorAll("#formulario input");
    
    let caracteres = {
        card: /^[0-9]{16, 20}+$/,
        cvc: /^[0-9]{3}$/,
        amount: /^[0-9]+$/,
        firstname: /^[a-zA-Z]+$/,
        lastname: /^[a-zA-Z]+$/,
        city: /^[a-zA-Z]+$/,
        postalcode: /^[0-9]{7}$/,
        textarea: /^[a-zA-Z0-9.!#-_]+$/
    }

    let validarFormulario = (evento) => {
        switch(evento.target.name){
            case "card":
                if (caracteres.card.test(evento.target.value)){

                }else
        }
    }
 */
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let form = evento.target
        let { card, cvc, amount, firstname, lastname, city, postalcode, textarea, state } = form

        let regexCard = /^[0-9]{13,16}$/
        let regexCvc = /^[0-9]{3}$/
        let regexAmount = /^[0-9]+$/
        let regexFirstname = /^[a-zA-Z]+$/
        let regexLastname = /^[a-zA-Z]+$/
        let regexCity = /^[a-zA-Z]+$/
        let regexPostalcode = /^[0-9]{7}$/
        let regexTextarea = /^[a-zA-Z0-9.!#-_]+$/
    


        if (regexCard.test(card.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("card").classList.add("alert-danger");
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#card").classList.remove("alert-danger"); 
            document.getElementById("card").classList.add("is-valid");      
        }
        if (regexCvc.test(cvc.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("cvc").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#cvc").classList.remove("alert-danger"); 
            document.getElementById("cvc").classList.add("is-valid");      
        }
        if (regexAmount.test(amount.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("amount").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#amount").classList.remove("alert-danger"); 
            document.getElementById("amount").classList.add("is-valid");      
        }
        if (regexFirstname.test(firstname.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("firstname").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#firstname").classList.remove("alert-danger"); 
            document.getElementById("firstname").classList.add("is-valid");      
        }
        if (regexLastname.test(lastname.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("lastname").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#lastname").classList.remove("alert-danger"); 
            document.getElementById("lastname").classList.add("is-valid");      
        }
        if (regexCity.test(city.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("city").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#city").classList.remove("alert-danger"); 
            document.getElementById("city").classList.add("is-valid");      
        }
        if (state.value == "") {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("state").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#state").classList.remove("alert-danger"); 
            document.getElementById("state").classList.add("is-valid");      
        }
        if (regexPostalcode.test(postalcode.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("postalcode").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#postalcode").classList.remove("alert-danger"); 
            document.getElementById("postalcode").classList.add("is-valid");      
        }
        if (regexTextarea.test(textarea.value) !== true) {
            document.querySelector("#alerta").classList.remove("d-none");
            document.getElementById("textarea").classList.add("alert-danger");
            
        }else {
            document.querySelector("#alerta").classList.add("d-none");
            document.querySelector("#textarea").classList.remove("alert-danger"); 
            document.getElementById("textarea").classList.add("is-valid");                  
        }

        
 
    });
}