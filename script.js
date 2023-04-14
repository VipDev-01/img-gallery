const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', flexGrow));

function flexGrow() {this.classList.toggle('grow')};