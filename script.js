function sendCode() {
    const phone = document.getElementById('phone').value;
    window.pywebview.api.send_code(phone).then(response => {
        alert(response);
        document.getElementById('code-section').style.display = 'block';
    });
}

function signIn() {
    const phone = document.getElementById('phone').value;
    const code = document.getElementById('code').value;
    window.pywebview.api.sign_in(phone, code).then(response => {
        alert(response);
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('control-panel').style.display = 'block';
    });
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
