let a = document.querySelectorAll('.nav-link');
function mouseIn(value) {
    console.log(a);
    console.log(value);
    for (let nav of a) {
        console.log(nav);
        if (nav.innerText == value.target.text) {
            let b = Array.from(nav.textContent);
            b.reverse();
            nav.classList.add('active-source');
            document.querySelector('.active-source').textContent = b.join('');
            console.log(nav);
        }
    }
}

function mouseOut(value) {
    for (let nav of a) {
        if (nav.innerText == value.target.text) {
            let b = Array.from(nav.textContent);
            b.reverse();
            document.querySelector('.active-source').textContent = b.join('');
            nav.classList.remove('active-source');
            console.log(nav)
        }
    }
}

document.querySelector('.navbar-nav').addEventListener('mouseover', mouseIn);
document.querySelector('.navbar-nav').addEventListener('mouseout', mouseOut);