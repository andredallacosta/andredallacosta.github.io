$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
  $('.slider').slider();
});

$(document).ready(function() {
  M.updateTextFields();
});

/* ANIMACAO
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
});*/

$("a.contato").click(function () {
  var elemento = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(elemento).offset().top
  }, 500);
});


document.getElementById('enviar').addEventListener('click', function() {
    if(document.getElementById('senhaREG').value === document.getElementById('senha2REG').value){
      var i = localStorage.getItem('i');
      const usuario = {
        nome: document.getElementById('nomeREG').value,
        email: document.getElementById('emailREG').value,
        login: document.getElementById('loginREG').value,
        senha: document.getElementById('senhaREG').value,
        telefone: document.getElementById('telefoneREG').value,
        cidade: document.getElementById('cidadeREG').value,
        esportes: {
          futebol: document.getElementById('futebol').checked,
          ciclismo: document.getElementById('ciclismo').checked,
          corrida: document.getElementById('corrida').checked,
          academia: document.getElementById('academia').checked
        }
      }
      if(i == null) {
        i = 0;
      }
      var controle = 'usuario' + i;
      localStorage.setItem(controle, JSON.stringify(usuario));
      i++;
      localStorage.setItem('i', i);
      alert('Cadastro feito com sucesso!');
      // window.location.href = "../html/login.html";
    } else {
      alert('Senhas não são iguais!');
    }
  });
  
  document.getElementById('login').addEventListener('click', function() {
    var i = localStorage.getItem('i');
    for(let j = 0; j < i; j++) {
      var controle = 'usuario' + j;
      var login = localStorage.getItem(controle);
      login = JSON.parse(login);
      if((login.login === document.getElementById('usuario').value) && (login.senha === document.getElementById('senha').value)) {
        localStorage.setItem('match', controle);
        window.location.href = "html/login.html";
      }
    }
  });
