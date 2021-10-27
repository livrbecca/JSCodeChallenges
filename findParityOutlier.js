function findOutlier(integers){
    const odd = []
    const even = []
  
    integers.forEach((num)=> {
      num % 2 === 0 ? even.push(num) : odd.push(num);
    })
   return odd.length === 1 ? Number(odd) : Number(even)
  }