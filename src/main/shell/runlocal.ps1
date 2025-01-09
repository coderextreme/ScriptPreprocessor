
$searchTerm = "Script"
$nodeProgram = "node.exe"
$nodeScript = "..\node\WSPP.js"
$folder = "..\data"
$filePattern = "*.json"

# Find .json files containing the search term
$matchingFiles = Get-ChildItem -Path $folder -Recurse -Filter $filePattern |
    Select-String -Pattern $searchTerm -SimpleMatch |
    Select-Object -ExpandProperty Path -Unique

if ($matchingFiles.Count -gt 0) {
    # Create a temporary JSON file
    $tempFile = [System.IO.Path]::GetTempFileName()
    try {
        $matchingFiles | ConvertTo-Json -Depth 1 | Set-Content -Path $tempFile -Encoding UTF8

        # Run Node.js script with the temp file
        & $nodeProgram $nodeScript $tempFile
    } catch {
        Write-Error "Error running Node.js script: $_"
    } finally {
        # Clean up the temporary file
        Remove-Item -Path $tempFile -ErrorAction SilentlyContinue
    }
} else {
    Write-Host "No matching files found."
}
