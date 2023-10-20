prompt("What is your name? ");
prompt("What is their name? ");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;


if (lovescore > 70) {
    alert("Your love score is " + lovescore + "%." + " You love each other like Kanye loves Kanye!")
}

if (lovescore > 30 && lovescore <= 70) {
    alert("your love score is: " + lovescore + "%.")
}

if (lovescore <= 30) {
    alert("Your love score is: " + lovescore + "%." + " You go together like oil and water.")
}
