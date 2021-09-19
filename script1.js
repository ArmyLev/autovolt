const marker = document.querySelector('#marker');
const subMarker = document.querySelector('#subMarker');
const item = document.querySelectorAll('.menu .menuItem a');
const serviceItem = document.querySelectorAll('.menu .subItem .subMenu .serviceItem a');
		
function Indicator(e){
	marker.style.left = e.offsetLeft+'px';
	marker.style.width = e.offsetWidth+'px';
}

function SubIndicator(e){
	subMarker.style.top = e.offsetTop+'px';
	subMarker.style.width = e.offsetWidth+'px';
	marker.style.left = 225 +'px';
	marker.style.width = 99 +'px';
} 

item.forEach(link => {
	link.addEventListener('mousemove', (e) => {
		Indicator(e.target);
	});
});

serviceItem.forEach(link => {
	link.addEventListener('mousemove', (e) => {
		SubIndicator(e.target);
	});
});

const menu = document.querySelector('.menu');
const phoneMenu = document.querySelector('.menuBars');
let flag = 0;

phoneMenu.addEventListener("click", () => {
	if(flag === 0) {
		menu.style.display = 'inline-block';
		flag++;
	} else {
		menu.style.display = 'none';
		flag--;
	}
});

const slider = document.querySelector(".slider")
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;

var slideNumber = 0;

nextBtn.addEventListener("click", () => {

	slides.forEach((slide) => {
		slide.classList.remove("active");
	});

	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});


	slideNumber++;

	if(slideNumber > (numberOfSlides - 1)) {
		slideNumber = 0;
	}

	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

prevBtn.addEventListener("click", () => {

	slides.forEach((slide) => {
		slide.classList.remove("active");
	});

	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});


	slideNumber--;

	if(slideNumber < 0) {
		slideNumber = numberOfSlides - 1;
	}

	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});


var playSlider;

var repeater = () => {
	playSlider = setInterval(function() {
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
		slideIcons.forEach((slideIcon) => {
			slideIcon.classList.remove("active");
		});

		slideNumber++;

		if(slideNumber > (numberOfSlides - 1)) {
			slideNumber = 0;
		}

		slides[slideNumber].classList.add("active");
		slideIcons[slideNumber].classList.add("active");
	}, 4000);
}
repeater();


slider.addEventListener("mouseover", () => {
	clearInterval(playSlider);
});

slider.addEventListener("mouseout", () => {
	repeater();
});

var modal = document.getElementById('myModal');

var myBtn = document.getElementsByClassName('myBtn');
var close = document.getElementsByClassName('close')[0];
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "block";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}
