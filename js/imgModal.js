

const pro01 = document.getElementById('pro-1')
const pro02 = document.getElementById('pro-2')
const pro03 = document.getElementById('pro-3')
const pro04 = document.getElementById('pro-4')
const pro05 = document.getElementById('pro-5')
const pro06 = document.getElementById('pro-6')
const imgProduct = document.getElementById('img-product')


pro01.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1CA.webp')
})
pro02.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1LR.webp')
})
pro03.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1B.webp')
})
pro04.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1PBn.webp')
})
pro05.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1PA.webp')
})
pro06.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img2TN.webp')
})

const cambiarStyle = (url)=> {
    imgProduct.setAttribute("style", `--url : url(${url})`);

    
}