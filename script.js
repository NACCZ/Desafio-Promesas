
const downloadData = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";



    try {
      const response = await fetch(url);
      const datos = await response.json();
      //console.log(data.message)
      datos.forEach((datos) => {
        if (datos.id <= 20) document.write(`<p> ${datos.id} - ${datos.title}</p>`);
      });
    } catch (e) {
      console.log(e);
    }
  }


const mensaje= ()=> {
  return new Promise ((resolve)=>setTimeout(()=>{resolve(`informacion enviada`)},3000))
  }


const req6= async()=>{
  const resp = await mensaje();
  console.log(resp);
}

downloadData();
req6();

