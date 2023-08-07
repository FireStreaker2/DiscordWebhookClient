const form = document.getElementById("form");
const webhookInput = document.getElementById("webhook");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

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
    })
    .catch(error => {
        console.error("Error sending message:", error);
    });
});