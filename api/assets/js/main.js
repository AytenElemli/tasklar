let row= document.querySelector(".row");

axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {

console.log(resp.data)
    for (let i = 0; i < resp.data.length; i++) {
       row.innerHTML +=` <div class="card col-4">
       <div class="card-body">
           <h5 class="card-title">${resp.data[i].title}</h5>
           <p class="card-text">${resp.data[i].body}</p>
       </div> 
       </div>`
    }
});
