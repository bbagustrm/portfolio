const html = document.getElementsByTagName("html")[0]
const burgerButton = document.querySelectorAll(".burger")
const closeButton = document.querySelectorAll(".close")



if(html.classList.contains("dark")){
    burgerButton[0].classList.add("hidden")
    burgerButton[1].setAttribute('id','openNav')
    closeButton[0].classList.add("hidden")
    closeButton[1].setAttribute('id','closeNav')
}else{
    burgerButton[1].classList.add("hidden")
    burgerButton[0].setAttribute('id','openNav')
    closeButton[1].classList.add("hidden")
    closeButton[0].setAttribute('id','closeNav')
}


const openNav = document.querySelector("#openNav")
const closeNav = document.querySelector("#closeNav")

const nav = document.querySelector(".phone-navbar")

openNav.addEventListener("click", function(){
    nav.classList.toggle("navbar")
})
closeNav.addEventListener("click", function(){
    nav.classList.toggle("navbar")
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddingElements = document.querySelectorAll('.hidding');
hiddingElements.forEach((el) => observer.observe(el));
