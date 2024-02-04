let thisbutton = document.getElementById("thisbutton");

function delay(ms) {
    return new Promise((resolve, reject) => {
      thisbutton.addEventListener("click", () => {
        setTimeout(() => resolve(), ms);
      });
    });
  }

delay(3000).then(() => alert('выполнилось через 3 секунды'));

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);