function dataPrint(fetchedData) {
    for(let i of fetchedData) {
        let divEle = document.createElement("div");
        divEle.classList.add("each-div")
        rootEle.appendChild(divEle)

        let titleEle = document.createElement("h4");
        titleEle.textContent = i.title
        divEle.appendChild(titleEle)

        let bodyEle = document.createElement("p");
        bodyEle.textContent = i.body
        divEle.appendChild(bodyEle)
        console.log(i);
    }
}

const rootEle = document.getElementById("root")

function dataFetch() {
    rootEle.innerHTML = ""
    const url = "https://jsonplaceholder.typicode.com/posts"

    const data = fetch(url)
    data
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        dataPrint(jsonData)
    })

}
