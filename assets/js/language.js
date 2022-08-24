/*class Translate{
    constructor(){
        document.getElementById("arabic").addEventListener("click",()=>{
            this.translate("arabic");
        });

        document.getElementById("eng").addEventListener("click",()=>{
            this.translate("eng");
        });
        this.translate(localStorage.getItem("Laugauge"));
    }
    translate(language){
        if(language == "arabic"){
            document.querySelector("body").style.direction="rtl";
            document.getElementById("lang4").innerHTML="الصفحة الرئيسية";
            document.getElementById("lang1").innerHTML="احجز الان";
            document.getElementById("lang2").innerHTML="نجعل التكنولوجيا في المتناول! وكل شيء سهل";
            document.getElementById("lang3").innerHTML="موظفو ومتدرب MHG IT";
          
            document.getElementById("lang5").innerHTML="خدماتنا";
            document.getElementById("lang6").innerHTML=" © 2022 MHG. كل الحقوق محفوظة.";
            document.getElementById("lang8").innerHTML="قائمةمنسدلة";
        }
        else if(language == "eng"){
            document.querySelector("body").style.direction="ltr";
            document.getElementById("lang4").innerHTML=" Home";
            document.getElementById("lang1").innerHTML="Book now";
            document.getElementById("lang2").innerHTML="We make technology accessible! And Everything is easy";
            document.getElementById("lang3").innerHTML="MHG IT Staff & Trainee";
        
            document.getElementById("lang5").innerHTML=" Our Services";
            document.getElementById("lang6").innerHTML=" © 2022 MHG. All rights reserved.";
            document.getElementById("lang8").innerHTML=" Dropdown";
        }
        localStorage.setItem("Laugauge",language)

    }
}
onload=new Translate();*/





const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

const translations = {
  en: {
 
    about: "About",
    HOME:"HOME",
    login: "login",
    Service: "Service",
    contact: " To contact us, please fill out the fields..",
    contact2: "Contact us",
    team:"OUR TEAM",
    faq:"FAQ",
    selectLanguage: "Select a language",
    english: "English",
    arabic: "Arabic",
    footer:"© 2022 MHG. All rights reserved.",
    send:"send message",
    name:"Your Name",
    email:"email",
    phone:"phone",
    faq:"Outlook Problems",
    team1:"IT Support Manager",
    team2:"IT Support Supervisor",
    team3:"Technical Support Specialist",
    team4:"OUR TEAM",
    team5:"IT Support Supervisor",
    message:"Your message",
    subject:"Subject",
    staff:"MHG IT Staff & Trainee",
    staff:"We make technology accessible! And Everything is easy",
    drive:"OneDrive Problems",
   
    drive2:"Teams Problems",
    drive3:"printer Problems ",
    drive4:"Fingerprint and Card Problems ",
    
  },
  ar: {
    
    HOME: "الصفحة الرئيسية",
    about: "من نحن",
    login: "دخول",
    team:"فريقنا",
    faq:"تعليمات",
    Service: "خدماتنا",
    contact: "تواصل معنا",
    selectLanguage: "إختر لغة",
    english: "الانجليزية",
    arabic: "العربية",
    footer:" © 2022 MHG. كل الحقوق محفوظة.",
   team:"فريقنا",
    contact2: "  للتواصل معنا يرجى تعبئة الحقول ..",
    send:"ارسال",
    name:"الاسم",
    email:"البريد الالكتروني",
    phone:"الهاتف",
    faq:"مشاكل التوقعات",
    team1:"مدير دعم تكنولوجيا المعلومات",
    team2:"مشرف دعم تكنولوجيا المعلومات",
    team3:"أخصائي الدعم الفني",
    team4:"فريقنا",
    team5:"مشرف دعم تكنولوجيا المعلومات",
    message:"رسالتك",
    subject:"الموضوع",
    staff:"موظفو ومتدرب MHG IT",
    staff2:"نجعل التكنولوجيا في المتناول! وكل شيء سهل",
    drive:"مشاكل OneDrive",
    drive2:"مشاكل الفرق ",
    drive3:"مشاكل الطابعة",
    drive4:"مشاكل بصمات الأصابع والبطاقة",
  },
  
};




   