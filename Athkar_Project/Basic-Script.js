var x1=new Date();

var x2=x1.getHours();
var x3=x1.getMinutes();
var x4=x1.getSeconds();

var sys="AM";

if(x2 == 0)
    {
        x2=12;
    }
else
    if(x2 > 12)
        {
            x2=x2-12;
            sys="PM";
        }
  if(x2 < 10)
     {
     x2="0" + x2;
     }

if(x3 < 10)
     {
     x3="0" + x3;
     }
    
if(x4 < 10)
     {
     x4="0" + x4;
     }

if(x2==5 && x3==00 && x4==00)
{
    alert("أذكار المساء");
}
else
    if(x2==3 && x3==00 && x4==00)
        {
             alert("أذكار اليوم و الليلة");
        }
else
    if(x2==16 && x3==00 && x4==00)
        {
          alert("أذكار الصباح");  
        }
else 
    if(x2==11 && x3==00 && x4==00)
        {
            alert("أذكار النوم");
        }
else 
    if(x2==15 && x3==00 && x4==00)
        {
             alert("أذكار الأستيقاظ");
        }
