$(() => {    

    const objAuth = new Autenticacion()
    //$("#authFB").click(() => );

    $("#btnRegistroEmail").click(() => {
        const nombres = $('#nombreContactoReg').val();
        const email = $('#emailContactoReg').val();
        const password = $('#passwordReg').val();
        // Crear cuenta con email
        const auth = new Autenticacion()
        auth.crearCuentaEmailPass(email, password, nombres)
    });

    $("#btnInicioEmail").click(() => {
        const email = $('#emailSesion').val();
        const password = $('#passwordSesion').val();
        const auth = new Autenticacion()
        auth.autEmailPass(email, password)
        // TODO : LLamar auth cuenta con email
    });

    $("#btnRecuperarContrasenia").click(() => {
        const email = $("#emailRecuperacion").val();
        objAuth.resetPasswordByEmail(email);
      });

    //Autenticarse con Google
    $("#authGoogle").click(() => objAuth.authCuentaGoogle());

    //Autenticarse con facebook
    $("#authGoogle").click(() => objAuth.authCuentaFacebook());

    //Autenticarse con Twitter
    $("#authTwitter").click(() => objAuth.authTwitter());

    $('#btnRegistrarse').click(() => {
        $('#modalSesion').modal('close');
        $('#modalRegistro').modal('open');
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

    $('#btnIniciarSesion').click(() => {
        $('#modalRegistro').modal('close');
        $('#modalSesion').modal('open');
    });

});