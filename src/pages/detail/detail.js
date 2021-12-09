import { name } from 'file-loader';
import '../../style/main.css';

const cardList = [
    {
        id: 1,
        code: 1014,
        name: '我的人生夥伴',
        paragraph:
            '親愛的瑋祥，</br></br>做了一張網頁版的聖誕卡片，去年也做過只是當時做的零零落落記得嗎？選了兩張我喜歡的合照，一個是剛認識時熱戀中的我們哈哈哈、一個是最近的我們。</br></br>偶爾會想起熱戀時候的美好但也同時更加珍惜現在的我們，有你出現在我的人生中是我很幸運的事，我們能夠一起耍廢追劇一整天、一起泡咖啡廳一整天、一起熱血的環島和旅行，真的是不論颳風下雨的日子裡，都有你一直陪伴著我，這一年雖然遇到疫情但我們也一起做了好多好多事。</br></br>在寫這段話的今天還在跟 REACT 奮鬥而且一直被你罵哈哈哈，但我知道你是最希望我好的嚴師、也是最溫暖和溫柔的男朋友，我也希望能夠做你最值得依賴的肩膀。如同標題一樣，希望我們能成為彼此一輩子的好夥伴，未來的日子還請多多指教唷！愛你無法言語😉</br></br>By 你的小寶 聰明又可愛的婉瑄',
        image: ['src/image/xiang1.jpg', 'src/image/xiang2.JPG'],
    },
    {
        id: 2,
        code: 730,
        name: '我的人生摯友',
        paragraph:
            '親愛的珊兒，</br></br>我們的合照太多太多，於是選了很適合回顧聖誕節的合照！一邊翻照片一邊回顧了從大一起一起經歷的點點滴滴。對妳我真的是滿滿的感謝還有滿滿的愛，很謝謝有妳參與我人生的每一個時刻，不論悲歡。即使是出了社會，還是一樣能常常見面、聊天、旅遊，甚至一起討論一些財務、工作、人生的理想等等。對於工作、感情和生活不論妳做了什麼改變，相信回首這段茫然的過程也都會是珍貴的寶物。</br></br>在這個歲末季節想把最美好的祝福帶給妳，聖誕快樂以及新年快樂，希望我們的 2022 都能更加精彩、也更加喜歡自己和喜歡生活的各種樣貌。不論未來有什麼樣的挑戰，別忘了我會一直在妳左右，隨時當妳的樹洞！愛妳唷～我最最好的朋友😘😘😘</br></br>By 瑄兒',
        image: ['src/image/sunny1.jpg', 'src/image/sunny2.jpg'],
    },
    {
        id: 3,
        code: 1127,
        name: '親愛的映綺兒',
        paragraph:
            '親愛的映綺，</br></br>不知道為什麼時常會（在夜深人靜時XD）想起在台南時失戀的我，收到你送的數字油畫，那時候覺得好暖好暖，就像你一直以來帶給我的感覺一樣。很感謝生活中有妳，也很感謝畢製讓我們有機緣成為好朋友、好姐妹。出社會以後還有你時常陪伴，一起聊天、旅遊和分享生活，真的是我最幸運的事情。</br></br>想跟妳一起繼續分享生活中的美好，一起繼續努力的打理好自己的內在與外在，一起享受生活的每一個面貌。在這個美好的季節，想把最溫暖的祝福帶給妳，祝妳聖誕快樂和新年快樂！未來也請多多指教唷～Love you❤</br></br>By 婉瑄',
        image: ['src/image/amanda1.JPG', 'src/image/amanda2.JPG'],
    },
    {
        id: 4,
        code: 1201,
        name: '親愛的龔ちゃん',
        paragraph:
            '親愛的學珊，</br></br>總覺得又好像很久很久不見了，想念瘋瘋癲癲的妳，總能陪我一起大笑。不知道妳在日本的日子過得如何呢？忙碌但是充實嗎？希望妳的工作可以更順心，然後充滿成就感，然後一定要好好照顧自己唷！</br></br>在這個美好的季節，想把我最溫暖的祝福帶給妳。聖誕快樂和新年快樂～下次回台灣再一起去吃台灣料理，然後來場小旅行吧！等你～～Miss you❤</br></br>By 婉瑄',
        image: ['src/image/kong1.jpg', 'src/image/kong2.JPG'],
    },
    {
        id: 5,
        code: 217,
        name: '后里的人妻',
        paragraph:
            '親愛的VVN，</br></br>啊已經是阿咪的小萱萱兼任后里的人妻了，近期最感動的時刻莫過於那場溫馨的求婚，看到現在的妳如此幸福和快樂，我也無比的感動（淚腺發達）。變成人妻後不可以都只陪老公，還是要跟我們出來玩唷！希望有機會也能再一起到世界各地旅行，只是這次我們每晚都要有地方住啦哈哈哈哈哈哈</br></br>未來也想跟妳一起分享生活中的點點滴滴，在這個美好的季節，把我最溫暖的祝福帶給妳，願你人生的性福篇章快樂無比。聖誕快樂和新年快樂，未來也請多多指教唷～Love you❤</br></br>By 珊迪',
        image: ['src/image/vvn1.JPG', 'src/image/vvn2.jpg'],
    },
    {
        id: 6,
        code: 129,
        name: '親愛的布萊兒',
        paragraph:
            '親愛的布萊兒，</br></br>嗨～大概全場最聰明最不雷的人莫過於妳哈哈，雖然我們也開始放飛自我了XD 覺得出了社會後還能時常聯繫，聊東聊西然後一起旅行、相聚吃飯、聊工作有多累(雷)真好！謝謝有妳的陪伴，聽我說過許多疑難雜症哈哈哈</br></br>在這個美好的季節，想把我最溫暖的祝福帶給妳。聖誕快樂和新年快樂！也希望2022年妳工作的轉變一切順利、順心。未來也請多多讓我依靠啦～❤❤❤</br></br>By 珊迪',
        image: ['src/image/blaire1.JPG', 'src/image/blaire2.JPG'],
    },
    {
        id: 7,
        code: 612,
        name: '親愛的洪37',
        paragraph:
            '親愛的洪37，</br></br>我的大大前輩，最近用 REACT 整個很卡、挫折滿滿，常常想起妳說過的話，嗚嗚我們一起堅強。在我眼裡的妳總是像個傻大姐，但是待朋友真的很好很好。很喜歡我們像現在這樣，出了社會還能一起旅行、聊天、相聚。</br></br>在這個美好的季節，想把我最溫暖的祝福帶給妳。聖誕快樂和新年快樂！總是忙到不行的妳記得偶爾要放鬆一下，什麼都不做的那種，也要照顧好身體健康唷！未來也請多多讓指教啦不論是人生還是Coding～❤❤❤</br></br>By 珊迪',
        image: ['src/image/becky1.JPG', 'src/image/becky2.JPG'],
    },
    {
        id: 8,
        code: 428,
        name: '我的水豚許',
        paragraph:
            '親愛的許嘉儀！！</br></br>妳這麼戲劇化的人必須用很多驚嘆號！！哈哈哈哈！從沒想過我們會變成拿麼好的朋友（好吧？還是其實還好？）謝謝有妳一路相伴，世上最好揪的好朋友莫過於妳，超隨和而且真的可以說走就走，真的是旅行的最佳良伴，而且有妳的地方總是歡笑不斷。</br></br>充滿笑容的妳，總是把些難過的事情放在心裡，知道這是妳的習慣但還是要說如果悲傷無處可去，歡迎丟給我～～最後，在這個美好的日子要認真地跟妳說一聲，聖誕快樂＆新年快樂，未來還要一起去更多更多地方旅行、網美體驗？然後看遍世界的風景和吃遍各國美食喔！請妳務必帶上我謝謝，有妳真好😍😍😍</br></br>By 珊迪',
        image: ['src/image/selena1.JPG', 'src/image/selena2.JPG'],
    },
    {
        id: 9,
        code: 1219,
        name: '嗨，累累嗎？',
        paragraph:
            '嗨～勞倫斯</br></br>你大概是我最搞笑最荒謬最金魚腦還有最容易累的朋友之一，但是有你的日子總是充滿歡笑～～你總是能夠說走就走，不知不覺我們也一起長途旅行好多次！真的是我的旅行良伴，未來若去了泰國也請帶我去吃美食看秀？</br></br>看著你瘦身有成深感佩服，我要以你為榜樣，重新在 2022 年繼續努力哈哈哈，要不是沒收入不敢亂花，不然我就每週一去跟你辣一下了，怕你受不了而已。在這個美好的日子跟你說一聲，聖誕快樂＆新年快樂，現在的你就足夠好啦❤</br></br>By 珊迪',
        image: ['src/image/lawrence1.JPG', 'src/image/lawrence2.jpg'],
    },
    {
        id: 10,
        code: 520,
        name: '親愛的凱歆',
        paragraph:
            '親愛的凱歆</br></br>越來越美的妳，最近是不是春風滿面哈哈哈，看到妳能夠勇敢的做自己，並且自信和快樂，深深為妳感到驕傲！還記得在蘭嶼深夜的聊天，妳曾分享過妳的感受，雖然無法想像這一切有多難，但那時後卻能深刻感受到你的決心與堅定。能夠像現在這樣真好真好呢～～</br></br>還遇到183club團員讓我被閃得不要不要的哈哈哈！好啦未來也給你繼續閃沒有關係，盡情閃。祝妳聖誕快樂＆新年快樂，Love you 未來再一起出去旅行吧❤</br></br>By 珊迪',
        image: ['src/image/kh1.JPG', 'src/image/kh2.JPG'],
    },
    {
        id: 11,
        code: 1017,
        name: 'Dear Wei',
        paragraph:
            '親愛的 Wei</br></br>不知不覺又過了一年～這一年也充滿著妳的陪伴，拍了一些各式各樣合照哈哈哈</br></br>謝謝妳在半夜為我蓋被子，覺得妳是不太會講一些太感性的話，但是朋友有需要會兩肋插刀很有義氣的那種存在。未來的日子也請多多照顧，再一起吃好吃的然後擔心變胖再一起努力，然後一起耍辣唷！在這個美好的節日想跟你說一聲，聖誕快樂＆新年快樂 ❤❤❤ </br></br>By 瑄',
        image: ['src/image/wei1.JPG', 'src/image/wei2.JPG'],
    },
    {
        id: 12,
        code: 1104,
        name: '親愛的庭君',
        paragraph:
            '親愛的 劉庭君</br></br>又是充滿辣妹們陪伴的一年，謝謝妳</br></br>我們總能夠聊各式各樣的生活話題和一些認真的感情事，每次跟妳相聚總是能夠很放鬆很充電，未來的日子我們要繼續一起旅行、享受美食，然後分享彼此的生活唷！</br></br>在這個美好的節日想跟你說一聲，聖誕快樂＆新年快樂！2022年再一起繼續當辣妹❤❤❤</br></br>By 瑄',
        image: ['src/image/smile1.JPG', 'src/image/smile2.JPG'],
    },
    {
        id: 13,
        code: 908,
        name: '親愛的柔伊',
        paragraph:
            '親愛的柔伊</br></br>驚不驚喜意不意外～哈哈哈想說用網頁寫卡片應該是件浪漫的事吧？</br></br>之前工作遇到困難和瓶頸時，妳總是二話不說的陪我苦惱、跟我一起討論思考，不只工作還有人生，都有妳這個良師益友。雖然不再是同事，但我會一直是妳的好朋友，若有需要我會一直在這唷😘</br></br>在這個美好的節日想跟你說一聲，聖誕快樂＆新年快樂！2022年也請多多指教唷～～～想去妳家蹭飯但是又覺得自己不能再吃下去</br></br>By 你心目中最棒的「初階」前端工程師婉「瑄」寶貝',
        image: ['src/image/zoey1.jpg', 'src/image/zoey2.JPG'],
    },
    {
        id: 14,
        code: 924,
        name: '親愛的老朋友',
        paragraph:
            '我的杜杜</br></br>最近的妳如何？還是常常加班嗎～～我們的小旅行還沒實現啦！以此網頁表達我最近在忙的事情，嗚嗚自從10月爽完之後，這兩個月都在跟程式奮鬥，一邊奮鬥一邊覺得自己很笨啦哈哈哈</br></br>右邊那張照片真是青春無比，時常會想念青春的我們、也想念在走廊邊吃飯邊聊天的我們。時間過得好快一轉眼一年又過了，但是不論過了多久都有妳一直在真好。想在這個美好的節日想跟妳說一聲，聖誕快樂＆新年快樂！2022年也請多多指教唷～愛你❤❤</br></br>By 急著想當妳的伴娘的婉瑄',
        image: ['src/image/tutu1.JPG', 'src/image/tutu2.jpg'],
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
