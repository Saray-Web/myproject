let url = "http://localhost:3000/cards"
let demo = document.getElementById('products')
let menus = document.querySelectorAll('.choose-manu a')
let allData = []


async function fetchdata(data){
    const response = await axios.get(url)
    let cards = data || response.data
    if(!data) allData = cards 
    demo.innerHTML = ''
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
        `
    });
}
fetchdata()

menus.forEach(element => {
    element.addEventListener('click', function(e){
        e.preventDefault()
        let category = this.dataset.category

        if(category === 'all'){
            fetchdata(allData)
        }
        else{
            let filter = allData.filter(item => item.category === category)
            fetchdata(filter)
        }
    })
})


