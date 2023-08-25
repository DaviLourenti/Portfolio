(function () {
    // Configuração do EmailJS
    emailjs.init("sOevMT9dyE2OgPO3hwYy_"); // Substitua "SEU_USER_ID" pelo User ID do seu usuário do EmailJS

    // Manipulador do evento de envio do formulário
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio tradicional do formulário

        // Parâmetros do e-mail a ser enviado
        var params = {
            service_id: 'service_uuz7aqo', // Substitua "SEU_SERVICE_ID" pelo Service ID do seu serviço do EmailJS
            template_id: 'template_t79umya', // Substitua "SEU_TEMPLATE_ID" pelo Template ID do seu modelo de e-mail do EmailJS
            user_id: 'sOevMT9dyE2OgPO3hwYy_', // Substitua "SEU_USER_ID" pelo User ID do seu usuário do EmailJS
            template_params: {
                'name': document.getElementById('nome').value,
                'email': document.getElementById('email').value,
                'message': document.getElementById('mensagem').value
            }
        };

        // Envio do e-mail
        emailjs.send(params.service_id, params.template_id, params.template_params)
            .then(function () {
                alert('E-mail enviado com sucesso!');
            }, function (error) {
                alert('Ocorreu um erro ao enviar o e-mail: ' + error);
            });
    });
})();