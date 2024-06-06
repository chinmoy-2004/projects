let btn=document.body.querySelector('.generate');
let inp=document.body.querySelector('.inp')
let qrimg=document.body.querySelector('.qrimg')
btn.addEventListener('click',()=>{
    if(inp.value===''){
        if(document.body.firstElementChild.classList.contains('clickcontain')){
            document.body.firstElementChild.classList.remove('clickcontain');
            document.body.firstElementChild.classList.add('container');
            qrimg.src='';
        }
        document.body.querySelector('.container').firstElementChild.classList.add('error');
        setTimeout(() => {
            document.body.querySelector('.container').firstElementChild.classList.remove('error'); 
        },1000);
    }
    else{
        qrimg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+inp.value;
    document.body.firstElementChild.classList.remove('container');
    document.body.firstElementChild.classList.add('clickcontain');
    }
    inp.value='';
})