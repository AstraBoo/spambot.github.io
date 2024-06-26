function onTelegramAuth(user) {
    alert('Добро пожаловать, ' + user.first_name);
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('control-panel').style.display = 'block';
}

function updateSpam() {
    const message = document.getElementById('spam-message').value;
    const count = document.getElementById('spam-count').value;
    window.pywebview.api.update_spam(message, count).then(response => {
        alert(response);
    });
}

function toggleFeature() {
    const feature = 'feature1';
    const state = document.getElementById(feature).checked;
    window.pywebview.api.toggle_feature(feature, state).then(response => {
        alert(response);
    });
}

document.getElementById('feature1').addEventListener('change', toggleFeature);

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
