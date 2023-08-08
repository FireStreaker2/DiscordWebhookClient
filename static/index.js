const form = document.getElementById("form");
const webhookInput = document.getElementById("webhook");
const messageInput = document.getElementById("message");

let sentMessages = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (messageInput.value.trim() === "") {
        return;
    }

    const message = {
       message:  messageInput.value.trim(),
       webhook: webhookInput.value.trim()
    }

    fetch("/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        messageInput.value = "";
        sentMessages.push(messageInput.value.trim());
        new Alert({
            type: "success",
            message: "Message Sent Succesfully!", 
            expires: true,
            duration: 3,
        })
    })
    .catch(error => {
        console.error("Error sending message:", error);
        new Alert({
            type: "error",
            message: "Message Failed To Send",
            expires: true,
            duration: 3,
        })
    });
});