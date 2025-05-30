function generatePassword() {
    const length = document.getElementById("length").value;
    if (length < 1) {
        document.getElementById("result").innerHTML =
            "Please enter a valid length.";
        return;
    }

    const characters = {
        capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
    };

    let password = "";
    let hasAtSymbol = false;

    for (let i = 0; i < length; i++) {
        let choice = Math.floor(Math.random() * 4);

        if (choice === 0) {
            password += characters.capital.charAt(
                Math.floor(Math.random() * characters.capital.length)
            );
        } else if (choice === 1) {
            password += characters.lowercase.charAt(
                Math.floor(Math.random() * characters.lowercase.length)
            );
        } else if (choice === 2) {
            password += characters.numbers.charAt(
                Math.floor(Math.random() * characters.numbers.length)
            );
        } else {
            if (!hasAtSymbol) {
                password += "@";
                hasAtSymbol = true;
            } else {
                i--;
            }
        }
    }

    document.getElementById(
        "result"
    ).innerHTML = `Generated Password: ${password}`;
}
