// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // a,b,function(){...}

// У массива в итоге 3 элемента - сначала их было 2, + функция.
