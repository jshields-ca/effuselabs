@echo off
echo Starting Effuse Labs Development Server...
set PATH=C:\Users\jerem\AppData\Roaming\npm;C:\Program Files\nodejs;%PATH%
cd /d "%~dp0"
echo Node.js version:
node --version
echo npm version:
npm --version
echo.
echo Starting Next.js development server...
echo Open your browser to: http://localhost:3000
echo.
npm run dev
pause