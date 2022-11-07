#
#   Este programa es parte del enunciado del Trabajo Final
#
#   Ver los "comentarios" que autodocumentan éste programa
#        (lo que viene después de cada "#")

#
# Sección de Variables Globales
#
grupo_radio=21
comandos_validos=["izquierda","derecha","adelante","atrás"] #comandos en "texto claro"

#
# Sección de funciones y procedimientos
#
def encriptar(comando:str):
    #
    # ésta función implementa la "encriptación" del autito
    # devuelve las primeras tres consonantes del <comando> de entrada
    #   ejemplo: si recibe "fruta" devuelve "frt"
    #
    #
    # COMPLETAR: por ahora devueve la misma cadena que recibe...
    #             o sea... "encripta??" nah...
    #            Es tu trabajo que ésta función cumpla el enunciado :)
    #
    resultado="" #comenzar con una variable tipo Cadena, vacía
    for letra in comando: #por cada letra en el parámetro de entrada<comando>
        resultado += letra #agregar la letra a la variable <resultado>
    return resultado #devolver el resultado

def procesar_recepcion(comando):
    basic.show_string(comando)
    #return None

def enviar_por_radio(comando):
    comando_encriptado = encriptar(comando) #llamamos a la funcion "encriptar"
    radio.send_string(comando_encriptado)
    basic.clear_screen() #borramos la pantalla para avisar del envío
    #return None

def interfaz_de_usuario_a():  #izquierda o atrás
    print("botonA")
    basic.show_arrow(ArrowNames.WEST)
    comando=comandos_validos[0]
    enviar_por_radio(comando)
    #return None

radio.on_received_string(procesar_recepcion)
input.on_button_pressed(Button.A, interfaz_de_usuario_a)
radio.set_group(grupo_radio)
