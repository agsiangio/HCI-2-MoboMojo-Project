/* script.js - MoboMojo (all pages)
   - Auth (signup/login/logout) via localStorage
   - Navbar (static anchors exist in HTML; this enhances behavior)
   - Profile edit
   - Compatibility checker (mock rules)
   - Build planner & save
   - Wishlist
   - Store (sample PCX-like prices)
   - Community reviews
   - Notifications
*/

document.addEventListener('DOMContentLoaded', function() {

  // ---------- AUTH UTILITIES ----------
  function safeParse(v, fallback){ try{ return JSON.parse(v); }catch(e){ return fallback; } }
  function getUsers(){ return safeParse(localStorage.getItem('mm_users'), {}); }
  function saveUsers(u){ localStorage.setItem('mm_users', JSON.stringify(u)); }
  function getLogged(){ return localStorage.getItem('mm_logged') || null; }
  function setLogged(email){ if(email) localStorage.setItem('mm_logged', email); else localStorage.removeItem('mm_logged'); }
  function currentUser(){ const e=getLogged(); const u=getUsers(); return e && u[e] ? u[e] : null; }

  // ---------- LOGOUT ----------
  const logoutBtns = document.querySelectorAll('#logoutBtn');
  if (logoutBtns.length > 0) {
    logoutBtns.forEach(el => {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        setLogged(null);
        alert('Logged out successfully.');
        window.location.href = 'index.html';
      });
    });
  }

  // ---------- SIGNUP ----------
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('signupName')?.value?.trim();
      const email = document.getElementById('signupEmail')?.value?.trim()?.toLowerCase();
      const password = document.getElementById('signupPassword')?.value;

      if (!name || !email || !password) {
        alert('Please fill out all fields.');
        return;
      }

      let users = getUsers();
      if (users[email]) {
        alert('Account already exists. Please log in instead.');
        window.location.href = 'login.html';
        return;
      }

      users[email] = { name, email, password, builds: [], wishlist: [], notifications: [], reviews: [] };
      saveUsers(users);
      setLogged(email);
      alert('Account created successfully! Redirecting to profile...');
      window.location.href = 'profile.html';
    });
  }

  // ---------- LOGIN ----------
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('loginEmail')?.value?.trim()?.toLowerCase();
      const password = document.getElementById('loginPassword')?.value;

      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }

      const users = getUsers();
      if (users[email] && users[email].password === password) {
        setLogged(email);
        alert(`Welcome back, ${users[email].name}!`);
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid email or password.');
      }
    });
  }

  // ---------- SAMPLE STORE DATA ----------
const SAMPLE_PRICES = {
  "rtx 4070": "₱38,995",
  "ryzen 5600x": "₱9,795",
  "b550 tomahawk": "₱10,250",
  "asus b650m": "₱11,350",
  "ddr4 16gb": "₱2,795",
  "ddr5 32gb": "₱6,995",
  "1tb nvme ssd": "₱4,795",
  "750w psu": "₱4,395",
  "rtx 4080": "₱59,995",
  "ryzen 7800x": "₱18,995",
  "z790 tomahawk": "₱15,995",
  "ddr4 32gb": "₱5,495",
  "ssd 500gb": "₱2,495",
  "550w psu": "₱3,295",
  "amd 5800x": "₱15,995",
  "intel i7-13700k": "₱22,995"
};

// ---------- INDEX PAGE FUNCTIONALITY ----------
const checkBtn = document.getElementById('checkBtn');
const partInput = document.getElementById('partInput');
const resultDiv = document.getElementById('result');

if(checkBtn && partInput && resultDiv) {
  checkBtn.addEventListener('click', () => {
    const q = (partInput.value || '').trim().toLowerCase();
    if(!q){ resultDiv.textContent = 'Enter a part name first.'; return; }
    
    const map = {
      'rtx 4070': { mobo:'Z790-A Pro (LGA1700)', ram:'32GB DDR5 6000MHz', psu:'750W Gold', price:SAMPLE_PRICES['rtx 4070'] },
      'ryzen 5600x': { mobo:'B550 Tomahawk (AM4)', ram:'16GB DDR4 3600MHz', psu:'650W Bronze', price:SAMPLE_PRICES['ryzen 5600x'] },
      'rtx 4080': { mobo:'Z790-A Pro (LGA1700)', ram:'32GB DDR5 6000MHz', psu:'850W Gold', price:SAMPLE_PRICES['rtx 4080'] },
      'ryzen 7800x': { mobo:'B650 Tomahawk (AM5)', ram:'32GB DDR5 6000MHz', psu:'850W Gold', price:SAMPLE_PRICES['ryzen 7800x'] },
      'z790 tomahawk': { mobo:'Z790 Tomahawk (LGA1700)', ram:'32GB DDR5 6000MHz', psu:'750W Gold', price:SAMPLE_PRICES['z790 tomahawk'] },
      'amd 5800x': { mobo:'B550 Tomahawk (AM4)', ram:'32GB DDR4 3600MHz', psu:'750W Gold', price:SAMPLE_PRICES['amd 5800x'] },
      'intel i7-13700k': { mobo:'Z790-A Pro (LGA1700)', ram:'32GB DDR5 6000MHz', psu:'850W Gold', price:SAMPLE_PRICES['intel i7-13700k'] }
    };
    
    const r = map[q];
    if(r){
      resultDiv.innerHTML = `<strong>Matches:</strong><br/>Motherboard: ${r.mobo}<br/>RAM: ${r.ram}<br/>PSU: ${r.psu}<br/><small>Price: ${r.price}</small>`;
    } else {
      resultDiv.textContent = 'No match found (try: RTX 4070, Ryzen 5600X, RTX 4080, Ryzen 7800X, Z790 Tomahawk, AMD 5800X, or Intel i7-13700K).';
    }
  });
}

