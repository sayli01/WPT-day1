$(document).ready(function () {
    // Send button click event
    $('#send-button').click(function () {
        sendMessage();
    });
    // Reply button click event
    $('#reply-button').click(function () {
        replyMessage();
    });
    

    // Function to send a message
function sendMessage() {
    var message = $('#message-input').val();
    if (message.trim() !== '') {
        var messageElement = $('<div class="message sent">&#x1F466' + message + '</div>');
        $('#chat-messages').append(messageElement);
        $('#message-input').val('');
        scrollToBottom();
    }
}

// Function to reply a message
function replyMessage() {
    var message = $('#message-input').val();
    if (message.trim() !== '') {
        var messageElement = $('<div class="message received">' + message + '&#x1F467</div>');
        $('#chat-messages').append(messageElement);
        $('#message-input').val('');
        scrollToBottom();
    }
}


    // Function to scroll to the bottom of the chat window
    function scrollToBottom() {
        $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
    }
});