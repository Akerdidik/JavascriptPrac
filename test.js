document.write("Sailauov Didar CS2119-N");
        var a = new Date();
        var g = new Date('2024','05','18');
        document.write("<br>");
        var b = a.getDay();
        var d = a.getMonth();
        var f = g.getTime();
        var e = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var c = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        document.write("Year: " + a.getFullYear());
        document.write("<br>");
        document.write("Today is: " + c[b]);
        document.write("<br>");
        document.write("Date: " + a.getDate());
        document.write("<br>");
        document.write("Month: " + e[d]);
        document.write("<br>");
        document.write("Current time is: " +Math.floor(a.getHours()/10)+a.getHours()%10+":"+
        Math.floor(a.getMinutes()/10)+a.getMinutes()%10+":"+Math.floor(a.getSeconds()/10)+a.getSeconds()%10);
        document.write("<br>");
        document.write(Math.floor((f-a.getTime())/1000/60/60/24)+1 + " days left until the freedom!");
        document.write("<br>");
        function mult(){
          var d1=0;
          var b1 = document.getElementById("imba").value;
          var b2 = document.getElementById("imbal").value;
          d1=b1*b2;
          document.getElementById('res').innerHTML=d1;
        }
        function div(){
          var d1=0;
          var b1 = document.getElementById("imba").value;
          var b2 = document.getElementById("imbal").value;
          d1=Math.floor(b1/b2);
          document.getElementById('res').innerHTML=d1;
        }
