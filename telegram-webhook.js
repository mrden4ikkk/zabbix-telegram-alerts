var params = JSON.parse(value);

var req = new HttpRequest();

req.addHeader('Content-Type: application/json');

var data = {
    chat_id: params.ChatID,
    text: params.Subject + '\n' + params.Message
};

var response = req.post(
    'https://api.telegram.org/bot' + params.Token + '/sendMessage',
    JSON.stringify(data)
);

return response;
