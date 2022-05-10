[string] $current_location_name = Split-Path -Path (Get-Location) -Leaf
git branch -a
Write-Host - - - Start push.ps1 terminal - - -
#[1] Initialize to this folder.
Write-Host [1] 초기화.
git init
#[2] Add contents all.
Write-Host [2] 프로젝트 폴더내의 모든 파일을 추가합니다.
git add .
#[3] Remote project to PC.
Write-Host [3] 프로젝트 리모트.
git remote add origin https://github.com/github01main/$current_location_name.git
#[4] Commit Contents Input Area.
Write-Host [4] 커밋 내용을 입력하시오.
$commit_Contents = Read-Host "Enter what you want to commit "
#[5] Sending Commit Contents Information.
Write-Host [5] 커밋 합니다.
git commit -m $commit_Contents
#[6] push Contents to branch Input Area.
Write-Host [6] Push할 브랜치를 입력하주십시오.
$branch_location = Read-Host "Enter the pushing branch name "
#[7] Commit Content push Area.
Write-Host [7] 해당 브랜치에 Push합니다.
git push -u origin $branch_location
Write-Host $branch_location 공간에 리소스들을 Push 하였습니다. 
Write-Host [8] 리액트 앱 테스트 코드를 실행합니다.
npm test
$wshell = New-Object -ComObject wscript.shell;
$wshell.SendKeys('a')
Write-Host - - - Ended push.ps1 terminal - - -