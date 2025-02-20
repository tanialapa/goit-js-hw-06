

const listItems = document.querySelectorAll("#categories .item");


console.log(`Number of categories:`, listItems.length);

listItems.forEach((li) => {
    showContent(li)
 })

function showContent(categoryItemEl) {
    const h2 = categoryItemEl.querySelector('h2');
    const li = categoryItemEl.querySelectorAll('li');
    
    console.log(`Category:${h2.textContent}
         Elements: ${li.length}`);

}