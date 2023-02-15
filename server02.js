const http = require('http');
const port = process.env.PORT || 3000;

// localhost:3000 요청시, 요청 path별 처리 세분화 - routing
// 요청 path : /
// 요청 path : /user
// 요청 path : /about
// 그외 나머지 : 404 - 페이지 없음
const html = 'text/html; charset=utf-8';
const server = http.createServer((req, res) => {

    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': html});
            res.end('<h1>index 페이지 입니다!</h1>');
            break;
        case '/user':
            res.writeHead(200, {'Content-Type': html});
            res.end('<h1>user 페이지 입니다!</h1>');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': html});
            res.end('<h1>about 페이지 입니다!</h1>');
            break;
        default:
            res.writeHead(404, {'Content-Type': html});
            res.end('<h1>페이지가 존재하지 않아요!!</h1>');
    }
});

server.listen(port, () => {
    console.log('서버 실행중... 중지하려면 ctrl+c를 눌러요!');
});
