/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

////////////////////////




const users = ['crsullivan','tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'brandleyj', 'tonyrkovar', 'kmcknight1', 'EvanAntunano', 'umekow', 'dmaack', 'rrrbba'];

// tetondan
// dustinmyers
// justsml
// luishrd
// bigknell


/////////////////////////////
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

*/
// users.forEach(user => {
//   axios.get(`https://api.ghchart.rshah.org/`)

//   .then (data => {
//      const cal = newCard(data.calendar)
//      const cards = document.querySelector('.calendar')
//      cards.appendChild(cal)
//    })
// try {
  
// } catch (error) {
//   document.querySelector('.cards').textContent = 'Retrieval Error Detecting, Commencing Motherboard Combustion.'
// }
// })
  

users.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)

  .then (data => {
     const card = newCard(data.data)
     const cards = document.querySelector('.cards')
     cards.appendChild(card)
   })
try {
  
} catch (error) {
  document.querySelector('.cards').textContent = 'Retrieval Error Detecting, Commencing Motherboard Combustion.'
}
})

const newCard = (info)=> {

//Elements

  const card = document.createElement('div');
  const img = document.createElement('img')
  const data = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const calendar = document.createElement('img');

  //Appends

  card.appendChild(img);
  card.classList.add('card');
  img.src = info.avatar_url;
 
 card.appendChild(data);
 data.classList.add('card-Info')

  data.appendChild(name);
  name.classList.add('name');
  name.textContent = info.name;

 data.appendChild(username);
 username.classList.add('username');
 username.textContent = `github.com/${info.login}`;

 data.appendChild(location);
 location.textContent = `Location: ${info.location}`;

 data.appendChild(profile);
 profile.textContent = info.profile;

 data.appendChild(followers);
 followers.textContent =`Followed by ${info.followers} users`;

 data.appendChild(following);
 following.textContent =`Following ${info.following} users`;

 data.appendChild(bio);
 bio.textContent = `Bio: ${info.bio}`;

 data.appendChild(calendar);
 card.classList.add('calendar');
 calendar.src = `http://ghchart.rshah.org/${info.login}`;

  return card;
}