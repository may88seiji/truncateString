//1
function truncateString(str, num) {
 var j = str.length;
 var l = str.slice(0,num);
 var k = num - 3;
 var m = str.slice(0,k);


  if(str.length<=3){
    return l+= "...";
  }else if(str.length<=num){
    return str;
  }else if(num<3){
    return str.slice(0,2) + "...";
  }else{
    m += "...";
    return m;
  }
}
//2
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
//3
function cut(str, len){
    var r = new RegExp('^(^(.{' +len+ '}).+(\.{3})|^(.{1,' +(len-1)+ '})(\.{3}))$');
    return (str+"...").replace(r, "$2$3$4");
}
