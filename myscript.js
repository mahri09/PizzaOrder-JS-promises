const pizzaType = document.getElementById('pizzaSelect');
const orderBtn = document.getElementById('submit_btn');
const addBtn = document.getElementById('add_btn');

  function wait(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }

  const pizza = [];

  addBtn.onclick=()=>{
    pizza.push(pizzaType.value)
  }

  function cookingTime(toppings = []){
    return new Promise((resolve, reject)=>{
      const time = (500*toppings.length) + 1000;
      if(!toppings.includes('pineapple')){
        console.log('Your order accepted, it will be ready in' + time + ' minut')
        resolve(time);
      } else{
        reject('You cannot add pineapple 🍍, sorry!')
      }
    })
  }

  function cookPizza (toppings = [], time){
    return new Promise ((resolve,reject)=>{
      if(time<5000){
      console.log('your order is in the oven...')
      setTimeout(() => {
        resolve('Here is your pizza 🍕, bon appettito with ingredients ' + toppings.join());
      }, time);
      } else {
        reject("You selected too many itms to bake try again!")
      }
    })
  }

