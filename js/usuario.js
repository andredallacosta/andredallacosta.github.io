let flag = localStorage.getItem('match');
let usuario = localStorage.getItem(flag);
usuario = JSON.parse(usuario);

let nome = document.getElementById('name');
nome.innerHTML = "Usuário: " + usuario.nome;

let email = document.getElementById('email');
email.innerHTML = "E-mail: " + usuario.email;

verificaeEsporte(usuario);

function verificaeEsporte(usuario) {
    let lista = [];
    let listaFinal = '';
    let i = 0;
    lista.push("Esportes escolhidos:");
    if(usuario.esportes.futebol){
        lista.push(' Futebol');
    }
    if(usuario.esportes.ciclismo){
        lista.push(' Ciclismo');
    }
    if(usuario.esportes.corrida){
        lista.push(' Corrida');
    }
    if(usuario.esportes.academia){
        lista.push(' Academia');
    }
    lista.forEach((currentItem) => {
        i++;
        if(listaFinal === ''){
            listaFinal = currentItem;
        }else if(i !== lista.length){
            listaFinal = listaFinal.concat(currentItem);
            listaFinal = listaFinal.concat(",");
        }else{
            listaFinal = listaFinal.concat(currentItem);
        }
    });
    let colocar = document.getElementById('esportes');
    colocar.innerHTML = listaFinal;
    console.log(listaFinal);
}
