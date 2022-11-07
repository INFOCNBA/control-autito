grupo_radio=21
comandos_validos=["izquierda","derecha","adelante","atrás"] #comandos en "texto claro"

def encriptar(comando:str):
    resultado=""
    for letra in comando:
        resultado+=letra#[indice]
    return resultado

def on_received_string(comando):
    basic.show_string(comando)
    #return None

def enviar_por_radio(comando):
    comando=str(comando)
    comando_encriptado = encriptar(comando)
    radio.send_string(comando_encriptado)
    basic.clear_screen()
    #return None

def interfaz_de_usuario_a():  #izquierda o atrás
    print("botonA")
    basic.show_arrow(ArrowNames.WEST)
    comando=comandos_validos[0]
    enviar_por_radio(comando)
    #return None

radio.on_received_string(on_received_string)
input.on_button_pressed(Button.A, interfaz_de_usuario_a)
radio.set_group(grupo_radio)
