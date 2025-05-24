@echo off
cd /d %~dp0
echo Switching to project directory...
git status
echo.
git add .
echo Staging complete.

set /p commitmsg="Enter commit message: "
git commit -m "%commitmsg%"
git push origin main

echo Push complete. Press any key to exit.
pause >nul
