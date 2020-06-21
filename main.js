window.addEventListener("scroll", function () {
    let header = document.querySelector('.nav-st');
    header.classList.toggle('navbar', window.scrollY > 0);
    header.classList.toggle('sticky', window.scrollY === 0);
})

let a = document.querySelectorAll('.nav-link');
function mouseInOut(value) {
    const active = 'active-source';
    if (window.scrollY > 0) {
        for (let nav of a) {
            if (nav.innerText == value.target.text) {
                let b = Array.from(nav.textContent).reverse();
                value.type === 'mouseover' ? nav.classList.add(active) : null;
                document.querySelector(`.${active}`).textContent = b.join('');
                value.type === 'mouseout' ? nav.classList.remove(active) : null;
            }
        }
    }
}

document.querySelector('.navbar-nav').addEventListener('mouseover', mouseInOut);
document.querySelector('.navbar-nav').addEventListener('mouseout', mouseInOut);

// скрипт приветствия
const hello = () => {
    let hourNow = new Date().getHours();
    let greeting = '';
    if (hourNow > 18) greeting = 'Hello!';
    else if (hourNow > 12) greeting = 'Hola!';
    else if (hourNow > 0) greeting = 'Bonjour!';
    else greeting = 'Вітаю!';
    return greeting
}
document.querySelector('#part-day').innerHTML = hello();

// скрипт создания дивов фото
const screenPortfolio = [['3', 'Istanbul'], ['4', '1'], ['5', '2'], ['1', '3']];

function turnImg() {
    for (const element of screenPortfolio) {
        let newImg = document.createElement('img');
        newImg.classList.add('sim-slider-element');
        newImg.src = `./images/portfolio/${element[0]}.jpg`;
        newImg.alt = element[1];
        document.querySelector('.sim-slider-list').appendChild(newImg);
    }
}
turnImg();

// скрипт портфолио
function Sim(sldrId) {
    let simSlider = document.querySelector('.sim-slider')
    let id = document.getElementById(sldrId);
    id ? this.sldrRoot = id : this.sldrRoot = simSlider;

    // Carousel objects
    this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
    this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
    this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
    // Initialization
    this.options = Sim.defaults;
    Sim.initialize(this)
};

Sim.defaults = {
    // Default options for the carousel
    loop: true,     // Бесконечное зацикливание слайдера
    auto: true,     // Автоматическое пролистывание
    interval: 5000, // Интервал между пролистыванием элементов (мс)
};

Sim.prototype.elemPrev = function (num) {
    num = num || 1;

    let prevElement = this.currentElement;
    this.currentElement -= num;
    if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

    if (!this.options.loop) {
        if (this.currentElement == 0) {
            this.leftArrow.style.display = 'none'
        };
        this.rightArrow.style.display = 'block'
    };

    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

};

Sim.prototype.elemNext = function (num) {
    num = num || 1;

    let prevElement = this.currentElement;
    this.currentElement += num;
    if (this.currentElement >= this.elemCount) this.currentElement = 0;

    if (!this.options.loop) {
        if (this.currentElement == this.elemCount - 1) {
            this.rightArrow.style.display = 'none'
        };
        this.leftArrow.style.display = 'block'
    };

    this.sldrElements[this.currentElement].style.opacity = '1';
    this.sldrElements[prevElement].style.opacity = '0';

    if (this.options.dots) {
        this.dotOn(prevElement); this.dotOff(this.currentElement)
    }
};

Sim.initialize = function (that) {

    // Constants
    that.elemCount = that.sldrElements.length; // Количество элементов

    // Variables
    that.currentElement = 0;
    let bgTime = getTime();

    // Functions
    function getTime() {
        return new Date().getTime();
    };
    function setAutoScroll() {
        that.autoScroll = setInterval(function () {
            let fnTime = getTime();
            if (fnTime - bgTime + 10 > that.options.interval) {
                bgTime = fnTime; that.elemNext()
            }
        }, that.options.interval)
    };

    // Start initialization
    if (that.elemCount <= 1) {   // Отключить навигацию
        that.options.auto = false; that.options.arrows = false; that.options.dots = false;
        that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
    };
    if (that.elemCount >= 1) {   // показать первый элемент
        that.sldrElemFirst.style.opacity = '1';
    };

    if (!that.options.loop) {
        that.leftArrow.style.display = 'none';  // отключить левую стрелку
        that.options.auto = false; // отключить автопрокрутку
    }
    else if (that.options.auto) {   // инициализация автопрокруки
        setAutoScroll();
        // Остановка прокрутки при наведении мыши на элемент
        that.sldrList.addEventListener('mouseenter', function () { clearInterval(that.autoScroll) }, false);
        that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
    };
};

new Sim();