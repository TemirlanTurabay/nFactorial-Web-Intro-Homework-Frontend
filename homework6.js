let mybtn = document.getElementById('mybtn');
let text = document.getElementById('text');

mybtn.addEventListener('click', function () {
    text.remove();
});

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

thirdtask.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
thirdtask.firstChild.onclick = () => thirdtask.remove();
