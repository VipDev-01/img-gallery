const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', flexGrow);
})

function flexGrow() {
    console.log(this.classList.toggle('grow'));
}