const text = document.getElementById("text");

text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")

const alphSpan = document.querySelectorAll("span");

alphSpan.forEach(span=>{

    span.addEventListener("mouseover",()=>{
        span.classList.add("active");

    });
})