class Autenticacion {
  autEmailPass (email, password) {
    //$('#avatar').attr('src', 'imagenes/usuario_auth.png')
    //Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
    //$('.modal').modal('close')
    firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
      if (result.user.emailVerified) {
        $('#avatar').attr('src', 'imagenes/usuario_auth.png')
        Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
      } else {
        firebase.auth().signOut()
        Materialize.toast(
          `Por favor realiza la verificación de la cuenta`,
          5000
        )
      }
    })

    $('.modal').modal('close')
  }


  crearCuentaEmailPass (email, password, nombres) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({
          displayName: nombres
        })

        const configuracion = {
          url: 'http://localhost:3000/'
        }

        result.user.sendEmailVerification(configuracion).catch(error => {
          console.error(error)
          Materialize.toast(error.message, 4000)
        })

        firebase.auth().signOut()

        Materialize.toast(
          `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
          4000
        )

        $('.modal').modal('close')
      })
      .catch(error => {
        console.error(error)
        Materialize.toast(error.message, 4000)
      });
  }
  
  resetPasswordByEmail (email) {
    if(email) {
      
      const configuracion = {
        url: 'http://localhost:3000/'
      }

      const user = firebase.auth();
      user.sendPasswordResetEmail(email, configuracion).then(result => {
        Materialize.toast(
          `Se ha enviado un correo a ${email}, para reestablecer tu contraseña`,
          4000
        )
        $(".modal").modal("close");
      }).catch(error => {
        console.error(error)
        Materialize.toast(error.message, 4000)
      });
    }else{
      Materialize.toast(`Por favor ingrese su correo`, 4000);
    }
  }

  authCuentaGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
      $('#avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(`Error al autenticarse ${error}`, 4000)  
    })
  }

  authCuentaFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result =>{
      $('#avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(`Error al autenticarse ${error}`, 4000)  
    })
  }

  authTwitter () {
    const provider = new firebase.auth.TwitterAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result =>{
      $('#avatar').attr('src', result.user.photoURL)
      $('.modal').modal('close')
      Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(`Error al autenticarse ${error}`, 4000)  
    })
  }
}
