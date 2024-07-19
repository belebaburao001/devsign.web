function menuAnimation() {
    var menu = document.querySelector("#menu");
     var close = document.querySelector("#closed");
    
    var tl = gsap.timeline();
    
    tl.to(".nav-links", {
        top:0,
        duration:0.6
    })
    
    tl.from(".nav-links a", {
        duration:0.3
    })
    
    tl.pause()
    
    menu.addEventListener("click", function(){
        tl.play()
    })
    
    close.addEventListener("click", function(){
        tl.reverse()
    })
    }
menuAnimation()
    
function heroBtn2() {
        const heroBtn2 = document.querySelector(".hero-btn2");
        const line2 = document.querySelector(".line-2");
    
        if (heroBtn2 && line2) {
            heroBtn2.addEventListener("mouseover", (event) => {
                line2.style.width = "155px";
            });
    
            heroBtn2.addEventListener("mouseout", (event) => {
                line2.style.width = "0px";
            });
        } else {
            console.error('Element(s) with class "hero-btn2" or "line-2" not found.');
        }
    }
document.addEventListener('DOMContentLoaded', heroBtn2);
    
    
function projectsTextAnimation() {
        let startX;
    
        // For desktop
        window.addEventListener("wheel", function(dets) {
            if (dets.deltaY > 0) {
                gsap.to(".marque", {
                    transform: "translateX(-200%)",
                    repeat: -1,
                    duration: 4,
                    ease: "none"
                });
            } else {
                gsap.to(".marque", {
                    transform: "translateX(0)",
                    repeat: -1,
                    duration: 4,
                    ease: "none"
                });
            }
        });
    
        // For mobile
        window.addEventListener("touchstart", function(e) {
            startX = e.touches[0].clientX;
        });
    
        window.addEventListener("touchmove", function(e) {
            let touchX = e.touches[0].clientX;
            if (startX - touchX > 0) {
                gsap.to(".marque", {
                    transform: "translateX(-200%)",
                    repeat: -1,
                    duration: 4,
                    ease: "none"
                });
            } else {
                gsap.to(".marque", {
                    transform: "translateX(0)",
                    repeat: -1,
                    duration: 4,
                    ease: "none"
                });
            }
        });
    }
    
projectsTextAnimation();

// Hero Section Animation
gsap.from(".text-content", {
    x: -150,
    opacity:0,
    duration: 0.6,
    stagger: 0.5
});
gsap.from(".hero-img", {
    x: 150,
    opacity:0,
    duration: 0.6,
    stagger: 0.5
});

// About Section Animation
gsap.from(".first, .second, .third, .hr", {
    y: 150,
    opacity:0,
    duration: 0.6,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".about-first",
        scroller:"body"
    }
});

gsap.from(".about-second", {
    y: 150,
    duration: 0.6,
    scrollTrigger:{
        trigger: ".about-first",
        scroller:"body"
    }
});

// About Page Animation
gsap.from(".about-page-text-content", {
    x: 150,
    opacity:0,
    duration: 0.6,
});

gsap.from(".about-page-img", {
    x: -150,
    opacity:0,
    duration: 0.6,
    scrollTrigger:{
        trigger: ".about-page-img",
        scroller:"body"
    }
});

// Project Section Animation
gsap.from(".main-heading, .project", {
    y: 150,
    opacity:0,
    duration: 0.6,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".main-heading, .project",
        scroller:"body"
    }
});

// Connect Page Animation
gsap.from(".connect-page-text-content", {
    x: 150,
    opacity:0,
    duration: 0.6,
});

gsap.from(".connect-page-img", {
    x: -150,
    opacity:0,
    duration: 0.6,
    scrollTrigger:{
        trigger: ".connect-page-img",
        scroller:"body"
    }
});

// Footer Animation
gsap.from("footer, #connect-section", {
    y: 150,
    opacity:0,
    duration: 0.6,
    scrollTrigger:{
        trigger: "footer, #connect-section",
        scroller:"body"
    }
});