/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var preferences = preferences;
  for (var i = 0, love = 0; i < preferences.length; i++) {
    var n = i;
    var k = preferences[n]; // 2
    var m = preferences[k - 1]; // 3
    var x = preferences[m - 1];
    
    if (x == n + 1 && k > n + 1 && m > n + 1) {
        love += 1;
    }
  };
  return love;
};
