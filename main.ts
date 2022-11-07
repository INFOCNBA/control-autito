// 
//    Este programa es parte del enunciado del Trabajo Final
// 
//    Ver los "comentarios" que autodocumentan éste programa
//         (lo que viene después de cada "#")
// 
//  Sección de Variables Globales
// 
let grupo_radio = 21
let comandos_validos = ["izquierda", "derecha", "adelante", "atrás"]
// comandos en "texto claro"
// 
//  Sección de funciones y procedimientos
// 
function encriptar(comando: string): string {
    // 
    //  ésta función implementa la "encriptación" del autito
    //  devuelve las primeras tres consonantes del <comando> de entrada
    //    ejemplo: si recibe "fruta" devuelve "frt"
    // 
    // 
    //  COMPLETAR: por ahora devueve la misma cadena que recibe...
    //              o sea... "encripta??" nah...
    //             Es tu trabajo que ésta función cumpla el enunciado :)
    // 
    let resultado = ""
    // comenzar con una variable tipo Cadena, vacía
    for (let letra of comando) {
        // por cada letra en el parámetro de entrada<comando>
        resultado += letra
    }
    // agregar la letra a la variable <resultado>
    return resultado
}

// devolver el resultado
// return None
function enviar_por_radio(comando: string) {
    let comando_encriptado = encriptar(comando)
    // llamamos a la funcion "encriptar"
    radio.sendString(comando_encriptado)
    basic.clearScreen()
}

// borramos la pantalla para avisar del envío
// return None
// return None
radio.onReceivedString(function procesar_recepcion(comando: string) {
    basic.showString(comando)
})
input.onButtonPressed(Button.A, function interfaz_de_usuario_a() {
    // izquierda o atrás
    console.log("botonA")
    basic.showArrow(ArrowNames.West)
    let comando = comandos_validos[0]
    enviar_por_radio(comando)
})
radio.setGroup(grupo_radio)
