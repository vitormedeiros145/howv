
// Função para lidar com o envio do formulário de agendamento de sessão fotográfica
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    
    const formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    alert('Solicitação de agendamento enviada com sucesso!');
});

// Chamar a função para exibir as fotos na galeria quando a página carregar
window.onload = displayPhotos;