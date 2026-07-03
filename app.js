let img = document.querySelector("img");
let nextBtn = document.querySelector(".nextBtn");
let previousBtn = document.querySelector(".previousBtn");
let startBtn = document.querySelector(".startBtn");
let count = 1;
nextBtn.addEventListener("click", () => {
    if(count < 7){
        count++;
        img.src = `Pics/Dua${count}.jpg`;
        console.log(count);
    }
});
previousBtn.addEventListener("click", () => {
    if(count > 1){
        count--;
        img.src = `Pics/Dua${count}.jpg`;
        console.log(count);
    }
});
startBtn.addEventListener("click", () => {
    count = 0;
    img.src = `Pics/Dua1.jpg`;
});
