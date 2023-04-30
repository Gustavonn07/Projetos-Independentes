#Gerador de Senhas
def gerador():
    from random import choice
    dados = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' \
            'abcdefghijklmnopqrstuvwxyz' \
            '0123456789' \
            ':;.>,<-_=+§[{ªº}]!@#$%¨&*()¹²³£¢¬/?°|'
    senha = []

    #Caso queira continuar
    #while True:
    for c in range(8):
        senha.append(choice(dados))
    return senha

print(f'A sua senha foi: \033[31m{"".join(gerador())}\033[31m')