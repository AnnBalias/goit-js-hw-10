import"./assets/styles-CJHj4lpN.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("form");i.addEventListener("submit",l);function l(f){f.preventDefault();const t=f.target.elements.delay.value,s=f.target.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{s==="fulfilled"?e(`Fulfilled promise in ${t}ms`):r(`Rejected promise in ${t}ms`)},t)}).then(e=>{o.success({position:"topRight",title:"OK",message:`${e}`,imageWidth:24,titleColor:"#ffffff",messageColor:"#ffffff",iconColor:"#ffffff"})}).catch(e=>{o.error({position:"topRight",title:"Error",message:`${e}`,imageWidth:24,titleColor:"#ffffff",messageColor:"#ffffff",iconColor:"#ffffff"})}).finally(()=>i.reset())}
//# sourceMappingURL=2-snackbar.js.map
