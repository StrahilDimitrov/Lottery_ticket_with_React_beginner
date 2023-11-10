export function getRandomNumber() {
    return Math.floor(Math.random() * 50);
}

export function getRandomColor() {
    return 'hsl(' + Math.random() * 360 + ', 85%, 75%)';
}