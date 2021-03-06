# 리액트로 구현한 포트폴리오 사이트 제작 (개인 프로젝트).

## 사용 기술

### Javascript ES6+

테스트 코드르 작성을 위한 참조 리액트 자바스크립트 모질라 공식 문서 [REACT JS Documentation](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

### SASS

Nested css를 사용하고 코드의 재사용성과 클린 코드를 위한 SASS 공식 문서 [SASS Documentation](https://sass-lang.com/documentation)

### Powershell 7.2.2

태그 관리와 원격 저장소 접근성에 최적화된 쉘 스크립트 작성을 위한 파워쉘 공식 문서 [POWERSHELL Documentation](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2)

### YAML

깃-허브 액션으로 테스트-빌드-배포를 위한 git-yaml 공식 문서 [YAML Documentation](https://docs.github.com/en/actions/quickstart)

## 스케쥴 목적 달성 

- [ ] powershell을 이용한 CLI 에서 push 후 `tag` 의 자동 버전 생성(그레고리력 알고리즘을 활용). 2022 / 00 / 00
- [x] `Test library` 을 이용한 엄격한 휴먼에러 테스트. 2022 / 05 / 16
- [x] `styled-components` 로 기존 `scss` 와 `css` 파일들을 리팩토링 하였음. 2022 / 05 / 15
- [x] `components` 폴더 내 카테고리 세분화를 해제 후 종속성을 components에 재할당 하였음. 2022 / 05 / 15 
- [x] Git-hub `Action` 을 이용한 원격저장소 컨텐츠 변경 후 리액트 빌드 및 자동 배포 활성화. 2022 / 05 / 11 
- [x] `.gitignore` 을 이용한 멀티 플랫폼에서의 접근성 용이하도록 제외 추가하였음.  2022 / 05 / 11
- [x] semantic versioning을 이용한 `tag` 의 버전 관리 생성. https://semver.org/ 2022 / 05 / 11
- [x] `React` `Jest` 를 이용한 테스트 코드(CICD) 작성. 2022 / 05 / 10
- [x] `Google Domain` 의 DNS를 이용한 Git-hub `Pages` IP 전환 + Https 적용 후 보안 활성화. 2022 / 05 / 09

## 로컬 프로젝트 파일 분실 시 원격저장소에서 복구
```powershell 
npm install