const red = document.querySelector(".red");
// const red = document.querySelector(".cyan");
// const red = document.querySelector(".violet");
// const red = document.querySelector(".orange");
// const red = document.querySelector(".pink");
// const center = document.querySelector(".center");
console.log(window.getComputedStyle(red).background);

const getBGColor = (selectedElement) => {

	return window.getComputedStyle(selectedElement).backgroundColor;
};

console.log(getBGColor(pink));
