function sendWhatsApp(){

    let name=document.getElementById("name").value;
    let mobile=document.getElementById("mobile").value;
    let city=document.getElementById("city").value;
    let sofa=document.getElementById("sofa").value;
    let message=document.getElementById("message").value;

    let text =
`*New Sofa Inquiry*

Name: ${name}
Mobile: ${mobile}
City: ${city}
Sofa: ${sofa}

Message:
${message}`;

    window.open(
        "https://wa.me/917385004617?text="+encodeURIComponent(text),
        "_blank"
    );
}
const slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){
current=0;
}

slides[current].classList.add("active");

},3000);
