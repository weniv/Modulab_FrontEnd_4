# 단축키

```
- 사이드 바 밀어넣기
    - Windows: Ctrl + B
    - Mac: ⌘ + B
- 터미널 열기
    - Windows: Ctrl + `
    - Mac: Ctrl + `
- 동시 편집
    - Ctrl + Alt + ↑ / ↓
    - Mac: ⌘ + ⌥ + ↑ / ↓
- 문장의 처음
    - Windows: Home
    - Mac: ⌘ + ←
- 문장의 끝
    - Windows: End
    - Mac: ⌘ + →
- 문장의 순서 바꾸기
    - Alt + ↑ / ↓
    - Mac: ⌥ + ↑ / ↓
- 줄 삭제
    - Ctrl + D
    - Mac: ⌘ + D
- 줄 복사(드래그 할 필요 없어요.)
    - Ctrl + C
    - Mac: ⌘ + C
- 주석(언어를 가리지 않고 주석을 넣어줍니다.)
    - Ctrl + /
    - Mac: ⌘ + /
- 들여쓰기 / 내어쓰기
    - Tab / Shift + Tab, Ctrl + [ / Ctrl + ]
    - Mac: Tab / Shift + Tab
- 파일 생성
    - Ctrl + N
    - Mac: ⌘ + N
- 파일 저장
    - Ctrl + S
    - Mac: ⌘ + S
```

# 스니펫 설정

- 설정(톱니바퀴) > snippets > html.json

- 프롬프트
```
나는 프론트엔드 개발자인데 VSC prefix를 아래와 같이 세팅을 해놓았어. 앞으로 리엑트를 자주 만질 것 같은데 prefix를 더 고도화 해줘.
```

```
{
	"Print to console": {
		"prefix": "htmlko",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"ko\">",
			"<head>",
			"    <meta charset=\"UTF-8\">",
			"    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
			"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
			"    <title>$1</title>",
			"</head>",
			"<body>",
			"	$2",
			"</body>",
			"</html>"
		],
		"description": "한국어 페이지용 html 템플릿"
	}
}
```

# 익스텐션

- VSC는 처음에 설치하면 깡통입니다. 비어있는 상태입니다. 심지어 인쇄도 안됩니다.
- 그래서 익스텐션을 설치해야 합니다. 익스텐션은 VSC의 기능을 확장해주는 도구입니다.
- 수업에서 활용하는 익스텐션
    - live server: html을 작성하고 저장하면 자동으로 새로고침 해주는 익스텐션입니다.
    - Prettier: 코드 포맷팅을 해주는 익스텐션입니다. 코드를 예쁘게 정리해줍니다.
    - htmltagwrap : html 태그를 쉽게 감싸주는 익스텐션입니다.
    - Auto Rename Tag: html 태그를 쉽게 수정할 수 있게 해주는 익스텐션입니다.
    - indent-rainbow: 들여쓰기를 색깔로 구분해주는 익스텐션입니다.
