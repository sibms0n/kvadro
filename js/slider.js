let contents = [
    {
        img: `<img src="images/drons/image 20.png" class="img" alt="">`,
        title: `<h2>Запускаем розыгрыш на квадрокоптер <br> DJI MAVIC 3 MULTISPECTRAL.</h2>
        <h3>Успейте принять участие до 31 декабря!</h3>`,
    },
    {
        img: `<img src="images/drons/image 7.png" class="img" alt="">`,
        title: `<h2>Последнии дни акции <br> DJI MAVIC 3 MULTISPECTRAL.</h2>
        <h3>Успейте принять участие до 31 декабря!</h3>`,
    },
    {
        img: `<img src="images/drons/image 8.png" class="img" alt="">`,
        title: `<h2>Шоковая цена <br> DJI MAVIC 3 MULTISPECTRAL.</h2>
        <h3>Успейте купить до 31 декабря!</h3>`,
    }
]

let img = document.querySelector('.news_block_right_img');
let title = document.querySelector('.news_block_left_content').children[0];


let number = 0;
let lenghtContents = contents.length - 1; 

function next() {

    if (number == lenghtContents) {
        number = 0;
    } else {
        number++;
    }

    title.innerHTML = contents[number].title;
    img.innerHTML = contents[number].img;
}

function prev() {

    if (number == 0) {
        number = 2;
    } else {
        number--;
    }

    title.innerHTML = contents[number].title;
    img.innerHTML = contents[number].img;
}



document.addEventListener('DOMContentLoaded', () => {
    const sliderData = [
        { img: 'images/drons/image 8.png', text: 'DJI Mini 3 Pro' },
        { img: 'images/drons/image 8.png', text: 'DJI Mini 3 Pro' },
        { img: 'images/drons/image 7.png', text: 'DJI Mini 3 Pro' },
        { img: 'images/drons/image 7.png', text: 'DJI Mini 3 Pro' },
    ];

    const sliderContainer = document.querySelector('.slider_container');

    sliderData.forEach(data => {
        const sliderBlock = document.createElement('a');
        sliderBlock.className = 'slider_block';
        sliderBlock.href = '#';
        sliderBlock.innerHTML = `
            <img src="${data.img}" class="img" alt="${data.text}">
            <p>${data.text}</p>
            <div class="more">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="14.9525" y1="27.6669" x2="14.9525" y2="0.333536" stroke="black" stroke-width="2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6668 15H0.333496V13H27.6668V15Z" fill="white"/>
            </svg>
        </div>
        `;
        sliderContainer.appendChild(sliderBlock);
    });

    const sliderBlocks = document.querySelectorAll('.slider_block');
    const prevBtn = document.querySelector('.rev_btn');
    const nextBtn = document.querySelector('.next_btn');
    let index = 0;
    const totalBlocks = sliderBlocks.length - 1;
    const slideWidth = sliderBlocks[0].offsetWidth + 30; // Include margin

    // Function to update the slider position
    function updateSlider() {
        sliderContainer.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    // Function to go to the next slide
    function nextSlide() {
        index = (index + 1) % totalBlocks;
        updateSlider();
    }

    // Function to go to the previous slide
    function prevSlide() {
        index = (index - 1 + totalBlocks) % totalBlocks;
        updateSlider();
    }

    // Set interval for automatic sliding
    let autoSlideInterval = setInterval(nextSlide, 4000);

    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        autoSlideInterval = setInterval(nextSlide, 4000);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        autoSlideInterval = setInterval(nextSlide, 4000);
    });
});
