/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/*===== CONTACT ME =====*/
document.getElementById("btn").addEventListener("click",sb);

function sb(e)
{
    let nameUser = document.querySelector("#nm").value;
    let mail = document.querySelector("#mail").value;
    let message = document.querySelector("#msg").value;

    recieveMail(nameUser,mail,message);
    sendMail(nameUser,mail,message);
}

/*===== SEND EMAIL =====*/
function sendMail(nameUser,mail,message)
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : 'arkosen27@gmail.com',
        Password : "zpcbqcrcmcamhcnl",
        To : mail,
        From : 'arkosen27@gmail.com',
        Subject : `${nameUser} has sent you a Message`,
        Body : `Name: ${nameUser} <br/> Mail ID: ${mail} <br/> Message: ${message}`,
    }).then(
      message => alert("Mail has been Sent Successfully")
    );

}

/*===== RECIEVE EMAIL =====*/
function recieveMail(nameUser,mail,message)
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : 'arkosen27@gmail.com',
        Password : "zpcbqcrcmcamhcnl",
        To : 'arkosen27@gmail.com',
        From : mail,
        Subject : `${nameUser} has sent you a Message`,
        Body : `Name: ${nameUser} <br/> Mail ID: ${mail} <br/> Message: ${message}`,
    }).then(
      message => alert("Mail has been Sent Successfully")
    );
}

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 