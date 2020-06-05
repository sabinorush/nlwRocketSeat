

function populateUFs () {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then ( states => {

            for( const state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}`

            }
    })
}

populateUFs()


function getCities (event) {
    const citySelect = document.querySelector('[name=city]')
    const stateInput = document.querySelector('[name=state]')

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then( res => res.json() )
    .then ( cities => {
        
            for( const city of cities ) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}`

            }

            citySelect.disabled = false
    })
}



 document
     .querySelector('select[name=uf]')
     .addEventListener('change', getCities)





//Itens de coleta
//pegar todos os li's

const itemsToCollet = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollet) {
    item.addEventListener("click", handleSelecteditem)
}

const collectedItems = document.querySelector("input[name=items]")    

let selectedItems = []

function handleSelecteditem(event) {

    const itemLi = event.target

    // add or remove a class with javascript
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    // verificar se existem itens selecionados, se sim
    //pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId // isso será true ou false
            return itemFound

    })

    // se ja estiver selecionado, tirar da selecao
    if (alreadySelected >= 0) {
        //tirara da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferente = item != itemId
            return itemIsDifferente
        })
        selectedItems = filteredItems
    
    } else {
    //se nao estiver selecionado, adicionar a selecao
    selectedItems.push(itemId)
    }

    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
    
}