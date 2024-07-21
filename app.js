let humberger = document.querySelector("#humberger")
let menu = document.querySelector("#humberger_menu")
let menu_items = document.querySelectorAll('.menu_line')

let h_links = document.querySelectorAll('.hLink')

let body = document.querySelector('body')
let moon = document.querySelector('.moon')

console.log(menu_items)

console.log(h_links)

humberger.addEventListener('click',()=>{
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    menu_items.forEach((item)=>{
        item.classList.toggle('bg-white')
        item.classList.toggle('bg-black')

        //console.log(item)
    })
})


h_links.forEach( (item_link) =>{
    item_link.addEventListener('click',()=>{
        menu.classList.toggle('flex')
        menu.classList.toggle('hidden')
    
        menu_items.forEach((item)=>{
            item.classList.toggle('bg-white')
            item.classList.toggle('bg-black')
    
            //console.log(item)
        })
    })
} )


moon.addEventListener('click',()=>{
   body.classList.toggle('dark')
})