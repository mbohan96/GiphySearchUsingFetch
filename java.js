const gifForm = document.querySelector("#gif-form");
gifForm.addEventListener("submit", fetchGiphs);

function fetchGiphs(e) {
    event.preventDefault();
    const searchTerm = document.querySelector(".search").value;
    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=100&api_key=14eH9AE8H0VOpN8hyrfwQrO6YrQxQHwH`)
    .then((response) => {return response.json(); })
    .then((resp => {
      
        let dataArray = resp.data
       
        renderGiphs(dataArray);
    }))
    .catch(err => console.log(err));
}

function renderGiphs(dataArray)
 {
  
  const results = document.querySelector(".results");
  let output = '<div class="container">';
  dataArray.forEach((imgData) => 
  
  
  {
    output += `
  <img src="${imgData.images.fixed_width.url}"/>
`;
  });
  document.querySelector('.results').innerHTML = output;
}
