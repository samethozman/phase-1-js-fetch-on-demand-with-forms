const init = () => {
    const inputForm = document.querySelector('form');
    //console.log(form);
  
    inputForm.addEventListener('submit', function (event) {
      event.preventDefault();
      //console.log(e.target['searchByID'].value);
      //console.log(e.target.children[1].value);
      //console.log(document.querySelector('#searchByID').value)
      const input = document.querySelector('input#searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        // const movieResult = document.createElement('p');
        // document.querySelector('h4').appendChild(movieResult);
        // console.log(data);
        // movieResult.textContent = (data.title);
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = data.title;
        summary.innerText = data.summary;
      })
    }) 
  }
  
  document.addEventListener('DOMContentLoaded', init);