const express = require('express');
const path = require('path');
const router = express.Router();

// show index page
router.get('/', (req, res) => {
    // 응답으로 지정한 파일의 내용을 전송함
    // res.sendFile(path.join(__dirname, '../public', 'index.html'));
    // handlebars 뷰 엔진으로 응답처리
    res.render('index', {title: 'index'});
});

router.get('/sungjuk', (req, res) => {
    res.render('sungjuk', {title: '성적처리'});
});

router.post('/sungjuk', (req, res, next) => {
    // 폼으로 전송된 데이터들은 req.body, req.body.폼이름 등으로 확인 가능
    //console.log(req.body);
    //console.log(req.body.name, req.body.kor, req.body.eng, req.body.mat);

    let { name, kor, eng, mat } = req.body;
    console.log(name, kor, eng, mat);

    // 성적처리
    let [tot, avg , grd] = [kor+eng+mat, (kor+eng+mat)/3, '가'];
    console.log(tot, avg , grd);

    // 데이터베이스 처리 - sungjuk 테이블에 insert


    res.redirect(304, '/');
});

// 단순한 그림파일을 화면에 표시하기 위해
// 일일이 라우팅 설정하는 것은 번거로움
// router.get('/smile.png', (req, res) => {
//     // 응답으로 지정한 파일의 내용을 전송함
//     res.sendFile(path.join(__dirname, '../static/img', 'smile.png'));
// });

module.exports = router;
