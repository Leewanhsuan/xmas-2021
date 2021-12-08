import { name } from 'file-loader';
import '../../style/main.css';

const cardList = [
    {
        id: 1,
        code: 1014,
        name: '我的人生夥伴',
        paragraph: '我是卡片內文',
        image: ['src/image/xiang1.jpg', 'src/image/xiang2.JPG'],
    },
    {
        id: 2,
        code: 730,
        name: '我的人生摯友',
        paragraph: '我最親愛的珊兒，聖誕快樂！',
        image: ['src/image/sunny1.jpg', 'src/image/sunny2.jpg'],
    },
    {
        id: 3,
        code: 1127,
        name: '親愛的映綺兒',
        paragraph: '我是珊兒的卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 4,
        code: 1201,
        name: '親愛的龔ちゃん',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 5,
        code: 217,
        name: '親愛的小萱萱',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 6,
        code: 129,
        name: '親愛的布萊兒',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 7,
        code: 612,
        name: '親愛的洪37',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 8,
        code: 428,
        name: '我的水豚許',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 9,
        code: 1219,
        name: '嗨，累累嗎？',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 10,
        code: 520,
        name: '親愛的凱歆',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 11,
        code: 1017,
        name: 'Dear Wei',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 12,
        code: 1104,
        name: '親愛的庭君',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 13,
        code: 908,
        name: '親愛的柔伊',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
    {
        id: 14,
        code: 924,
        name: '親愛的老朋友',
        paragraph: '我是卡片內文',
        image: ['src/image/tutu.png', 'src/image/xiang.png'],
    },
];

/**
 * 頁面載入處理事件
 */
window.addEventListener('load', () => {
    console.log(cardList[0].id);
    //抓取網址 id
    const getUrlString = location.href;
    const url = new URL(getUrlString);
    const urlId = url.searchParams.get('id');

    //抓取 Title Name
    const cardTitleElement = document.getElementById('cardTitle');
    cardTitleElement.innerHTML += `${cardList[urlId - 1].name}`;

    //抓取 input 輸入值
    const inputBoxElement = document.getElementById('inputBox');
    const codeButton = document.getElementById('codeButton');

    function submitBtn(value) {
        var inputStr = '';
        var submitValue = inputBoxElement.value;
        inputStr = submitValue;
        console.log(inputStr);
        alert('輸入密碼後請往下滑 😘');
        renderPhoto(inputStr);
    }

    codeButton.addEventListener('click', submitBtn);

    //渲染照片與卡片內容
    const renderPhoto = inputStr => {
        const photoElement = document.getElementById('imageGroup');
        const image1Element = cardList.filter(item => item.code === parseInt(inputStr))[0].image[0];
        const image2Element = cardList.filter(item => item.code === parseInt(inputStr))[0].image[1];

        photoElement.innerHTML += `<img class="image1" src="${image1Element}" alt="" />
        <img class="image2" src="${image2Element}" alt="" />`;

        const cardTextElement = document.getElementById('cardText');
        const cardTextParagraph = cardList.filter(item => item.code === parseInt(inputStr))[0].paragraph;

        cardTextElement.innerHTML += `<div>${cardTextParagraph}</div>`;
    };

    //渲染卡片內容
});
