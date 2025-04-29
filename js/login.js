const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) { //submit é quando aperta Enter ou clica em Entrar
        event.preventDefault();
        const masp=document.getElementById('masp').value; //pega o valor do campo Masp
        const senha=document.getElementById('senha').value; //pega o valor da senha
        const usuarioSalvo= JSON.parse(localStorage.getItem('usuario')); //ler o usuário no localStorage
        console.log(usuarioSalvo);
        if (!usuarioSalvo || usuarioSalvo.masp !== masp || usuarioSalvo.senha !== senha) {
            if (!usuarioSalvo) {
              alert('Usuário não encontrado. Redirecionando para o cadastro...');
              window.location.href = 'cadastro.html';
            } else {
              alert('Senha incorreta!');
            }
            return;
          }
          sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioSalvo));
          window.location.href = 'dashboard.html'; //página onde as tias da cozinha fazem o CRUD(Create,Read,Update,Delete) das refeições 
        });
    }
