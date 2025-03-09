$token = Read-Host "Enter your GitHub token"
$repoUrl = "https://api.github.com/repos/elyasjrh/discord-music-bot/contents"
$headers = @{
    Authorization = "token $token"
    Accept = "application/vnd.github.v3+json"
}

function Upload-File {
    param($path, $content)
    $fileName = Split-Path $path -Leaf
    $body = @{
        message = "Add $fileName"
        content = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($content))
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "$repoUrl/$fileName" -Method Put -Headers $headers -Body $body
}

Get-ChildItem -Path . -Exclude "node_modules","upload.ps1" | ForEach-Object {
    if ($_.PSIsContainer) {
        # Handle directories
        Get-ChildItem -Path $_.FullName -Recurse -File | ForEach-Object {
            $content = Get-Content $_.FullName -Raw
            $relativePath = $_.FullName.Replace((Get-Location).Path + "\", "")
            Upload-File $relativePath $content
        }
    } else {
        # Handle files
        $content = Get-Content $_.FullName -Raw
        Upload-File $_.FullName $content
    }
} 