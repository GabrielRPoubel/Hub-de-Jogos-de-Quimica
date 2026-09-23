param(
    [Parameter(Mandatory = $true)][string]$Url,
    [string]$Saida = "$env:TEMP\opencode\captura.png",
    [int]$Largura = 1280,
    [int]$Altura = 900,
    [int]$Tentativas = 3
)

$ErrorActionPreference = 'Stop'

$candidatos = @(
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$edge = $candidatos | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if (-not $edge) {
    Write-Error 'Microsoft Edge não encontrado.'
    exit 1
}

$saidaAbsoluta = [System.IO.Path]::GetFullPath($Saida)
$pasta = Split-Path -Parent $saidaAbsoluta
if (-not (Test-Path -LiteralPath $pasta)) {
    New-Item -ItemType Directory -Path $pasta | Out-Null
}

for ($tentativa = 1; $tentativa -le $Tentativas; $tentativa++) {
    if (Test-Path -LiteralPath $saidaAbsoluta) {
        Remove-Item -LiteralPath $saidaAbsoluta -Force
    }

    $perfil = Join-Path $env:TEMP "edge-screenshot-$PID-$tentativa"
    $argumentos = @(
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        "--window-size=$Largura,$Altura",
        '--virtual-time-budget=9000',
        "--user-data-dir=$perfil",
        "--screenshot=$saidaAbsoluta",
        $Url
    )

    & $edge @argumentos | Out-Null

    if ((Test-Path -LiteralPath $saidaAbsoluta) -and (Get-Item -LiteralPath $saidaAbsoluta).Length -gt 0) {
        Remove-Item -LiteralPath $perfil -Recurse -Force -ErrorAction SilentlyContinue
        Write-Output $saidaAbsoluta
        exit 0
    }
}

Write-Error "Falha ao capturar após $Tentativas tentativas."
exit 1
