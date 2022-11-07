let grupo_radio = 21
let comandos_validos = ["izquierda", "derecha", "adelante", "atrás"]
// comandos en "texto claro"
function encriptar(comando: string): string {
    let resultado = ""
    for (let letra of comando) {
        resultado += letra
    }
    // [indice]
    return resultado
}

// return None
function enviar_por_radio(comando: string) {
    comando = "" + comando
    let comando_encriptado = encriptar(comando)
    radio.sendString(comando_encriptado)
    basic.clearScreen()
}

// return None
// return None
radio.onReceivedString(function on_received_string(comando: string) {
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
