[string] $current_location_name = Split-Path -Path (Get-Location) -Leaf
git branch -a
Write-Host - - - Start pull.ps1 terminal - - -
# [1] initialize to this folder.
Write-Host [1] 초기화.
git init
#[2] Enumerate All project Branches.
Write-Host [2] 모든 브랜치들을 나열합니다.
git branch -a
#[3] Remote to Project.
Write-Host [3] 깃-허브 프로젝트를 로컬로 리모트 합니다.
git remote add origin https://github.com/github01main/$current_location_name.git
#[4] Enter the pulling branch name.
Write-Host [4] pull할 branch의 이름을 입력해주세요.
$pull_branch_name = Read-Host "Enter pull branch name :"
git pull origin $pull_branch_name
#[5] All Resources Pulled on Local Storage.
Write-Host [5] 모든 resorce들이 local상에 pull 되었습니다.
Write-Host - - - Ended Pull.ps1 terminal - - -