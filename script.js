
//form

const submitEmailBtn = document.querySelector(".submit-email");
const emailInput = document.querySelector(".email-input")
const subjectInput = document.querySelector(".subject-input")
const messageInput = document.querySelector(".message-input")

const errorEmail = document.querySelector("form .error-email");
const errorSubj = document.querySelector("form .error-subj");
const errorMsg = document.querySelector("form .error-msg");


submitEmailBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    //validation
    if(emailInput.value === ""){
        emailInput.classList.add("error");
        errorEmail.style.display = "block";
    }else{
        emailInput.classList.remove("error");
        errorEmail.style.display = "none";
    }
    if(subjectInput.value === ""){
        subjectInput.classList.add("error");
        errorSubj.style.display = "block";
    }else{
        subjectInput.classList.remove("error");
        errorSubj.style.display = "none";
    }
    if(messageInput.value === ""){
        messageInput.classList.add("error");
        errorMsg.style.display = "block";
    }else{
        messageInput.classList.remove("error");
        errorMsg.style.display = "none";
    }

    if(messageInput.value && subjectInput.value && emailInput.value){
        const emailBody = {
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        }

        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";
        
        fetch("https://formsubmit.co/ajax/f1dc08b5d5964da26956af07a04dd1c5",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailBody)
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
    }

    


})

//GSAP animation

let tl = gsap.timeline({defaults: {ease: "power4.inOut"}, duration: .2});

tl.to('h1', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', duration: 1})
    .to('article', {y: 0, stagger: .3, opacity: 1,},"-=.5")
    .to('nav a', { stagger: .1, opacity: 1}, "-=.3")