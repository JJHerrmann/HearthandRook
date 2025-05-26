@echo off
cd /d %~dp0
echo === Switching to project directory ===
echo.

git status
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git status failed.
    goto end
)

echo.
git add .
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git add failed.
    goto end
)
echo [OK] Staging complete.

set /p commitmsg="Enter commit message: "
git commit -m "%commitmsg%"
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git commit failed.
    goto end
)

git push origin v4
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git push failed.
    goto end
)

echo.
echo === Push complete. ===

:end
echo.
echo Press any key to exit.
pause >nul
