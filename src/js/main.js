const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    
];
const options = {
    activeItemPosition: 1,
    interval: 3000,
}

const carousel = new Carousel(items,options);

carousel.cycle();