import webview
from telethon import TelegramClient, events, sync
from threading import Thread

# Параметры для подключения к Telegram API
api_id = '26465266'
api_hash = '7d959ff2f930d2389ab084411d5c1d78'
client = TelegramClient('session_name', api_id, api_hash)

# Параметры спама
spam_message = "Default spam message"
spam_count = 5

def start_bot():
    client.run_until_disconnected()

@client.on(events.NewMessage)
async def handler(event):
    if event.raw_text == '!spam':
        for _ in range(spam_count):
            await client.send_message(event.chat_id, spam_message)

class Api:
    def send_code(self, phone_number):
        client.send_code_request(phone_number)
        return "Код отправлен"

    def sign_in(self, phone_number, code):
        client.sign_in(phone=phone_number, code=code)
        return "Вы успешно авторизовались"

    def update_spam(self, message, count):
        global spam_message, spam_count
        spam_message = message
        spam_count = int(count)
        return "Spam settings updated!"

    def toggle_feature(self, feature, state):
        # Логика включения/выключения функции
        return f"{feature} turned {'on' if state else 'off'}"

if __name__ == '__main__':
    api = Api()
    window = webview.create_window('Telegram Bot Control Panel', 'index.html', js_api=api)
    bot_thread = Thread(target=start_bot)
    bot_thread.start()
    webview.start()
