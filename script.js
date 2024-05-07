function addTitle () {
    let h1 = document.createElement('h1');
    h1.id = 'title';
    h1.innerHTML = 'Color Palette';
    document.body.appendChild(h1);
}
addTitle();

function addPalette () {
    let colorPalette = document.createElement('div');
    document.body.appendChild(colorPalette);
    colorPalette.id = 'color-palette';
    let colorList = ['black', 'red', 'green', 'blue'];
    for (let color of colorList) {
        let colorItem = document.createElement('div');
        colorItem.className = 'color';
        colorItem.style.backgroundColor = color;
        colorPalette.appendChild(colorItem);
    }
}
addPalette();
