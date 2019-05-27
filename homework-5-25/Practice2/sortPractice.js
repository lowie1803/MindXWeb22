'use strict'

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

module.exports = sort
