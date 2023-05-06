from random import choice

def substituir(letra, palavra, palavra_atual):
    posicoes = []
    posicao = palavra.find(letra)
    while posicao != -1:
        posicoes.append(posicao)
        posicao = palavra.find(letra, posicao + 1)
    for posicao in posicoes:
        palavra_atual[posicao] = letra
    return palavra_atual

def tentativa(letra, palavra, palavra_atual, erros):
    if letra in palavra:
        substituir(letra, palavra, palavra_atual)
    else:
        erros.append(letra)

#Dados
palavras = ['dinossauro', 'cachorro', 'morango', 'comida', 'quente']
erros = []
palavra = choice(palavras)
palavra_atual = ["_" for _ in range(len(palavra))]

#Jogo
while True:
    print(" ".join(palavra_atual))
    letra = input('Diga uma letra: ')
    tentativa(letra, palavra, palavra_atual, erros)
    if len(erros) > 5:
        print("Você perdeu!")
        break
    if "_" not in palavra_atual:
        print("Você ganhou!")
        break