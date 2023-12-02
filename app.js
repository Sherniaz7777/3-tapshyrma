const h1=document.querySelector('h1')
const input=document.querySelector('input')

const ussername=['anna', 'aziza','civic','rever','nun','serres','nasan' ]


input.onchange=()=>{
    if (ussername[0] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      } else if (ussername[1] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      } else if (ussername[2] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      } else if (ussername[3] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      } else if (ussername[4] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      } else if (ussername[5] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      } else if (ussername[6] === input.value) {
        h1.innerHTML = input.value + ' Туура';
      }
       else{
    h1.innerHTML=input.value+' Туура эмес'
}
}


