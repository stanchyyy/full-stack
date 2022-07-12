async function googleApi(searchText) {
    let resultsElem = document.getElementById("results")
    bookName="react"

    if(searchText===""){
        alert("Please enter valid book name.");
        return;
    }
    
    try{
    const bookResponse = await fetch('https://www.googleapis.com/books/v1/volumes?q=react');
    const googleBooks = await bookResponse.json();
    console.log(googleBooks.Items);
    let books = googleBooks.items.map(book =>{
        let card = document.createElement("div");
        card.className = "card";
        let img = new Image();
        img.src=book.volumeInfo.imageLinks.thumbnail;
        card.appendChild(img);
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

        resultsElem.appendChild(card);
            return card;

        
    })

    }catch(err) {
        console.log(`Error: ${err}`)
    }


}

googleApi()