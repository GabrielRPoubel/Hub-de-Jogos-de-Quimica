"""Gerencia a versão de cache (?v=N) das referências locais de CSS/JS nos HTMLs.

Uso:
    python ferramentas/versao.py            # incrementa a versão (máx atual + 1)
    python ferramentas/versao.py --para 5   # define uma versão específica
    python ferramentas/versao.py --checar   # apenas verifica a consistência
"""
import argparse
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent

HTMLS = [
    'index.html',
    'jogo1-equilibrio/index.html',
    'jogo2-ligacoes/index.html',
    'tabela-periodica/index.html',
]

REFERENCIA = re.compile(
    r'(?P<prefixo>(?:href|src)=")'
    r'(?P<caminho>(?:\.\./)?[^":]*?\.(?:css|js))'
    r'(?:\?v=(?P<versao>\d+))?'
    r'(?P<fim>")'
)


def ler(caminho):
    with open(caminho, 'r', encoding='utf-8', newline='') as arquivo:
        return arquivo.read()


def escrever(caminho, texto):
    with open(caminho, 'w', encoding='utf-8', newline='') as arquivo:
        arquivo.write(texto)


def analisar(caminho):
    return [(m.group('caminho'), m.group('versao')) for m in REFERENCIA.finditer(ler(caminho))]


def versoes_atuais():
    versoes = set()
    for relativo in HTMLS:
        for _, versao in analisar(RAIZ / relativo):
            if versao is not None:
                versoes.add(int(versao))
    return versoes


def aplicar(texto, versao):
    contador = 0

    def troca(match):
        nonlocal contador
        contador += 1
        return f"{match.group('prefixo')}{match.group('caminho')}?v={versao}{match.group('fim')}"

    return REFERENCIA.sub(troca, texto), contador


def comando_bump(nova_versao):
    for relativo in HTMLS:
        caminho = RAIZ / relativo
        texto, contador = aplicar(ler(caminho), nova_versao)
        escrever(caminho, texto)
        print(f'{relativo}: {contador} referência(s) -> ?v={nova_versao}')


def comando_checar():
    problemas = []
    for relativo in HTMLS:
        for caminho, versao in analisar(RAIZ / relativo):
            if versao is None:
                problemas.append(f'{relativo}: {caminho} sem ?v=')
    versoes = versoes_atuais()
    if len(versoes) > 1:
        problemas.append(f'versões diferentes encontradas: {sorted(versoes)}')
    if problemas:
        print('INCONSISTENTE')
        for problema in problemas:
            print(' - ' + problema)
        return 1
    versao = versoes.pop() if versoes else None
    print(f'OK: todas as referências locais usam ?v={versao}')
    return 0


def principal():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--para', type=int, help='define uma versão específica')
    parser.add_argument('--checar', action='store_true', help='apenas verifica a consistência')
    argumentos = parser.parse_args()

    if argumentos.checar:
        sys.exit(comando_checar())

    if argumentos.para is not None:
        comando_bump(argumentos.para)
        print(f'Versão definida para ?v={argumentos.para}')
        sys.exit(0)

    versoes = versoes_atuais()
    nova = (max(versoes) + 1) if versoes else 1
    comando_bump(nova)
    print(f'Versão incrementada para ?v={nova}')


if __name__ == '__main__':
    principal()
