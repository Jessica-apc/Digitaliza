document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
    

    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', function() {
        alert('Bem-vindo ao Digitaliza!');
    });
});
