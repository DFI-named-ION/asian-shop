export default function MailConfirmation() {
    console.log("Hooked!");

    const urlParams = new URLSearchParams(window.location.search);
    console.log(`Count of parameters: ${urlParams.toString().split('&').length}`);
    for (const [key, value] of urlParams.entries()) {
        console.log(`${key}: ${value}`);
    };
};