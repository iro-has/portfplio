// アドバイス、ラッキーアイテムの変更
// 別の画像を右に挿入
const omikujiData = [
    { 
        img: './images/omikuji-images/omikuji0.png',
        message: '🎉 大吉！最高の一日になるでしょう！',
        advice: '今日は新しいことに挑戦してみましょう！',
        item: '四つ葉のクローバー'
    },
    { 
        img: './images/omikuji-images/omikuji1.png',
        message: '😊 中吉。努力が実を結ぶ日になるでしょう。',
        advice: '計画を立てて行動すると良い結果が得られます。',
        item: '青いペン'
    },
    { 
        img: './images/omikuji-images/omikuji2.png', 
        message: '🙂 小吉。落ち着いて行動しましょう。',
        advice: '焦らず、一歩一歩進むことが大切です。',
        item: 'シンプルなノート'
    },
    { 
        img: './images/omikuji-images/omikuji3.png', 
        message: '😌 吉。安定した一日になるでしょう。',
        advice: '周囲の人とのコミュニケーションを大切に。',
        item: 'お気に入りのマグカップ'
    },
    { 
        img: './images/omikuji-images/omikuji4.png', 
        message: '😅 末吉。小さな幸せがあるでしょう。',
        advice: '日常の中で感謝の気持ちを忘れずに。',
        item: '香りの良いハンドクリーム'
    },
    { 
        img: './images/omikuji-images/omikuji5.png', 
        message: '⚠️ 凶。無理は禁物、焦らず行動しましょう。',
        advice: '休息を取り、リフレッシュする時間を持ちましょう。',
        item: 'リラックスできる音楽'
    },
    { 
        img: './images/omikuji-images/omikuji6.png', 
        message: '💀 大凶…。慎重に行動しましょう。',
        advice: '重要な決断は避け、周囲の意見を聞くことが大切です。',
        item: '守り神のストラップ'
    }
];

function getRandomIndex() {
  return Math.floor(Math.random() * omikujiData.length);
}

let isRunning = false;

function onClickButton() {
  if (isRunning) return;
  isRunning = true;

  const imgElm = document.getElementById('js-result');
  const msgElm = document.getElementById('js-message');
  const adviceElm = document.getElementById('js-advice');
  const itemElm = document.getElementById('js-item');

  [msgElm, adviceElm, itemElm].forEach(el => {
    el.classList.remove('is-show');
  });

  const timer = setInterval(() => {
    const rand = getRandomIndex();
    imgElm.src = omikujiData[rand].img;
  }, 100);

  setTimeout(() => {
    clearInterval(timer);

    const result = getRandomIndex();
    const data = omikujiData[result];

    imgElm.src = data.img;
    msgElm.textContent = data.message;
    adviceElm.textContent = `💡 アドバイス：${data.advice}`;
    itemElm.textContent = `🍀 ラッキーアイテム：${data.item}`;

    setTimeout(() => {
        [msgElm, adviceElm, itemElm].forEach(el => {
        el.classList.add('is-show');
        });
    }, 500);
    
    isRunning = false;
  }, 2000);
}

document
  .getElementById('js-button')
  .addEventListener('click', onClickButton);
