$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
  $('.slider').slider();
});

$(document).ready(function() {
  M.updateTextFields();
});

var topo = 0;
$('#historia').hide();
$(window).scroll(function(){
    topo = $(window).scrollTop();
    if(topo > 70){
        $('#historia').fadeIn(700);
        $('#container').fadeOut(0);
    }else{
        $('#historia').fadeOut(0);
        $('#container').fadeIn(700);
    }
});

$("a.contato").click(function () {
  var elemento = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(elemento).offset().top
  }, 500);
});


var config = {
  apiKey: "AIzaSyBBS4qUZeVe9XXMIGa_XfaXuKvwL3LYR88",
  authDomain: "playmatch-38946.firebaseapp.com",
  databaseURL: "https://playmatch-38946.firebaseio.com",
  projectId: "playmatch-38946",
  storageBucket: "playmatch-38946.appspot.com",
  messagingSenderId: "426257277290"
};
firebase.initializeApp(config);

let db = firebase.firestore();

document.getElementById('enviar').addEventListener('click', function() {
  if(document.getElementById('senhaREG').value === document.getElementById('senha2REG').value){
    db.collection('Login').add({
      Nome: document.getElementById('nomeREG').value,
      Email: document.getElementById('emailREG').value,
      Login: document.getElementById('loginREG').value,
      Senha: document.getElementById('senhaREG').value,
      Telefone: document.getElementById('telefoneREG').value,
      Cidade: document.getElementById('cidadeREG').value,
      Esportes: {
        Futebol: document.getElementById('futebol').checked,
        Ciclismo: document.getElementById('ciclismo').checked,
        Corrida: document.getElementById('corrida').checked,
        Academia: document.getElementById('academia').checked,
      }
    }).then(function(docRef) {
      alert('Cadastro feito com sucesso!');
      window.location.href = "../html/login.html";
      console.log(docRef);
    }).catch((error) => {
      console.log('Erro' + error);
    });
  } else {
    alert('Senhas não são iguais!');
  }
});

document.getElementById('login').addEventListener('click', function() {
  let usuario;
  let senha;
  let tentativa = 0;
  db.collection('Login').get().then((snapshot) => {
    snapshot.forEach((doc) => {
      usuario = doc.data().Login;
      senha = doc.data().Senha;
      if((usuario === document.getElementById('usuario').value) && (senha === document.getElementById('senha').value)) {
        tentativa++;
        window.location.href = "../html/login.html";
      }
    });
    if(tentativa === 0) {
      alert('Usuário não existente!');
    }
  });
});


