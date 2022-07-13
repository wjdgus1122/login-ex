## 벡앤드가 없기때문에 유효성 검사만 가능한 로그인 폼

## Form태그 속성 정리

input 태그를 쓸때 어딘가로 정보를 보낼거면 반드시 form태그를 써야함

<form action="" method="POST">
    <input/>
</form>

action : input 내용을 담아 특정 페이지로 보낼때(php경로)
register : 각 input의 별칭을 정해줌, 유효성 검사(유효한지 아닌지, pw를 사용하면서 특수문자를 사용하는지 안하는지, 아이디 글자수)
