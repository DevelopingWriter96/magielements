import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>The Elements of Magic</h1>
  
  <h2><a class="fire">Fire</a></h2>

  <h2><a class="water">Water</a></h2>

  <h2><a class="sky">Sky</a></h2>

  <h2><a class="earth">Earth</a></h2>

  <h2><a class="mind">Mind</a></h2>

  <h2><a class="shape">Shape</a></h2>

`

setupCounter(document.querySelector('#counter'))
