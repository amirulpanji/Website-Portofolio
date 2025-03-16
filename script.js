
//function untuk menampilkan dan menyembunyikan bagian deskripsi projek

document.addEventListener('DOMContentLoaded', function() {
    const showButtons = document.querySelectorAll('.bx-plus');

    showButtons.forEach(button => {
        button.addEventListener('click', function() {
            const descriptionId = button.id.replace('show', 'description');
            const description = document.getElementById(descriptionId);
            if (description.style.display === 'flex') {
                description.style.display = 'none';
                button.classList.remove('bx-minus');
                button.classList.add('bx-plus');
            } else {
                description.style.display = 'flex';
                button.classList.remove('bx-plus');
                button.classList.add('bx-minus');
            }
        });
    });
});

//function untuk smooth scroll lenis
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Efek ease-out
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

//animasi GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".text", {
        x: 100,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
            scrub: true,    
            trigger: ".text",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    const textTarget = "Selamat Datang!";
    const characters = "!@#$%^&*()_+{}|:<>?1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let splashTimeline = gsap.timeline();

    // Animasi Scramble Text
    splashTimeline.to("#scrambleText", {
        text: {
            value: textTarget,
            delimiter: "",
            speed: 0.3,
            scrambleText: { chars: characters, revealDelay: 0.2 }
        },
        duration: 2.5,
        ease: "power2.out"
    });

    // Setelah 3 detik, splash screen menghilang
    splashTimeline.to(".splash", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector(".splash").style.display = "none";
            document.querySelector(".main-content").style.display = "block";
        }
    },
    "+=0.5"); // Delay 0.5 detik setelah scramble selesai


    document.addEventListener("DOMContentLoaded", function () {
        gsap.to(".parallax", {
            scrollTrigger: {
                trigger: ".parallax", 
                start: "top top",
                end: () =>
                "+=" +
                (window.innerHeight +
                    document.querySelector(".main").offsetHeight * 0.5),
                scrub: 1,
            },
            y: 650,
            scale: 0.75,
            rotation: -15,
            ease: "power3.out",
            opacity: 0,
        });
    

    gsap.fromTo(".main", {
            x: -100,
            scale: 0.3,
            rotation: 15,
        },
        {
            scrollTrigger: {
                trigger: ".main",
                start: "top 100%",
                end: "top 50%",
                scrub: 1,
            },
            x: 0,   
            scale: 1,
            rotation: 0,
            ease: "power3.out"
        }
    );

    gsap.fromTo(".frontend", {
                x: 100,
                scale: 0.3,
                rotation: -15,
            },
            {
                scrollTrigger: {
                    trigger: ".frontend",
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 1,
                },
                x: 0,
                scale: 1,
                rotation: 0,
                ease: "power3.out"
            }
        );
        gsap.fromTo(".skill", {
                y: -10,
                scale: 0.3,
            },
            {
                scrollTrigger: {
                    trigger: ".skill",
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 1,
                },
                y: 0,
                scale: 1,
                rotation: 0,
                ease: "power3.out"
            }
        );
        gsap.fromTo(".education", {
                y: -10,
                scale: 0.3,
            },
            {
                scrollTrigger: {
                    trigger: ".education",
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 1,
                },
                y: 0,
                scale: 1,
                rotation: 0,
                ease: "power3.out"
            }
        );
        gsap.fromTo(".project", {
                y: -10,
                scale: 0.3,
            },
            {
                scrollTrigger: {
                    trigger: ".project",
                    start: "top 100%",
                    end: "top 50%",
                    scrub: 1,
                },
                y: 0,
                scale: 1,
                rotation: 0,
                ease: "power3.out"
            }
        );

        //function fetch google app script (untuk memasukkan data form ke spreadsheet)
const scriptURL = 'https://script.google.com/macros/s/AKfycbxb_CKGKjiiik3b8hXhYzlhDssC4X83cWT933fxnIDsSJEqEUH1jpqwIdPiT2HZFIn6/exec'
const form = document.forms['contact-form']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    });

document.getElementById("submitBtn").addEventListener("click", function() {
    Swal.fire({
        title: "Succes!",
        text: "Your message has been sent",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
    }); 
});

//function untuk indikator progres
let circleIndicator = document.getElementById ('circleIndicator');
    let circle = circleIndicator.querySelector('circle');
    let textElement = document.getElementById('scrollPercentText');

    let radius = circle.getAttribute('r')
    let circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;

    function setProgress(percent){
        let offset = circumference * (1 - percent / 100);
        circle.style.strokeDashoffset = offset;
        textElement.textContent = Math.round(percent) + '%';
    }

    window.addEventListener('scroll',() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        setProgress(scrollPercent); 
    })
    setProgress(0);
});