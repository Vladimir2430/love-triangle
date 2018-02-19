/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  var count=0;
  for (let i=1; i<=preferences.length; i++) {
    if ((preferences.indexOf(i)>=0) && (preferences.indexOf(i+1)>=0) && (preferences.indexOf(i+2)>=0)) {count+=1;
    } else {return count;}
  }
};
