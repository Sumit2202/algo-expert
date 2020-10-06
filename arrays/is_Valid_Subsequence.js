function isValidSubsequence(array, sequence) {
    // Write your code here.
      let leftIdx = 0, targetIdx = 0;
      let rightIdx = array.length - 1;
  
      while(leftIdx < rightIdx) {
          if(sequence[targetIdx] == array[leftIdx]) {
              targetIdx++; 
          }
          leftIdx++;
      }
      return targetIdx == sequence.length-1;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;

  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1,6,-1,10]);