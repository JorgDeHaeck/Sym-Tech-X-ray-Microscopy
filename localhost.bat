@echo off
REM ============================================================
REM  Sym-Tech website - local preview of THIS folder only
REM  - always serves the folder this file is in
REM  - picks the first free port (8000, 8001, ...) so an old preview
REM    window of another version can never answer instead
REM  - folder and address are shown in the window title
REM  Tip: after changes press CTRL+F5 in the browser.
REM ============================================================
cd /d "%~dp0"
set PORT=
for %%P in (8000 8001 8002 8003 8004 8005 8006 8007 8008 8009) do (
  if not defined PORT (
    netstat -ano | findstr /R /C:":%%P .*LISTENING" >nul || set PORT=%%P
  )
)
if not defined PORT set PORT=8010
title Sym-Tech preview  %CD%  http://localhost:%PORT%
echo Serving %CD%
echo Open http://localhost:%PORT%/index.html   (close this window to stop)
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:%PORT%/index.html"
python -m http.server %PORT% --bind 127.0.0.1
