//１．ランダムにおみくじ画像を表示する処理
function getRandomOmikuji() {
    const number = Math.floor (Math.random() * 7);
    const omikujiImages = `./images/omikuji${number.toString()}.png`;
    return omikujiImages;
};

//２．ボタンを押したときの処理
function onClickButton() {
    const timer = setInterval(() => {
        document.querySelector('#js-result').setAttribute("src", getRandomOmikuji());
    }, 100);
    //３．数秒後に画像が止まる処理
    setTimeout(() => {
        clearInterval(timer);
    }, 2000);
};
document.querySelector('#js-button').addEventListener('click', onClickButton);