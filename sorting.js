'use strict';


//============================================ QuickSort ======================================>


/*
QuickSort
Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to to sort is 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
*/





// function quickSort(array, start=0, end=array.length) {
//   // start = start;
//   // end = end;
//   if (start >= end) {
//     return array;
//   }
//   const middle = partition(array, start, end);
//   array = quickSort(array, start, middle);
//   array = quickSort(array, middle + 1, end);
//   return array;
// }


// function partition(array, start, end) {
//   const pivot = array[end - 1];
//   let j = start;
//   for (let i=start; i<end - 1; i++) {
//     if (array[i] <= pivot) {
//       swap(array, i, j);
//       j++;
//     }
//   }
//   swap(array, end-1, j);
//   return j;
// }


// function swap(array, index1, index2) {
//   let temp = array[index2];
//   array[index2] = array[index1];
//   array[index1] = temp;
//   return array;
// }


const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];



let counter = 0;
// console.log(checkIfSorted(quickSort(sortArr)));

//============================================ Implementation of Quicksort ======================================>



const qsort = (array, start=0, end=array.length) => {
  counter++;
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qsort(array,start,middle);
  array = qsort(array, middle+1, end);
  return array;
};


const partition = (array, start, end) => {
  
  const pivot = array[end-1];
  let j=start;
  for (let i=start;i<end-1; i++) {
    if (array[i] <= pivot) {
      swap(array,i,j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};


const swap = (array, index1, index2) => {
  let temp = array[index2];
  array[index2] = array[index1];
  array[index1] = temp;
  return array;
};


// qsort(sortArr);


//============================================ Merge Sort ======================================>


const mSort = array => {
  counter++;
  if (array.length <= 1) {
    return array;
  }

  const middle  = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle, array.length);


  left = mSort(left);
  right=mSort(right);
  return merge(left,right,array);
};





const merge = (left,right,array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }


  for (let i=leftIndex; i< left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i=rightIndex;i<right.length; i++) {
    array[outputIndex++] = right[i];
  }

  return array;
};


// console.log(mSort([5,4,3,2,1]));



//============================================ Sort In Place ======================================>



const sortArr = (arr, min, max) => {
  
  const buckets = max-min+1;
  const storage = new Array(buckets);
  
  for(let i=0; i<arr.length;i++) {
    storage[arr[i]-min] = arr[i];
  }
  
  // console.log(storage);
  
  let newStorage = storage.filter(elm => {
    if (typeof elm !== 'number') {
      return false;
    }
    return true;
  });

  return newStorage;
};


// console.log(sortArr([26,32,10,5,1,0], 0, 32));


//============================================ Sort in Place ======================================>

/*
Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array).
*/

const swapNum = (arr, first ,second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second]= temp;
};

let myArr = [1,2,3,4,5,6,7,8,9,10];

const randomSort = arr => {
  for(let i=0;i<arr.length;i++) {
    let randomIndex = Math.floor(Math.random() * (arr.length-1));
    swap(arr, i, randomIndex);
  }
  return arr;
};

//================================== Book Sort ============================>

/*
Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm?
*/

let books = [
  {
    title:'Great Divorce, The',
  },
  {
    title:'Everlasting Man, The',
  },
  {
    title:'Great Gatsby, The',
  },
  {
    title:'Low Level Hell',
  },
  {
    title:'Mere Christianity',
  },
  {
    title:'Miracle of Theism, The',
  },
  {
    title:'Out of the Silent Planet',
  }
];

const bookSort = books => {
  for(let i=0;i<books.length;i++) {
    for (let j=1;j<books.length;j++) {
      console.log('i: ', books[i].title[0].charCodeAt(), 'j: ',books[j].title[0].charCodeAt());
      if (books[i].title[0].charCodeAt() > books[j].title[0].charCodeAt()) {
        console.log('ran');
        let temp = books[j];
        books[j]= books[i];
        books[i] = temp;
      }
    }
  }
  return books;
};




//============================================ Main function ======================================>
function main() {
  // mSort(sortArr);
  // console.log('Iterations for Msort', counter);
  // counter = 0;
  // qsort(sortArr);
  // console.log('Iterations for qsort', counter);
  // console.log(randomSort(arr));
  console.log(bookSort(books));
}

main();