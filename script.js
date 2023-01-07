// Using .then

// let a = []
// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
//     .then((res) => res.json())
//     .then((res) => {
//         for(let i=0; i<res.length; i++) {
//             a.push({
//                 id: res[i].id,
//                 name: res[i].name,
//                 image: res[i].image,
//                 symbol: res[i].symbol,
//                 current_price: res[i].current_price,
//                 total_volume: res[i].total_volume,
//                 market_cap: res[i].market_cap,
//                 price_change_24h: res[i].price_change_24h,
//                 ath_change_percentage: res[i].ath_change_percentage 
//             })
//         }
//         console.log(a)
//         return a;
//     })
//     .then((data) => {
//         console.log(data)
//         function insertData(arrayData) {
//             for(let i=0; i<arrayData.length; i++) {
//                 const tBodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
//                 const newRow = tBodyRef.insertRow();
                
//                 const name = newRow.insertCell();
//                 const img = document.createElement('img');
//                 img.src = arrayData[i].image;
//                 img.classList.add("img-style");
//                 name.classList.add("box");
//                 name.appendChild(img);
//                 const newName = document.createTextNode(arrayData[i].name); 
//                 name.appendChild(newName);
        
//                 const symbol = newRow.insertCell();
//                 const newSysmbol = document.createTextNode(arrayData[i].symbol.toUpperCase());
//                 symbol.appendChild(newSysmbol);

//                 const curPrice = newRow.insertCell();
//                 const newCurPrice = document.createTextNode("$" + arrayData[i].current_price);
//                 curPrice.appendChild(newCurPrice);

//                 const totalVolume = newRow.insertCell();
//                 let tv = numberWithCommas(arrayData[i].total_volume);
//                 const newTotalVolume = document.createTextNode("$" + tv);
//                 totalVolume.appendChild(newTotalVolume);

//                 const athChange = newRow.insertCell();
//                 let num = arrayData[i].ath_change_percentage;
//                 num = (Math.round(num * 100) / 100).toFixed(2);
//                 if(num < 0) {
//                     athChange.style.color = "red";
//                 }else {
//                     athChange.style.color = "green";
//                 }
//                 const newAthChange = document.createTextNode(num + "%");
//                 athChange.appendChild(newAthChange);

//                 const marketCap = newRow.insertCell();
//                 const newMarketCap = document.createTextNode("Mkt Cap : $" + arrayData[i].market_cap);
//                 marketCap.appendChild(newMarketCap);
//             }
//         }
//         insertData(data);
//     })
//     .catch(error => console.log(error))


// USING ASYNC AWAIT

let data = [];
async function getResponse() {
    const response = await fetch( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false" );
    data = await response.json();
    insertData(data);
}
getResponse();

function insertData(arrayData) {
    for(let i=0; i<arrayData.length; i++) {
        const tBodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
        const newRow = tBodyRef.insertRow();
        
        const name = newRow.insertCell();
        const img = document.createElement('img');
        img.src = arrayData[i].image;
        img.classList.add("img-style");
        name.classList.add("box");
        name.appendChild(img);
        const newName = document.createTextNode(arrayData[i].name); 
        name.appendChild(newName);

        const symbol = newRow.insertCell();
        const newSysmbol = document.createTextNode(arrayData[i].symbol.toUpperCase());
        symbol.appendChild(newSysmbol);

        const curPrice = newRow.insertCell();
        const newCurPrice = document.createTextNode("$" + arrayData[i].current_price);
        curPrice.appendChild(newCurPrice);

        const totalVolume = newRow.insertCell();
        let tv = numberWithCommas(arrayData[i].total_volume);
        const newTotalVolume = document.createTextNode("$" + tv);
        totalVolume.appendChild(newTotalVolume);

        const athChange = newRow.insertCell();
        let num = arrayData[i].ath_change_percentage;
        num = (Math.round(num * 100) / 100).toFixed(2);
        if(num < 0) {
            athChange.style.color = "red";
        }else {
            athChange.style.color = "green";
        }
        const newAthChange = document.createTextNode(num + "%");
        athChange.appendChild(newAthChange);

        const marketCap = newRow.insertCell();
        const mCap = numberWithCommas(arrayData[i].market_cap);
        const newMarketCap = document.createTextNode("Mkt Cap : $" + mCap);
        marketCap.appendChild(newMarketCap);
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}