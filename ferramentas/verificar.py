"""Verifica integridade do site: BOM, referências locais e versão de cache.

Uso: python ferramentas/verificar.py
"""
import sys
from pathlib import Path

from versao import HTMLS, RAIZ, REFERENCIA, analisar

EXTENSOES_TEXTO = {'.html', '.css', '.js'}
BOM = b'\xef\xbb\xbf'


def checar_bom():
    problemas = []
    for caminho in sorted(RAIZ.rglob('*')):
        if not caminho.is_file() or caminho.suffix not in EXTENSOES_TEXTO:
            continue
        if '.git' in caminho.parts:
            continue
        with open(caminho, 'rb') as arquivo:
            if arquivo.read(3) == BOM:
                problemas.append(f'{caminho.relative_to(RAIZ)}: contém BOM')
    return problemas


def checar_referencias():
    problemas = []
    for relativo in HTMLS:
        html = RAIZ / relativo
        texto = html.read_text(encoding='utf-8')
        for match in REFERENCIA.finditer(texto):
            caminho = match.group('caminho')
            destino = (html.parent / caminho).resolve()
            if not destino.exists():
                problemas.append(f'{relativo}: {caminho} não existe')
            if match.group('versao') is None:
                problemas.append(f'{relativo}: {caminho} sem ?v=')
    return problemas


def checar_versoes():
    versoes = set()
    for relativo in HTMLS:
        for _, versao in analisar(RAIZ / relativo):
            if versao is not None:
                versoes.add(int(versao))
    if len(versoes) > 1:
        return [f'versões de cache diferentes: {sorted(versoes)}']
    return []


def principal():
    problemas = checar_bom() + checar_referencias() + checar_versoes()
    if problemas:
        print(f'{len(problemas)} problema(s) encontrado(s):')
        for problema in problemas:
            print(' - ' + problema)
        sys.exit(1)
    print('OK: sem BOM, referências existem e ?v= consistente')


if __name__ == '__main__':
    principal()
