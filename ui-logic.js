const buttons = document.querySelectorAll("button");
for (button of buttons) {
    button.addEventListener("click", function (e) {
        const selection = document.createElement("div");
        selection.setAttribute("class", `${e.target.id}`);
        if (e.target.id === "rock") selection.textContent = "✊";
        if (e.target.id === "paper") selection.textContent = "🖐️";
        if (e.target.id === "scissor") selection.textContent = "✌️";
        const choices = document.getElementById("show-choices");
        choices.append(selection);

    })
}