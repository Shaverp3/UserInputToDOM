// Some starter code
const container = document.querySelector("#itemsList")

document.querySelector("#saveToWishList").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const item = document.querySelector("#fav-thing").value
    const where = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            
            <div>I can buy ${item} at ${where}</div>
        </section>
    `

})