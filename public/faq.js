// const allfaqs = document.querySelectorAll(".faq_a");

// allfaqs.forEach(faq_a => {
//     faq_a.addEventListener("click", () => {
// faq_a.classList.toggle("active");
//     })
// })

var toggle = false;
function btnPress(faqnum){
    toggle = !toggle
    var selector = "faq_a" + faqnum
    console.log(toggle);
    
    if(toggle){
        document.getElementById("faq_a1").classList.remove("active")
        document.getElementById("faq_a2").classList.remove("active")
        document.getElementById("faq_a3").classList.remove("active")
        document.getElementById("faq_a4").classList.remove("active")
        document.getElementById(selector).classList.add("active")
        
    }
    else{
        document.getElementById(selector).classList.remove("active")

        
    }
    // document.getElementById("faq_a1").classList.remove("active")
    // document.getElementById("faq_a2").classList.remove("active")
    // document.getElementById("faq_a3").classList.remove("active")
    // document.getElementById("faq_a4").classList.remove("active")

}