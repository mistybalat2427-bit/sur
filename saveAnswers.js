const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyRi396JFHR56nYSZC5r0ezPdro3NUKV9WepVORwi7xdFCE9iUc5ADtkSGtk35vHDlg/exec";
console.log("Google Sheet collector loaded");

function sendAnswersToGoogleSheet(data) {

    fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(data)
    });

    console.log("Answers sent to Google Sheet");
}