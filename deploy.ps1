# PowerShell deployment script for Buah Pikiran
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Deploying Buah Pikiran Wireframe to GitHub Pages" -ForegroundColor Yellow
Write-Host "  Target Repo: https://github.com/doni-wahyudi/buah_pikiran" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

$CurrentDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $CurrentDir

Write-Host "`n[1/5] Initializing Git repository..." -ForegroundColor Green
git init

Write-Host "[2/5] Setting default branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "[3/5] Configuring remote origin..." -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin https://github.com/doni-wahyudi/buah_pikiran.git

Write-Host "[4/5] Staging and committing files..." -ForegroundColor Green
git add .
git commit -m "feat: complete interactive wireframe website for Buah Pikiran"

Write-Host "[5/5] Pushing to GitHub (main branch)..." -ForegroundColor Green
git push -u origin main

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host "  Push complete!" -ForegroundColor Green
Write-Host "  GitHub Actions will now build and publish your site." -ForegroundColor Yellow
Write-Host "  Live URL: https://doni-wahyudi.github.io/buah_pikiran/" -ForegroundColor Magenta
Write-Host "========================================================" -ForegroundColor Cyan
