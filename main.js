let imageClassList = ["hero-image","hero-support"]; 
let hamburger = document.getElementById("hamburger")

function changeImages(image_class,currentValue,replaceValue) {
    let images = document.getElementsByClassName(image_class);
    console.log(images.length);
    for (let i = 0; i < images.length; i++) {
        images[i].src = images[i].src.replace(currentValue, replaceValue);
    }
}

if (window.innerWidth <= 810) {
    imageClassList.forEach((image_class) => {
        changeImages(image_class,"desktop","mobile");
    })
}else{
    imageClassList.forEach((image_class) => {
        changeImages(image_class,"mobile","desktop");
    })
}

window.onresize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 810) {
        imageClassList.forEach((image_class) => {
            changeImages(image_class,"desktop","mobile");
        })
    }else{
        imageClassList.forEach((image_class) => {
            changeImages(image_class,"mobile","desktop");
        })
    }
};

hamburger.onclick = () => {
    let navBox = document.querySelector("nav");
    let backdrop = document.querySelector("#backdrop")
    console.log(navBox)
    if(navBox.classList.contains("!top-full")){
        navBox.classList.add("top-[-300%]");
        backdrop.classList.remove("block");
        backdrop.classList.add("hidden");
        navBox.classList.remove("!top-full");
    }else{
        backdrop.classList.add("block");
        backdrop.classList.remove("hidden");
        navBox.classList.remove("top-[-300%]");
        navBox.classList.add("!top-full");
    }
}