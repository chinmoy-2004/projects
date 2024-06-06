let left="0123456789abcdef";
let right="0123456789ABCDEF";
let lftclr=hexcolor(left);
let rhtclr=hexcolor(right);
let cont=document.body.querySelector('.container');
cont.style.background='linear-gradient('+`to right,${lftclr},${rhtclr})`;
let spa=document.createElement('span');
spa.innerHTML='linear-gradient('+`to right,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa);
function hexcolor(str){
    let color="#";
    for(let i=0;i<6;i++){
        color=color+str[Math.floor(Math.random()*16)]
    };
    return color;
}
let inp=document.body.querySelector('.deg');
let deg=1;
let add=document.body.querySelector('.add');
inp.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        deg =inp.value;
    cont.style.background='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        spa.innerHTML='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa); 
    }
})
add.addEventListener('click',()=>{
    deg =inp.value;
    cont.style.background='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        spa.innerHTML='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa);
})
let lftbtn=document.body.querySelector('.left');
let rhtbtn=document.body.querySelector('.right');
lftbtn.style.backgroundColor=lftclr;
rhtbtn.style.backgroundColor=rhtclr;

lftbtn.addEventListener('click',()=>{
   lftclr= hexcolor(left);
    lftbtn.style.backgroundColor=lftclr;
    if(deg==1){
        cont.style.background='linear-gradient('+`to right,${lftclr},${rhtclr})`;
        spa.innerHTML='linear-gradient('+`to right,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa);
    }
    else{
        cont.style.background='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        spa.innerHTML='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa);
    }
})
rhtbtn.addEventListener('click',()=>{
    rhtclr=hexcolor(right);
    rhtbtn.style.backgroundColor=rhtclr;
    if(deg==1){
        cont.style.background='linear-gradient('+`to right,${lftclr},${rhtclr})`;
        spa.innerHTML='linear-gradient('+`to right,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa);
    }
    else{
        cont.style.background='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        spa.innerHTML='linear-gradient('+`${deg}deg,${lftclr},${rhtclr})`;
        document.body.querySelector('.copycode').appendChild(spa);
    }
  } )