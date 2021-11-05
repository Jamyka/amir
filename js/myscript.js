window.onscroll = () => {
    let myBtn = document.getElementById('backtotop');

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myBtn.style.display = "block";
        myBtn.onclick = () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    } else {
        myBtn.style.display = "none";
    }
}

window.onload = () => {
    let formBtn = document.getElementById('formbtn');
    formBtn.onclick = (e) => {
        e.defaultPrevented;
        window.alert("Sorry, But this form is for demostrating purposes only.\n Thank You");

    }
}
