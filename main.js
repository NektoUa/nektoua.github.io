let a = document.querySelectorAll('.nav-link');
function mouseIn(value) {
    for (let nav of a) {
        if (nav.firstChild.data == value.originalTarget.firstChild.data) {
            let b = Array.from(nav.textContent);
            b.reverse();
            nav.classList.add('active-source');
            document.querySelector('.active-source').textContent = b.join('');
        }
    }
}

function mouseOut(value) {
    for (let nav of a) {
        if (nav.firstChild.data == value.originalTarget.firstChild.data) {
            let b = Array.from(nav.textContent);
            b.reverse();
            document.querySelector('.active-source').textContent = b.join('');
            nav.classList.remove('active-source');
        }
    }
}

document.querySelector('.navbar-nav').addEventListener('mouseover', mouseIn);
document.querySelector('.navbar-nav').addEventListener('mouseout', mouseOut);
