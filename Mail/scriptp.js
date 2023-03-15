const db = firebase.firestore();
const mylist = document.getElementById('mylist');

window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await db.collection('ver2').get();
  
  const divs = querySnapshot.docs.map(doc => {
    const { sdsd } = doc.data();
    return `<div>${sdsd}</div>`;
  });
  
  const html = divs.join('');
  mylist.insertAdjacentHTML('beforeend', html);
});

const scr = document.createElement('script');
scr.src = 'scripts.js';
document.body.appendChild(scr);

