Push-Location -Path "src/main/shell"
& ./runlocal.ps1 2>&1 | Select-String '^OUTPUTTED' -CaseSensitive
& ./runexamples.ps1 2>&1 | Select-String '^OUTPUTTED' -CaseSensitive
& ./runlocal.ps1 2>&1 | Select-String '^ERROR' -CaseSensitive
& ./runexamples.ps1 2>&1 | Select-String '^ERROR' -CaseSensitive
Pop-Location
