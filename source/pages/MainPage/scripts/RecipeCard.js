const template = document.createElement('template');
/*
template.innerHTML=`
<style>
* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.recipe-card {
    position: relative;
    width: 200px;
    height: 200px;
    background-size: contain;
    background-size: cover;
    border-radius: 30px;
    
  }
  .grey{
    filter: grayscale(100%);
  }
  
  .recipe-card > span {
    background-color: #c4c4c4;
    position: absolute;
    bottom: 0; 
    left: 0; 
    width: 200px; 
    height: 30px;
    border-radius: 0px 0px 30px 30px;
    text-align: center;
    vertical-align: middle;
    line-height: 30px; 

    // overflow-x: scroll;
  }
</style>

<div class = "recipe-card">
    <span></span>
</div>
`
*/

template.innerHTML = `
<script src="https://kit.fontawesome.com/16e1426982.js" crossorigin="anonymous"></script>
<link src = "./styles/myRecipePage.css" type="stylesheet"> 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<style>
  .grey{
    filter: grayscale(100%);
  }
</style>
<div class = "recipe-card card h-100">
  <img src="" class="card-img-top" alt="Recipe image">
  <div class = "card-title h-100 recipe-title font-weight-light text-center" style="margin-bottom: 2%; margin-top: 2%; margin-left: 2%; margin-right: 2%; display: flex; justify-content: center; align-items: center;">
  </div>
</div>
`
//<div class = "col-md-3 recipe-card">


class RecipeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.recipe-title').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('.card-img-top').src = `url(${this.getAttribute('image')})`
        // super();
        // this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.querySelector('span').innerText = this.getAttribute('name');
        // this.shadowRoot.querySelector('div').style.backgroundImage = `url(${this.getAttribute('image')})`
    }
}


window.customElements.define('recipe-card', RecipeCard);