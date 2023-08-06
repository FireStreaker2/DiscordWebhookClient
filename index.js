const form = document.getElementById("form");
const webhookInput = document.getElementById("webhook");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const webhook = webhookInput.value.trim();
    const message = {
       content:  messageInput.value.trim(),
    }

    fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            console.log("Message sent successfully");
            messageInput.value = "";
        } else {
            console.error("Error sending message:", response.statusText);
        }
    })
    .catch(error => {
        console.error("Error sending message:", error);
    });
});