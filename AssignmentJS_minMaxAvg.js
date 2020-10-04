function maxMinAvg(num) {
  var temp;
    var min=num[0];
    var max=0;;
    var sum=0;
    for (var i = 0; i < num.length; i++) {
      temp = num[i];
        if (temp < num[i]) {
            min = temp;
        }else{
            max = num[i];
        }
        
        sum = sum + num[i];
    }
    var avg = sum / num.length;
    var z = [min,max,avg];
  return z;
  }

var getinfo = maxMinAvg([5,10,15,20]);
document.write("The min is "+getinfo[0]+"<br/>");
document.write("The max is "+getinfo[1]+"<br/>");
document.write("The avg is "+getinfo[2]+"<br/>");