const priceBtn = document.getElementById('priceBtn');
const priceInput = document.getElementById('priceInput');
const priceResultDiv = document.getElementById('priceResult');

if(priceBtn && priceInput && priceResultDiv) {
  priceBtn.addEventListener('click', () => {
    const q = (priceInput.value || '').trim().toLowerCase();
    if(!q){ priceResultDiv.textContent = 'Enter a part name first.'; return; }
    
    const price = SAMPLE_PRICES[q];
    if(price){
      priceResultDiv.textContent = `${q.toUpperCase()} price: ${price}`;
    } else {
      priceResultDiv.textContent = 'Price not found for this part.';
    }
  });
}
  // ---------- PROFILE ----------
  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    const u = currentUser();
    if (!u) { alert('Please log in first.'); window.location.href='login.html'; return; }
    const nameInput = document.getElementById('profileUsername');
    const emailInput = document.getElementById('profileEmail');
    const passInput = document.getElementById('profilePassword');
    if (nameInput) nameInput.value = u.name || '';
    if (emailInput){ emailInput.value = u.email; emailInput.readOnly = true; }
    if (passInput) passInput.value = u.password || '';
    profileForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const users = getUsers();
      const logged = getLogged();
      users[logged].name = nameInput.value.trim() || users[logged].name;
      if(passInput.value.trim()) users[logged].password = passInput.value.trim();
      saveUsers(users);
      alert('Profile updated successfully!');
      window.location.reload();
    });
  }

  // ---------- DASHBOARD ----------
  const userNameEl = document.getElementById('userName');
  if(userNameEl){
    const u = currentUser();
    if(u) userNameEl.textContent = u.name || u.email;
  }

  const dashboardBuilds = document.getElementById('dashboardBuilds');
  if(dashboardBuilds){
    const u = currentUser();
    if(u && u.builds?.length){
      dashboardBuilds.innerHTML = u.builds.map((b,i)=>`<li><strong>Build ${i+1}</strong> — ${b.parts.join(', ')}</li>`).join('');
    } else {
      dashboardBuilds.innerHTML = '<li>No saved builds yet</li>';
    }
  }

  const dashboardWishlist = document.getElementById('dashboardWishlist');
  if(dashboardWishlist){
    const u = currentUser();
    if(u && u.wishlist?.length) dashboardWishlist.innerHTML = u.wishlist.map(i=>`<li>${i}</li>`).join('');
    else dashboardWishlist.innerHTML = '<li>Your wishlist is empty</li>';
  }

  // ---------- COMPATIBILITY ----------
  const compatBtn = document.getElementById('compatBtn');
  if(compatBtn){
    compatBtn.addEventListener('click', ()=>{
      const q = (document.getElementById('compatInput').value || '').trim().toLowerCase();
      const out = document.getElementById('compatResult');
      if(!q){ out.textContent = 'Enter a part name first.'; return; }
      const map = {
        'rtx 4070': { mobo:'Z790-A Pro (LGA1700)', ram:'32GB DDR5 6000MHz', psu:'750W Gold', price:SAMPLE_PRICES['rtx 4070'] },
        'ryzen 5600x': { mobo:'B550 Tomahawk (AM4)', ram:'16GB DDR4 3600MHz', psu:'650W Bronze', price:SAMPLE_PRICES['ryzen 5600x'] }
      };
      const r = map[q];
      if(r){
        out.innerHTML = `<strong>Matches:</strong><br/>Motherboard: ${r.mobo}<br/>RAM: ${r.ram}<br/>PSU: ${r.psu}<br/><small>Price: ${r.price}</small>`;
      } else {
        out.textContent = 'No match found (try: RTX 4070 or Ryzen 5600X).';
      }
    });
  }

  // ---------- BUILD PLANNER ----------
  const buildForm = document.getElementById('buildForm');
  const buildList = document.getElementById('buildList');
  if(buildForm && buildList){
    buildForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const cpu = document.getElementById('cpu').value.trim();
      const gpu = document.getElementById('gpu').value.trim();
      const mobo = document.getElementById('mobo').value.trim();
      const ram = document.getElementById('ram').value.trim();
      const psu = document.getElementById('psu').value.trim();
      if(!(cpu||gpu||mobo||ram||psu)) return alert('Please add at least one part.');
      const parts = [cpu,gpu,mobo,ram,psu].filter(Boolean);
      const logged = getLogged();
      if(!logged){ alert('Please login first.'); window.location.href='login.html'; return; }
      const users = getUsers();
      users[logged].builds = users[logged].builds || [];
      users[logged].builds.push({ parts, created:Date.now() });
      saveUsers(users);
      alert('Build saved successfully!');
      window.location.href='dashboard.html';
    });
  }

  // ---------- WISHLIST ----------
  const wishlistForm = document.getElementById('wishlistForm');
  const wishlistItems = document.getElementById('wishlistItems');
  function renderWishlist(){
    const logged = getLogged();
    if(!wishlistItems) return;
    if(!logged){ wishlistItems.innerHTML = '<p>Please login to view wishlist.</p>'; return; }
    const users = getUsers();
    const u = users[logged];
    if(!u || !u.wishlist?.length){
      wishlistItems.innerHTML = '<p>Your wishlist is empty.</p>'; return;
    }
    wishlistItems.innerHTML = `<ul>${u.wishlist.map((it,i)=>`<li>${it} <button data-i="${i}" class="btn small">Remove</button></li>`).join('')}</ul>`;
    wishlistItems.querySelectorAll('button').forEach(b=>{
      b.addEventListener('click', ()=>{
        const idx = parseInt(b.dataset.i,10);
        users[logged].wishlist.splice(idx,1);
        saveUsers(users);
        renderWishlist();
      });
    });
  }
  if(wishlistForm){
    wishlistForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const item = document.getElementById('wishItem').value.trim();
      if(!item) return alert('Enter item name.');
      const logged = getLogged();
      if(!logged){ alert('Please login first.'); window.location.href='login.html'; return; }
      const users = getUsers();
      users[logged].wishlist = users[logged].wishlist || [];
      users[logged].wishlist.push(item);
      saveUsers(users);
      document.getElementById('wishItem').value='';
      renderWishlist();
    });
  }
  renderWishlist();

  // ---------- STORE ----------
  const storeItemsEl = document.getElementById('storeItems');
  if(storeItemsEl){
    const keys = Object.keys(SAMPLE_PRICES);
    storeItemsEl.innerHTML = keys.map(k=>`
      <div class="card">
        <strong>${k.toUpperCase()}</strong>
        <div class="small">${SAMPLE_PRICES[k]}</div>
        <div style="margin-top:8px">
          <button class="btn" data-item="${k}">Add to Wishlist</button>
          <button class="btn primary" data-order="${k}">Order</button>
        </div>
      </div>
    `).join('');
    storeItemsEl.querySelectorAll('[data-item]').forEach(b=>{
      b.addEventListener('click', ()=>{
        const item = b.dataset.item;
        const logged = getLogged();
        if(!logged){ alert('Please login first.'); window.location.href='login.html'; return; }
        const users = getUsers();
        users[logged].wishlist = users[logged].wishlist || [];
        users[logged].wishlist.push(item);
        saveUsers(users);
        alert('Added to wishlist!');
      });
    });
    storeItemsEl.querySelectorAll('[data-order]').forEach(b=>{
      b.addEventListener('click', ()=>{
        const item = b.dataset.order;
        const logged = getLogged();
        if(!logged){ alert('Please login first.'); window.location.href='login.html'; return; }
        const users = getUsers();
        users[logged].orders = users[logged].orders || [];
        users[logged].orders.push({ item, created:Date.now(), status:'placed' });
        users[logged].notifications = users[logged].notifications || [];
        users[logged].notifications.unshift(`Order placed: ${item}`);
        saveUsers(users);
        alert('Order placed (simulated). Check notifications.');
      });
    });
  }

  // ---------- COMMUNITY ----------
  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');
  function renderReviews(){
    const revs = safeParse(localStorage.getItem('mm_reviews'), []);
    if(!reviewList) return;
    reviewList.innerHTML = revs.length ?
      `<ul>${revs.map(r=>`<li><strong>${r.user}</strong>: ${r.text} <span class="small">(${r.rating})</span></li>`).join('')}</ul>`
      : '<p>No reviews yet.</p>';
  }
  if(reviewForm){
    reviewForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const user = document.getElementById('reviewUser').value.trim() || (currentUser() ? currentUser().name : 'Anonymous');
      const text = document.getElementById('reviewText').value.trim();
      const rating = document.getElementById('reviewRating').value || '';
      if(!text) return alert('Please write a review.');
      const revs = safeParse(localStorage.getItem('mm_reviews'), []);
      revs.unshift({ user, text, rating, date:Date.now() });
      localStorage.setItem('mm_reviews', JSON.stringify(revs));
      document.getElementById('reviewText').value='';
      renderReviews();
    });
  }
  renderReviews();

  // ---------- NOTIFICATIONS ----------
  const notifsEl = document.getElementById('notificationsList');
  if(notifsEl){
    const logged = getLogged();
    if(!logged){ notifsEl.innerHTML = '<p>Please login to view notifications.</p>'; return; }
    const users = getUsers();
    const list = users[logged].notifications || [];
    notifsEl.innerHTML = list.length ? list.map(n=>`<div class="notif">${n}</div>`).join('') : '<p>No notifications.</p>';
  }

});
