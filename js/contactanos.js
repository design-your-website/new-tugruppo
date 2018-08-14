var messageDelay = 2000;  // Cuanto tiempo mostrara el mensajes de estado (emilisegundos)

// inicia el formulario una vez que el documento esté listo
$( init );


// Inicializa el formulario

function init() {

  // ocultar el formulario inicialmente.
  // Coloca el formulario de modo que se encuentre en el centro de la ventana del navegador.
  $('#contactForm').show().submit( submitForm ).addClass( 'positioned' );


// Cuando se hace clic en el boton "Enviar":
  // 1. Oculta el contenido
  // 2. Mostrar el formulario
  // 3. Mueve el foco al primer campo
  // 4. Evita que se siga el enlace

  $('a[href="#contactForm"]').click( function() {
    $('#contactForm').fadeTo( 'slow', .2 );
    $('#contactForm').fadeIn( 'slow', function() {
      $('#senderName').focus();
    } )

    return false;
  } );
  
}


// Se Envía el formulario a través de Ajax

function submitForm() {
  var contactForm = $(this);

  // ¿Están todos los campos rellenos?

  if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {

    // No; mostrar un mensaje de advertencia y regresar al formulario
    $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
    contactForm.fadeOut().delay(messageDelay).fadeIn();

  } else {

    // Sí; enviar el formulario al script PHP a través de Ajax

    $('#sendingMessage').fadeIn();
    contactForm.fadeOut();

    $.ajax( {
      url: contactForm.attr( 'action' ) + "?ajax=true",
      type: contactForm.attr( 'method' ),
      data: contactForm.serialize(),
      success: submitFinished
    } );
  }

  // Evite que se produzca el envío de formularios predeterminado
  return false;
}


// Maneja la respuesta de Ajax

function submitFinished( response ) {
  response = $.trim( response );
  $('#sendingMessage').fadeOut();

  if ( response == "success" ) {


// Formulario enviado con éxito:
    // 1. Mostrar el mensaje de éxito
    // 2. Borre los campos del formulario
    // 3. Ocultar el contenido de nuevo 

    $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
    $('#senderName').val( "" );
    $('#senderEmail').val( "" );
    $('#message').val( "" );

    $('#contactForm').delay(messageDelay+500).fadeIn();

  } else {


// Falló el envío del formulario: muestra el mensaje de error,
    // luego volver a mostrar el formulario
    $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
    $('#contactForm').delay(messageDelay+500).fadeIn();
  }
}