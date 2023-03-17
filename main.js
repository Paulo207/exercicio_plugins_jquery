$(document).ready(function() {
    
    var masks = {
    telefone: '(00) 0000-0000',
    cpf: '000.000.000-00',
    cep: '00000-000'
    };

    $('[data-mask]').each(function() {
    var maskName = $(this).data('mask');
    var mask = masks[maskName];
    if (mask) {
        $(this).mask(mask);
    }
    });

    $('form').submit(function(event) {
    var formValid = true;
    $('input[required]').each(function() {
        if (!$(this).val()) {
        formValid = false;
        $(this).addClass('error');
        } else {
        $(this).removeClass('error');
        }
    });

    if (!formValid) {
        event.preventDefault();
    }
    });

    
    $('input').on('input', function() {
    $(this).removeClass('error');
    });
});