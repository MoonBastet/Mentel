var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesidey s.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")




if (opcion == 1) {primeraOpcion= prompt("Seleccione una opción \n 1. Ver Boleta \n 2. Pagar Cuenta")
    if (primeraOpcion == 1){alert("Haga click aquí apra descargar su boleta.")}
    else {alert("Usted está siendo transferido, espere por favor...")}
}
else if (opcion == 2) {segundaOpcion= prompt("Seleccione una opción \n 1. Problemas con la señal \n 2. Problemas con las llamadas")
    if (segundaOpcion == 1 || segundaOpcion == 2) {prompt("A continuación escriba su solicitud")
        alert("Estimado usuario, su solicitud: 'Tengo problemas con la señal en Avenida Siempre Viva' ha sido ingresada con éxito. Pronto será contactado por uno de nuestro ejecutivos.")
    }
}
else if (opcion == 3){terceraOpcion= prompt("¡Mentel tiene una oferta especial acorde a tus necesidades! \n Para conocer más información y ser asesorado personalmente por un ejecutivo escribr 'SI' y y un ejecutivo te llamará. De lo contrario ingrese 'NO'")
    if (terceraOpcion == "SI" || terceraOpcion == "Si" || terceraOpcion == "si") {alert("Un ejecutivo se contactará con usted.")}
    else {alert("Gracias por preferir nuestros servicios.")}
}
else if (opcion == 4){cuartaOpcion= prompt("A continuación escriba su consulta:")
    alert("Estimado usuario, su consulta: 'Quisiera saber por qué no ha llegado mi producto código 1234' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
}
else {alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.")} 