const pizzaType = document.getElementById('pizzaSelect');
const orderBtn = document.getElementById('submit_btn');
const addBtn = document.getElementById('add_btn');
const orderResult = document.getElementById('order_result')

function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

const pizza = [];

addBtn.onclick=()=>{
  pizza.push(pizzaType.value);
  console.log(pizza)
  orderResult.innerHTML = pizza.join(', ')
}

function cookingTime(toppings){
  return new Promise((resolve, reject)=>{
    const time = (500*toppings.length) + 1000;
    if(!toppings.includes('pineapple')){
      console.log('Your order accepted, it will be ready in ' + time/1000 + ' minut')
      orderResult.innerHTML = 'Your order accepted, it will be ready in ' + time/1000 + ' minut'
      resolve(time);
    } else{
      reject('You cannot add pineapple 🍍, sorry!');
      orderResult.innerHTML = 'You cannot add pineapple 🍍, sorry!'
    }
  })
}

function cookPizza (toppings, time){
  return new Promise ((resolve,reject)=>{
    if(time<6000){
    console.log('Your order is in the oven...')
    setTimeout(() => {
      resolve('Here is your pizza 🍕 with ingredients : ' + toppings.join(',') + '.  Bon appettito');
    }, time);
    } else {
      reject("You selected too many items to bake try again!")
    }
  })
}

async function orderPizza(pizza){
  const cookTime = await cookingTime(pizza);
  const cookedPizza = await cookPizza(pizza, cookTime);
  await wait(2000);
  console.log(cookedPizza);
  orderResult.innerHTML = cookedPizza
}

orderBtn.onclick=()=>{
  orderPizza(pizza).catch(console.log);
  // pizza=[];
}
