let login = document.getElementById('login');
let senha = document.getElementById('senha');


document.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        const btn = document.querySelector("#verificar");
        btn.click(); 
    }
});

function mostrarBotao(){
    document.getElementById('escondido').style.display = 'block';
}


function validarLogin(){

    if(login.value == 'Elton' || login.value == 'Kelly' || login.value == 'Isabela'|| login.value == 'Alessandra'|| login.value == 'virtual.experti$e' || login.value == 'shopping.experti$e'){
            login = true;
    } 
    if(login == true){
        mostrarBotao();
    }else{
        alert("Login Inválido!!");
    }
    
}




