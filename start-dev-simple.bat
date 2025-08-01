@echo off
title Effuse Labs Development Server
echo.
echo ==========================================
echo  Effuse Labs Development Server
echo ==========================================
echo.
set PATH=C:\Users\jerem\AppData\Roaming\npm;C:\Program Files\nodejs;%PATH%
cd /d "%~dp0"
echo Starting development server...
echo Your site will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
npm run dev