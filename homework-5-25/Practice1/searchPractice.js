'use strict'

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

module.exports = search
