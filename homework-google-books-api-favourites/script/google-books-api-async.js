
searchButton.addEventListener("click",googleApi);


async function googleApi(event) {
    event.preventDefault();
    const resultsArticle = document.getElementById("results");
    const searchButton = document.getElementById("searchButton");
    const searchTextField = document.getElementById("searchBar").value;
    let searchText = `https://www.googleapis.com/books/v1/volumes?q=${searchTextField}`;
    
    if(searchTextField===""){
         return;
    }
    try{

        const googleApiResult = await fetch(searchText);
        const posts = await googleApiResult.json();
        console.log(posts);
    



        let books = posts.items.map(book =>{
        let card = document.createElement("div");
        card.className = "card";

        let img = new Image();
        img.src=book.volumeInfo.imageLinks.thumbnail;
        
        let title = document.createElement("h1");
        let titleContent = document.createTextNode(book.volumeInfo.title +" : "+ book.volumeInfo.subtitle);
        title.appendChild(titleContent);
        card.appendChild(title);
        let author = document.createElement("p");
        author.className = "author";
        let authorContent = document.createTextNode(book.volumeInfo.authors);
        author.appendChild(authorContent);
        card.appendChild(author);
        let description = document.createElement("p");
        let descriptionContent = document.createTextNode(book.searchInfo.textSnippet);
        description.appendChild(descriptionContent);
        card.appendChild(description);
        
        let favouritesButton = document.createElement("button");
        let favouritesButtonText = document.createTextNode("Add to favourites");
        favouritesButton.appendChild(favouritesButtonText);
        card.appendChild(favouritesButton);


        

        resultsArticle.appendChild(card);
            return card;

        
    })
}catch(err){
    console.log(`Error: ${err.name}, ${err.message}, ${err.stack}`)
}

}