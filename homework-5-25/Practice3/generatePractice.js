'use strict'

function randomElement(l, r){
  return Math.floor(Math.random*(r-l+1))+l;
}

function sort(input) {
  if (input.length==0) return input;
  var segments=[0, input.length-1];
  for (var i=0; i<segments.length; i+=2)
  {
    
    if (segments[i]==segments[i+1]) continue;

    var mid=(segments[i]+segments[i+1]-((segments[i]+segments[i+1])%2))/2;
    segments.push(segments[i]);
    segments.push(mid);
    segments.push(mid+1);
    segments.push(segments[i+1]); 
  }

  while (segments.length>0)
  {
    var r=segments.pop();
    var l=segments.pop();
    
    if (l==r) continue;
    var mid=(l+r-((l+r)%2))/2;
    var p1=l, p2=mid+1;
    var p3=[];
    for (var i=l; i<=r; i++){
      if (p1>mid){
        p3.push(input[p2]);
        p2++;
      } else if (p2>r){
        p3.push(input[p1]);
        p1++;
      } else if (input[p2]<input[p1]){
        p3.push(input[p2]);
        p2++;
      } else {
        p3.push(input[p1]);
        p1++;
      }
    }
    for (var i=l; i<=r;i++) input[i]=p3[i-l];
    p3=[];
  }
  return input;
}

function search(input, target) {
  var l=0, r=input.length-1;
  if (r<l) return -1;
  while (r>l)
  {
    var mid=(l+r-((l+r)%2))/2;
    if (input[mid]<target) l=mid+1;
    else r=mid;
  }
  
  if (target==input[l]) return l;
  else return -1;
}

function check(input)
{
  for (var i=1; i<input.length; i++) if (input[i]==input[i-1]) return false;
  return true;
}

function generate(testLengthArray){
  var ret=[];
  var obj={
    input: [],
    target: 0,
    output:-1
  }
  var array=[];
  for (let i=0; i<testLengthArray.length; i++)
  {
    var l=testLengthArray[i];
    array=[];
    for (var j=0; j<l; j++) array.push(randomElement(-10000, 10000));
    array=sort(array);

    if (!check(array))  
    {
      i--;
      continue;
    }

    obj["input"]=array;
    setTimeout(function(){
      console.log("lol"+i+" "+l+" "+array.length)
    }, 1000);
    
    if (i==0) obj["target"]=array[0], obj["output"]=0;
    else if (i==1) obj["target"]=array[array.length-1], obj["output"]=array.length-1;
    else if (i==2) 
    {
      var temp=randomElement(1, array.length-2);
      obj["target"]=array[temp], obj["output"]=temp;
    }
    else 
    {
      var temp=randomElement(-10000, 10000);
      obj["target"]=temp, obj["output"]=search(array, temp);
    }
    ret.push(obj);
  }
  return ret;
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}

module.exports = generate
