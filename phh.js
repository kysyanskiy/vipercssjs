const joke2 = [
    "1",
    "VIPERR",
    "Чому комп'ютер ніколи не відчуває голоду?Бо він завжди має багато байтів!",
    "Чому програмісти не люблять природу?Бо там занадто багато багів!",
];
function joke1() {
    const randomIndex = Math.floor(Math.random() * joke2.length);
    document.getElementById("joke").innerText = joke2[randomIndex];
}