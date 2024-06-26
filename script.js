let coins = 0;
let coinsPerClick = 1;

function onTelegramAuth(user) {
    alert('Добро пожаловать, ' + user.first_name);
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
}

function addCoin() {
    coins += coinsPerClick;
    document.getElementById('coins').innerText = 'Coins: ' + coins;
    showAnimation('+1');
}

function showAnimation(text) {
    const animation = document.createElement('div');
    animation.classList.add('coin-animation');
    animation.innerText = text;
    document.body.appendChild(animation);

    setTimeout(() => {
        animation.remove();
    }, 1000);
}

function buyUpgrade(cost, increase) {
    if (coins >= cost) {
        coins -= cost;
        coinsPerClick += increase;
        document.getElementById('coins').innerText = 'Coins: ' + coins;
    } else {
        alert('Not enough coins!');
    }
}

// Добавляем кнопку виджета Telegram
function addTelegramLoginButton() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?19";
    script.setAttribute('data-telegram-login', 'regbotada_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-auth-url', '');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-userpic', 'false');
    document.getElementById('telegram-login-button').appendChild(script);
}

addTelegramLoginButton();

// Обработчик события для виджета Telegram
window.addEventListener('telegramLogin', function(event) {
    const user = event.detail.user;
    onTelegramAuth(user);
});
