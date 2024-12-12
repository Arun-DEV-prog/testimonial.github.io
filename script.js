const testimonial=[
{
    name:'cherise G',
    photoUrl:'/testimonial/download.jpg',
    text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quaerat quisquam velit eaque, rerum delectus, magni vel aut amet modi dicta dolore alias sunt fugit accusantium dolorum. Error, sint vel?'
},
 {
    name:'Rosetta Q',
    photoUrl:'/testimonial/images.jpg',
    text:'I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.'
 }

];

const imgEL=document.querySelector('img');
const textEl=document.querySelector('.text');
const usernameEl=document.querySelector('.username');

let idx=0;

 function updateTestimonial(){
     const{name,photoUrl,text}=testimonial[idx];
      imgEL.src=photoUrl;
      textEl.innerHTML=text;
      usernameEl.innerHTML=name;
      idx++;
       if(idx===testimonial.length){
         idx=0;
       }
      setTimeout(()=>{
         updateTestimonial();
      },3000);
 }

 updateTestimonial();