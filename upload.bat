@echo off
echo Uploading files to GitHub...

cd %~dp0

echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Configuring Git...
git config --global user.email "elyasjrh@gmail.com"
git config --global user.name "elyasjrh"

echo Creating initial commit...
git commit -m "Initial commit"

echo Setting up remote...
git branch -M main
git remote add origin https://github.com/elyasjrh/discord-music-bot.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause 