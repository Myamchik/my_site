answer = prompt("Желаете пройти регистрацию на сайте?");

if (answer.toLowerCase() == "да") {
    alert("Круто!");
} else {
    while (answer.toLowerCase() != "да") {
        answer = prompt("Попробуй ещё раз. Желаете пройти регистрацию на сайте?");
        if (answer.toLowerCase() == "да") {
            alert("Круто!");
            break;
        } else {
            continue;
        }
    }
}