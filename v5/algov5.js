/*
let moneroWallet = require('monero-nodejs'); 
let Wallet = new moneroWallet(); 

function createWallet(){
    Wallet.create_wallet('monero_wallet', 'PASSWORD', 'English');
}

function openWallet(){
    Wallet.open_wallet('monero_wallet', 'PASSWORD'); 
}

function ifWallet(){
    if(openWallet = error){
        createWallet(); 
    }else{
        let data = Wallet.address(); 
    }
}
*/ // gonna keep this commented out until the code is verified to work as good as the c code

function displayPrice(data){
	document.getElementById("displayPrice").innerHTML = data;
} 

function currentPrice(){
    let url = 'https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BTC,USD,CAD';

    return fetch(url)
        .then(res => res.json())
        .then(out => {
            console.log(out.CAD);
            return out.CAD;
        })
        .catch(err => {
            throw err;
        });
}

async function variables() {
    
    let current = await currentPrice(); 

    // console.log(current); 

    let data = {
      name: 'monero',// crypto
      address: 'wallet', // crypto wallet 
      currentPrice: current,
      averagePrice: 123, 
      volitilityL: 112, 
      volitilityH: 140, 
      balance:150, 
      stockcount: 1, 
    //   key: bigballs, 
      lastPrice: 123, // will hold the last stock price (used to help trailing stop loss) 
    };
    return data;
}
  
function math() {
    let data = variables();
    
}

function buy(){
    let data = variables(); 
    data.address; // will likely be integrated into the api that the buy function will need this 
    data.key; // will likely need this in the api 
    // api.buy 
}

function sell(){
    let data = variables(); 
    data.address; // will likely be integrated into the api that the buy function will need this 
    data.key; // will likely need this in the api 
    // api.sell 
}

function ifBuy(){
    let data = variables(); 
    if(data.currentPrice > data.volitilityH){
        if(data.currentPrice < data.lastPrice){
            buy(); 
        }else{
            console.log('still rising'); 
        }
    }
}

function ifSell(){
   
    let data = variables(); 
   
    if(data.currentPrice < data.volitilityH){
        if(data.currentPrice > data.lastPrice){
            sell(); 
        }else{
            console.log('still falling'); 
        }
    }
}

async function displayCurrent(){
  
    let data = await variables(); 
    
    displayPrice(data.currentPrice)
    
}

function main(){
   
    currentPrice();
   
    displayCurrent();

}

function mainLoop(){
    let i = 2; 
    while(i > 1){
        setTimeout(main(), 144/*miliseconds*/)
    }
} 
