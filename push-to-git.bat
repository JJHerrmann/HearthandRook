@echo off
cd /d %~dp0
echo ============================
echo 🔁 Switching to project directory...
echo ============================

git status
echo.
git add .
echo ✅ Staging complete.

set /p commitmsg="📝 Enter commit message: "
git commit -m "%commitmsg%"
git push origin v4

echo ✅ Push complete.

echo.
echo ============================
echo 🧹 Running quartz clean...
echo ============================
npx quartz clean

echo.
echo ============================
echo 🔨 Building site with quartz...
echo ============================
npx quartz build

echo.
echo ============================
echo 🧙 Done. Press any key to exit.
echo ============================
pause >nul
