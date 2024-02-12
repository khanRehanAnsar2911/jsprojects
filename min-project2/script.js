btn.addEventListener("click", function() {

  fetch("https://api.api-ninjas.com/v1/quotes?", {
    method: 'GET',
    headers: {
      'X-Api-Key': 'tsFbXBMysyfI/WVAUR7pPw==hhb5DAOZHCJ5aDK2'
    }
  })
    .then((Response) => Response.json())
    .then((json) => {
      quote.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${json[0].quote} <i class="fa-solid fa-quote-right"></i> `;
      author.innerHTML = "-" + json[0].author;
    })
})

