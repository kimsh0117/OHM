// mergeSort algorithm
export const mergeSort = array => {
  let left, right;
  if(array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2)
  left = array.slice(0, middle)
  right = array.slice(middle)
  
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left,right) => {
  let result, leftIndex, rightIndex;
  result = []
  leftIndex = 0
  rightIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    if(firstASCII(left[leftIndex]) < firstASCII(right[rightIndex])) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

const firstASCII = string => {
  return string.title.slice(0,1).toLowerCase().charCodeAt()
}
