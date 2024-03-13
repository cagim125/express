const express = require('express');
const template = require('./lib/template');
const customerRoute = require('./routes/customer');
const productRoute = require('./routes/product');
const fs = require('fs');
const path = require('path');
const { url } = require('inspector');
const app = express();
const port = 3001;

app.use('/static', express.static('public'));
app.use('/test', express.static('test'));

const dataFilePath = path.join(__dirname, 'data.json');

function getCardsFromStorage() {
    try{
        // 파일에서 데이터 읽기
        const data = JSON.parse(fs.readFileSync(dataFilePath));
        return data;
    } catch (error) {
        console.log('데이터 파일을 읽을 수 없습니다.');
        return [];
    }
}

app.get('/', (req, res) => {   
    const cards = getCardsFromStorage();
    
    let html = '';
    // console.log(cards[0].userName);
    
    for (let i = 0; i < cards.length; i++) {
        // 현재 카드 HTML 생성
        var card = template.card(cards[i].image, cards[i].userName, cards[i].linkName);
        // 현재 카드를 html에 추가
        html += card;
    }
    // 전체 HTML 생성 및 템플릿에 삽입
    const fullhtml = template.html(html);

    res.send(fullhtml);
});

function addCardToStorage(userData) {
    let data = [];
    try {
        data = JSON.parse(fs.readFileSync(dataFilePath));
    } catch (error) {
        console.log('데이터 파일을 읽을 수 없습니다.');
    }

    data.push(userData);
    fs.writeFileSync(dataFilePath, JSON.stringify(data));
}

app.get('/color', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'color.html')
    res.sendFile(filePath);
})

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 7) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
}


app.get('/lotto', (req, res) => {
    const lottoNumbers = generateLottoNumbers();
    const html = template.lotto(lottoNumbers);

    res.send(html);
})

app.get('/create', (req, res) => {
    const userName = req.query.name;
    const linkName = req.query.link;
    const randomInt = Math.floor(Math.random() * 10 + 1);
    const image = `/static/img/img_avatar${randomInt}.jpg`;
    const userData = { userName, linkName, image };

    addCardToStorage(userData);

    res.redirect(301, '/');
});

app.get('/stopwatch', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'stopwatch.html');
    res.sendFile(filePath);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use('/customer', customerRoute); // customer 라우트를 추가하고, 기본 경로로 /customer 사용
app.use('/product', productRoute); // product 라우트를 추가하고, 기본 경로로 /product 사용
