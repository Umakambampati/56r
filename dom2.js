   
    let button1=document.getElementById("btn1");
    let message=document.getElementById("msg");
    button1.onclick=function(){document.body.style.backgroundColor="red";
       message.innerText="Current color:red";
    }
    let button2=document.getElementById("btn2");
    button2.onclick=function(){document.body.style.backgroundColor="blue";
        message.innerText="Current color:blue";
    }
    let button3=document.getElementById("btn3");
    button3.onclick=function(){document.body.style.backgroundColor="green";
        message.innerText="Current color:green";
    }
    let button4=document.getElementById("btn4");
    button4.onclick=function(){document.body.style.backgroundColor="orange";
        message.innerText="Current color:orange";
    }
    let button5=document.getElementById("btn5");
    button5.onclick=function(){document.body.style.backgroundColor="white";
        message.innerText="";
    }

