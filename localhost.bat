@echo off
REM Start Python HTTP server in the folder where this .bat file is
start cmd /k "python -m http.server 8000"

REM Wait a moment and open browser
timeout /t 2 /nobreak >nul
start http://localhost:8000

pause

