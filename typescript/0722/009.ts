// type의 문제와 Partial로 해결
// 이 코드의 문제를 살펴보죠.
// 모든 게시물에 author가 있는데 이 author를 모든 게시물에 있을 필요가 있을까요?
// 없습니다. 통신할 때에도 이런 정보들은 쓸모있는 데이터 전송은 아닙니다.
// 백엔드에서 author id 받아 처리하면 되거든요.
// 이 문제를 해결하기 위한 방법은 10번 파일에 만들겠습니다.
type Author = {
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}
 
type Notice = {
    title: string;
    content: string;
    author: Author;
}
 
const notice: Notice = {
    title: '공지사항',
    content: '내용',
    author: {
        name: '홍길동',
        age: 30,
        password: '1234',
        birth: '1990-01-01',
        phone: '010-1234-5678',
        email: 'licat@gamil.com'
    }
}
 
console.log(notice);