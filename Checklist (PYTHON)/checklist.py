from time import sleep
lista = {}

def adicionar(msg = ''):
    cont = 0
    while True:
        adc = str(input(msg)).lower().strip()
        if adc == 'yes':
            cont += 1
            meta = str(input('Qual a meta? '))
            sleep(0.5)
            lista[cont] = meta
            print('Adicionado!')
            sleep(0.5)
        elif adc == 'no':
            sleep(0.5)
            break
        else:
            sleep(0.5)
            while adc != 'yes' or adc != 'no':
                sleep(0.5)
                adc = input('Comando inválido tente novamente. Você gostaria de adicionar alguma meta? (yes)/(no): ')
                sleep(0.5)
                if adc == 'yes':
                    cont += 1
                    lista[cont] = adc
                elif adc == 'no':
                    break

def ver_metas(comando = 0):
    comando = int(input(comando))
    if comando == 1:
        sleep(0.5)
        print(f'Aqui está sua lista: {lista}')

def deletar(delet = 0):
    delet = int(input(delet))
    sleep(0.5)
    if delet == 1:
        comandodel = int(input('Qual meta você gostaria de deletar? (Numero): '))
        sleep(0.5)
        if comandodel not in lista:
            print('Nenhum? certo tenha um bom dia!')
        else:
            lista.pop(comandodel)
            print(f'Sua lista atual: {lista}')

adicionar('Você gostaria de adicionar alguma meta? (yes)/(no): ')
ver_metas('Você gostaria de ver suas metas? (1)Sim (Qualquer valor)Não: ')
deletar('Você gostaria de deletar alguma meta? (1)Sim (Qualquer valor)Não: ')

    