

const pro01 = document.getElementById('pro-1')
const pro02 = document.getElementById('pro-2')
const pro03 = document.getElementById('pro-3')
const pro04 = document.getElementById('pro-4')
const pro05 = document.getElementById('pro-5')
const pro06 = document.getElementById('pro-6')
const pro07 = document.getElementById('pro-7')
const pro08 = document.getElementById('pro-8')
const pro09 = document.getElementById('pro-9')
const pro10 = document.getElementById('pro-10')
const pro11 = document.getElementById('pro-11')
const pro12 = document.getElementById('pro-12')
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
pro07.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/DSC00400.webp')
})
pro08.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1CN.webp')
})
pro09.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1CV.webp')
})
pro10.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/img1CA.webp')
})
pro11.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/DSC00410.webp')
})
pro12.addEventListener('click', ()=>{
    cambiarStyle('images/POLOS/DSC00427.webp')
})
const cambiarStyle = (url)=> {
    imgProduct.setAttribute("style", `--url : url(${url})`);

    
}