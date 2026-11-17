@echo off
echo ========================================================
echo   Deploying Buah Pikiran Wireframe to GitHub Pages
echo   Target Repo: https://github.com/doni-wahyudi/buah_pikiran
echo ========================================================

cd /d "%~dp0"

echo [1/5] Initializing Git repository...
git init

echo [2/5] Setting default branch to main...
git branch -M main

echo [3/5] Configuring remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/doni-wahyudi/buah_pikiran.git

echo [4/5] Staging and committing files...
git add .
git commit -m "feat: complete interactive wireframe website for Buah Pikiran"

echo [5/5] Pushing to GitHub (main branch)...
git push -u origin main

echo.
echo ========================================================
echo   Push complete!
echo   GitHub Actions will automatically build and deploy.
echo   Once done, your site will be live at:
echo   https://doni-wahyudi.github.io/buah_pikiran/
echo ========================================================
pause
