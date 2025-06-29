   /*----------- functions for dropdown menu------------------------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
         
       function opentab(tabname){
        for(tablink of tablinks){
          tablink.classList.remove("active-link");
        }
          
        for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
        }
          event.currentTarget.classList.add("active-link");
          document.getElementById(tabname).classList.add("active-tab");
      }
    
    function myfunction() {
        document.getElementById('ddm1').style.display = "block" ;
        document.getElementById('ddm2').style.display = "block" ;
        document.getElementById('ddm3').style.display = "block" ;
        document.getElementById('ddm4').style.display = "block" ;
        document.getElementById('ddm5').style.display = "block" ;
        document.getElementById('ddm6').style.display = "block" ;
            
    }
    
    function closeTab(){
        
        document.getElementById('ddm1').style.display = "none" ;
        document.getElementById('ddm2').style.display = "none" ;
        document.getElementById('ddm3').style.display = "none" ;
        document.getElementById('ddm4').style.display = "none" ;
        document.getElementById('ddm5').style.display = "none" ;
        document.getElementById('ddm6').style.display = "none" ;
            
    }
    
    function myabout() {
        const element =
        document.getElementById("myabout");
        element.scrollIntoView();
    }
    function myContent() {
        const element =
        document.getElementById("myContent");
        element.scrollIntoView();
    }
    function mySkill() {
        const element =
        document.getElementById("mySkill");
        element.scrollIntoView();
    }
    function myPortfolio() {
        const element =
        document.getElementById("myWork");
        element.scrollIntoView();
    }
    
    function airoButton() {
        const element =
        document.getElementById("myHome");
        element.scrollIntoView();
        
    }
    function airoButton2() {
        const element =
        document.getElementById("myContent");
        element.scrollIntoView();
        
    }
    /*----------- dropdown menu functions ends here------------------------------*/
         
         
    /*----------- functions for airo_button go back home page------------------------------*/
         
       let mybutton1 = document.getElementById("airoButton1");
       let mybutton2 = document.getElementById("airoButton2");
       let mybutton3 = document.getElementById("airoButton3");

       window.onscroll = function() {
        scrollFunction();
        };

      function scrollFunction() {
       const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      // Logic for airoButton
  if (scrollTop > 435 && scrollTop <= 1250) {
    mybutton1.style.display = "block";
  } else {
    mybutton1.style.display = "none";
  }

  // Logic for airoButton2 (example: show between 700px and 1000px)
  if (scrollTop > 1386 && scrollTop <= 1900) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
      
        if (scrollTop > 2000 && scrollTop <= 2300) {
           mybutton3.style.display = "block";
        } 
            else {
           mybutton3.style.display = "none";
  }
}
      /*----------- airo_button go back to home page function ends here------------------------------*/

/*------------------------------auto change images-----------------------------------------------------*/

/*--------- COMPUTER RESPONSIVE IMAGES-----*/
const images = [
   "url('PC1.png')",
   "url('PC2.png')",
   "url('PC3.png')",
   "url('PC4.png')"
  ];

  let index = 0;
  const box = document.getElementById('d333');

  setInterval(() => {
    box.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
  }, 4000);


  /*--------- TABLET RESPONSIVE IMAGES-----*/
const images2 = [
   "url('tab1.png')",
   "url('tab2.png')",
   "url('tab3.png')",
   "url('tab4.png')"
  ];

  let index2 = 0;
  const box2 = document.getElementById('d222');

  setInterval(() => {
    box2.style.backgroundImage = images2[index2];
    index2 = (index2 + 1) % images2.length;
  }, 4000);


  /*--------- MOBILE RESPONSIVE IMAGES-----*/
const images3 = [
   "url('mob1.png')",
   "url('mob2.png')",
   "url('mob3.png')",
   "url('mob4.png')"
  ];

  let index3 = 0;
  const box3 = document.getElementById('d111');

  setInterval(() => {
    box3.style.backgroundImage = images3[index3];
    index3 = (index3 + 1) % images3.length;
  }, 4000);

/*---------copy right date---------*/
document.getElementById('year').textContent = new Date().getfullyear();