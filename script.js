const btn=document.getElementById('btn');
const tb=document.getElementById('tb');
const cf=document.getElementById('cf');
const fc=document.getElementById('fc');
const result=document.getElementById('result');
const btn1=document.getElementById('btn1');
let temp;
function check()
{
   if(cf.checked)
    {
        temp=tb.value;
        temp=(temp * 9 / 5)+ 32;
        result.textContent=temp +"°F";
    }
    else if(fc.checked)
        {
            temp=tb.value;
        temp=(temp - 32 )*(5/9);
        result.textContent=temp +"°C";
    
        }
    else
    {
        result.textContent="Please Select a Unit "
    }
}
   
btn1.onclick=function clear ()
    {
        
    let form=document.getElementById('f');
form.reset();  
result.textContent='';  
}
