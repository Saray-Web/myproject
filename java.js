import { cardsData } from './import.js';
let demo = document.getElementById('products');
let menus = document.querySelectorAll('.choose-manu a');
let allData = cardsData.cards; 
function fetchdata(data){
    let cards = data || allData; 
    demo.innerHTML = '';         
    cards.forEach(element => {
        demo.innerHTML += `
            <div class="cards">
                <div class="image">
                    <img src="${element.image}" />
                </div>
                <div class="title-decs">
                    <h3>${element.title}</h3>
                    <p>${element.description}</p>
                    <div class="price">
                        <h3>${element.price} $</h3>
                        <span>🛒</span>
                    </div>
                </div>
            </div>
        `;
    });
}
fetchdata(allData);
menus.forEach(element => {
    element.addEventListener('click', function(e){
        e.preventDefault();
        let category = this.dataset.category;

        if(category === 'all'){
            fetchdata(allData);
        } else {
            let filter = allData.filter(item => item.category === category);
            fetchdata(filter);
        }
    });
});