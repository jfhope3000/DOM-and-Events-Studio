// Write your JavaScript code here.
// Remember to pay attention to page loading!\\



window.addEventListener("load", function () {
    // put DOM code here to ensure elements have been loaded
    function launchConfirm() {
        let response = window.confirm("Would you like to play a game?");
        // Code does NOT continue until user responds to confirm window
        if (response === true) {
            let answer = window.confirm("Message to user");
        } else {
            console.log("Negative");
        }
    }

});