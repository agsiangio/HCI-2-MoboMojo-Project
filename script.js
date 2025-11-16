const COMPATIBILITY_DATABASE = {
  'rtx 4070': {
    type: 'gpu',
    compatible: {
      cpu: ['Intel i5-13600K', 'Intel i7-13700K', 'AMD Ryzen 5 7600X', 'AMD Ryzen 7 7800X3D'],
      motherboard: ['ASUS ROG STRIX Z790-E', 'MSI MAG Z790 TOMAHAWK', 'GIGABYTE B650 AORUS ELITE'],
      ram: ['32GB DDR5 6000MHz', '32GB DDR5 5600MHz', '16GB DDR5 6000MHz'],
      psu: ['750W 80+ Gold', '850W 80+ Gold', '750W 80+ Platinum'],
      storage: ['1TB NVMe Gen4 SSD', '2TB NVMe Gen4 SSD'],
      cooler: ['Noctua NH-D15', 'Arctic Liquid Freezer II 280', 'be quiet! Dark Rock Pro 4'],
      case_name: ['NZXT H510 Flow', 'Lian Li O11 Dynamic', 'Fractal Design Meshify C']
    },
    price: 38995
  },
  'rtx 4080': {
    type: 'gpu',
    compatible: {
      cpu: ['Intel i7-13700K', 'Intel i9-13900K', 'AMD Ryzen 7 7800X3D', 'AMD Ryzen 9 7950X'],
      motherboard: ['ASUS ROG STRIX Z790-E', 'MSI MAG Z790 TOMAHAWK', 'GIGABYTE X670E AORUS MASTER'],
      ram: ['32GB DDR5 6000MHz', '64GB DDR5 6000MHz'],
      psu: ['850W 80+ Gold', '1000W 80+ Gold', '850W 80+ Platinum'],
      storage: ['1TB NVMe Gen4 SSD', '2TB NVMe Gen4 SSD'],
      cooler: ['Arctic Liquid Freezer II 360', 'Corsair iCUE H150i', 'NZXT Kraken X73'],
      case_name: ['Lian Li O11 Dynamic', 'Corsair 5000D Airflow', 'Fractal Design Torrent']
    },
    price: 59995
  },
  'ryzen 5 7600x': {
    type: 'cpu',
    compatible: {
      motherboard: ['GIGABYTE B650 AORUS ELITE', 'MSI MAG B650 TOMAHAWK', 'ASUS TUF GAMING B650-PLUS'],
      ram: ['32GB DDR5 6000MHz', '16GB DDR5 5600MHz'],
      gpu: ['RTX 4070', 'RTX 4060 Ti', 'RX 7800 XT'],
      psu: ['650W 80+ Gold', '750W 80+ Gold'],
      storage: ['1TB NVMe Gen4 SSD', '500GB NVMe Gen4 SSD'],
      cooler: ['Noctua NH-U12S', 'be quiet! Dark Rock 4', 'Arctic Freezer 34'],
      case_name: ['NZXT H510 Flow', 'Fractal Design Meshify C', 'Cooler Master TD500']
    },
    price: 15995
  },
  'ryzen 7 7800x3d': {
    type: 'cpu',
    compatible: {
      motherboard: ['GIGABYTE B650 AORUS ELITE', 'MSI MAG B650 TOMAHAWK', 'ASUS ROG STRIX X670E-E'],
      ram: ['32GB DDR5 6000MHz', '64GB DDR5 6000MHz'],
      gpu: ['RTX 4070', 'RTX 4080', 'RTX 4090', 'RX 7900 XTX'],
      psu: ['750W 80+ Gold', '850W 80+ Gold', '1000W 80+ Gold'],
      storage: ['1TB NVMe Gen4 SSD', '2TB NVMe Gen4 SSD'],
      cooler: ['Noctua NH-D15', 'Arctic Liquid Freezer II 280', 'be quiet! Dark Rock Pro 4'],
      case_name: ['Lian Li O11 Dynamic', 'Fractal Design Torrent', 'Corsair 5000D Airflow']
    },
    price: 26995
  },
  'intel i5-13600k': {
    type: 'cpu',
    compatible: {
      motherboard: ['MSI MAG Z790 TOMAHAWK', 'ASUS PRIME Z790-P', 'GIGABYTE Z790 UD'],
      ram: ['32GB DDR5 6000MHz', '16GB DDR5 5600MHz', '32GB DDR4 3600MHz'],
      gpu: ['RTX 4070', 'RTX 4060 Ti', 'RX 7800 XT'],
      psu: ['650W 80+ Gold', '750W 80+ Gold'],
      storage: ['1TB NVMe Gen4 SSD', '500GB NVMe Gen4 SSD'],
      cooler: ['Noctua NH-U12S', 'Arctic Liquid Freezer II 240', 'be quiet! Dark Rock 4'],
      case_name: ['NZXT H510 Flow', 'Fractal Design Meshify C', 'Phanteks Eclipse P400A']
    },
    price: 19995
  },
  'intel i7-13700k': {
    type: 'cpu',
    compatible: {
      motherboard: ['ASUS ROG STRIX Z790-E', 'MSI MAG Z790 TOMAHAWK', 'GIGABYTE Z790 AORUS ELITE'],
      ram: ['32GB DDR5 6000MHz', '64GB DDR5 6000MHz'],
      gpu: ['RTX 4070', 'RTX 4080', 'RTX 4090'],
      psu: ['750W 80+ Gold', '850W 80+ Gold'],
      storage: ['1TB NVMe Gen4 SSD', '2TB NVMe Gen4 SSD'],
      cooler: ['Arctic Liquid Freezer II 280', 'Noctua NH-D15', 'Corsair iCUE H100i'],
      case_name: ['Lian Li O11 Dynamic', 'Corsair 5000D Airflow', 'NZXT H7 Flow']
    },
    price: 24995
  }
};

const SAMPLE_PRICES = {
  'rtx 4070': 38995,
  'rtx 4080': 59995,
  'rtx 4060 ti': 28995,
  'rx 7800 xt': 32995,
  'rx 7900 xtx': 54995,
  'rtx 4090': 89995,
  'ryzen 5 7600x': 15995,
  'ryzen 7 7800x3d': 26995,
  'ryzen 9 7950x': 42995,
  'intel i5-13600k': 19995,
  'intel i7-13700k': 24995,
  'intel i9-13900k': 36995,
  'asus rog strix z790-e': 24995,
  'msi mag z790 tomahawk': 18995,
  'gigabyte b650 aorus elite': 12995,
  'gigabyte x670e aorus master': 28995,
  'msi mag b650 tomahawk': 11995,
  '32gb ddr5 6000mhz': 8995,
  '16gb ddr5 6000mhz': 4995,
  '64gb ddr5 6000mhz': 17995,
  '32gb ddr4 3600mhz': 5995,
  '1tb nvme gen4 ssd': 6995,
  '2tb nvme gen4 ssd': 12995,
  '500gb nvme gen4 ssd': 3995,
  '750w 80+ gold': 6995,
  '850w 80+ gold': 8995,
  '1000w 80+ gold': 11995,
  'noctua nh-d15': 5995,
  'arctic liquid freezer ii 280': 7995,
  'be quiet! dark rock pro 4': 5495,
  'nzxt h510 flow': 5995,
  'lian li o11 dynamic': 8995,
  'fractal design meshify c': 5495
};

document.addEventListener('DOMContentLoaded', async function() {
  let currentUser = null;

  async function checkAuth() {
    try {
      currentUser = await getCurrentUser();
      return currentUser;
    } catch (error) {
      console.error('Auth check error:', error);
      return null;
    }
  }

  async function requireAuth() {
    const user = await checkAuth();
    if (!user && !window.location.pathname.includes('index.html') &&
        !window.location.pathname.includes('login.html') &&
        !window.location.pathname.includes('signup.html') &&
        window.location.pathname !== '/') {
      alert('Please log in to access this page.');
      window.location.href = 'login.html';
      return null;
    }
    return user;
  }

  function formatPrice(price) {
    return `₱${price.toLocaleString()}`;
  }

  function getCompatibleParts(partName) {
    const normalized = partName.toLowerCase();
    const partData = COMPATIBILITY_DATABASE[normalized];

    if (partData) {
      return partData.compatible;
    }
    return null;
  }

  await checkAuth();

  const logoutBtns = document.querySelectorAll('#logoutBtn');
  if (logoutBtns.length > 0) {
    logoutBtns.forEach(el => {
      el.addEventListener('click', async function(e) {
        e.preventDefault();
        try {
          await signOut();
          alert('Logged out successfully.');
          window.location.href = 'index.html';
        } catch (error) {
          alert('Error logging out: ' + error.message);
        }
      });
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const name = document.getElementById('signupName')?.value?.trim();
      const email = document.getElementById('signupEmail')?.value?.trim();
      const password = document.getElementById('signupPassword')?.value;

      if (!name || !email || !password) {
        alert('Please fill out all fields.');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      try {
        await signUp(email, password, name);
        alert('Account created successfully! You can now log in.');
        window.location.href = 'login.html';
      } catch (error) {
        alert('Error creating account: ' + error.message);
      }
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const email = document.getElementById('loginEmail')?.value?.trim();
      const password = document.getElementById('loginPassword')?.value;

      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }

      try {
        await signIn(email, password);
        const user = await getCurrentUser();
        const profile = await getProfile(user.id);
        alert(`Welcome back, ${profile.username}!`);
        window.location.href = 'dashboard.html';
      } catch (error) {
        alert('Invalid email or password: ' + error.message);
      }
    });
  }

  const checkBtn = document.getElementById('checkBtn');
  const partInput = document.getElementById('partInput');
  const resultDiv = document.getElementById('result');

  if(checkBtn && partInput && resultDiv) {
    checkBtn.addEventListener('click', () => {
      const q = (partInput.value || '').trim().toLowerCase();
      if(!q){ resultDiv.textContent = 'Enter a part name first.'; return; }

      const compatible = getCompatibleParts(q);
      const price = SAMPLE_PRICES[q];

      if(compatible){
        let html = `<strong>Compatible parts for ${q.toUpperCase()}:</strong><br/>`;
        if (compatible.cpu) html += `<br/><strong>CPU:</strong> ${compatible.cpu.slice(0, 3).join(', ')}`;
        if (compatible.motherboard) html += `<br/><strong>Motherboard:</strong> ${compatible.motherboard.slice(0, 3).join(', ')}`;
        if (compatible.ram) html += `<br/><strong>RAM:</strong> ${compatible.ram.slice(0, 3).join(', ')}`;
        if (compatible.gpu) html += `<br/><strong>GPU:</strong> ${compatible.gpu.slice(0, 3).join(', ')}`;
        if (compatible.psu) html += `<br/><strong>PSU:</strong> ${compatible.psu.slice(0, 3).join(', ')}`;
        if (compatible.storage) html += `<br/><strong>Storage:</strong> ${compatible.storage.slice(0, 2).join(', ')}`;
        if (compatible.cooler) html += `<br/><strong>Cooler:</strong> ${compatible.cooler.slice(0, 2).join(', ')}`;
        if (compatible.case_name) html += `<br/><strong>Case:</strong> ${compatible.case_name.slice(0, 2).join(', ')}`;
        if (price) html += `<br/><br/><small>Price: ${formatPrice(price)}</small>`;
        resultDiv.innerHTML = html;
      } else {
        resultDiv.textContent = 'No compatibility data found. Try: RTX 4070, RTX 4080, Ryzen 5 7600X, Ryzen 7 7800X3D, Intel i5-13600K, Intel i7-13700K';
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
        priceResultDiv.textContent = `${q.toUpperCase()} price: ${formatPrice(price)}`;
      } else {
        priceResultDiv.textContent = 'Price not found for this part.';
      }
    });
  }

  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    const user = await requireAuth();
    if (!user) return;

    try {
      const profile = await getProfile(user.id);
      const nameInput = document.getElementById('profileUsername');
      const emailInput = document.getElementById('profileEmail');

      if (nameInput) nameInput.value = profile.username || '';
      if (emailInput) {
        emailInput.value = profile.email;
        emailInput.readOnly = true;
      }

      profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
          await updateProfile(user.id, {
            username: nameInput.value.trim()
          });
          alert('Profile updated successfully!');
          window.location.reload();
        } catch (error) {
          alert('Error updating profile: ' + error.message);
        }
      });
    } catch (error) {
      alert('Error loading profile: ' + error.message);
    }
  }

  const userNameEl = document.getElementById('userName');
  if(userNameEl){
    const user = await requireAuth();
    if(user){
      try {
        const profile = await getProfile(user.id);
        userNameEl.textContent = profile.username || profile.email;
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    }
  }

  const dashboardBuilds = document.getElementById('dashboardBuilds');
  if(dashboardBuilds){
    const user = await requireAuth();
    if(user){
      try {
        const builds = await getBuilds(user.id);
        if(builds && builds.length){
          dashboardBuilds.innerHTML = builds.map((b)=>{
            const parts = [b.cpu, b.gpu, b.motherboard, b.ram].filter(Boolean);
            return `<li><strong>${b.name}</strong> — ${parts.join(', ')}</li>`;
          }).join('');
        } else {
          dashboardBuilds.innerHTML = '<li>No saved builds yet</li>';
        }
      } catch (error) {
        dashboardBuilds.innerHTML = '<li>Error loading builds</li>';
      }
    }
  }

  const dashboardWishlist = document.getElementById('dashboardWishlist');
  if(dashboardWishlist){
    const user = await requireAuth();
    if(user){
      try {
        const wishlist = await getWishlist(user.id);
        if(wishlist && wishlist.length) {
          dashboardWishlist.innerHTML = wishlist.map(i=>`<li>${i.item_name}</li>`).join('');
        } else {
          dashboardWishlist.innerHTML = '<li>Your wishlist is empty</li>';
        }
      } catch (error) {
        dashboardWishlist.innerHTML = '<li>Error loading wishlist</li>';
      }
    }
  }

  const compatBtn = document.getElementById('compatBtn');
  if(compatBtn){
    compatBtn.addEventListener('click', ()=>{
      const q = (document.getElementById('compatInput').value || '').trim().toLowerCase();
      const out = document.getElementById('compatResult');
      if(!q){ out.textContent = 'Enter a part name first.'; return; }

      const compatible = getCompatibleParts(q);
      const price = SAMPLE_PRICES[q];

      if(compatible){
        let html = `<strong>Compatible parts for ${q.toUpperCase()}:</strong><br/>`;
        if (compatible.cpu) html += `<br/><strong>CPU:</strong> ${compatible.cpu.join(', ')}`;
        if (compatible.motherboard) html += `<br/><strong>Motherboard:</strong> ${compatible.motherboard.join(', ')}`;
        if (compatible.ram) html += `<br/><strong>RAM:</strong> ${compatible.ram.join(', ')}`;
        if (compatible.gpu) html += `<br/><strong>GPU:</strong> ${compatible.gpu.join(', ')}`;
        if (compatible.psu) html += `<br/><strong>PSU:</strong> ${compatible.psu.join(', ')}`;
        if (compatible.storage) html += `<br/><strong>Storage:</strong> ${compatible.storage.join(', ')}`;
        if (compatible.cooler) html += `<br/><strong>Cooler:</strong> ${compatible.cooler.join(', ')}`;
        if (compatible.case_name) html += `<br/><strong>Case:</strong> ${compatible.case_name.join(', ')}`;
        if (price) html += `<br/><br/><small>Price: ${formatPrice(price)}</small>`;
        out.innerHTML = html;
      } else {
        out.textContent = 'No compatibility data found.';
      }
    });
  }

  const buildForm = document.getElementById('buildForm');
  const buildList = document.getElementById('buildList');
  if(buildForm){
    const user = await requireAuth();
    if (!user) return;

    buildForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const cpu = document.getElementById('cpu').value.trim();
      const gpu = document.getElementById('gpu').value.trim();
      const mobo = document.getElementById('mobo').value.trim();
      const ram = document.getElementById('ram').value.trim();
      const psu = document.getElementById('psu').value.trim();
      const storage = document.getElementById('storage')?.value.trim() || '';
      const cooler = document.getElementById('cooler')?.value.trim() || '';
      const caseName = document.getElementById('caseName')?.value.trim() || '';
      const buildName = document.getElementById('buildName')?.value.trim() || 'My Build';

      if(!(cpu||gpu||mobo||ram||psu)) return alert('Please add at least one part.');

      let estimatedPrice = 0;
      [cpu, gpu, mobo, ram, psu, storage, cooler, caseName].forEach(part => {
        if (part) {
          const price = SAMPLE_PRICES[part.toLowerCase()];
          if (price) estimatedPrice += price;
        }
      });

      try {
        await saveBuild(user.id, {
          name: buildName,
          cpu,
          gpu,
          motherboard: mobo,
          ram,
          psu,
          storage,
          cooler,
          case_name: caseName,
          estimated_price: estimatedPrice
        });
        alert('Build saved successfully!');
        window.location.href='dashboard.html';
      } catch (error) {
        alert('Error saving build: ' + error.message);
      }
    });

    if(buildList){
      try {
        const builds = await getBuilds(user.id);
        if(builds && builds.length){
          buildList.innerHTML = '<h3>Your Saved Builds</h3>' + builds.map((b)=>{
            const parts = [
              b.cpu && `CPU: ${b.cpu}`,
              b.gpu && `GPU: ${b.gpu}`,
              b.motherboard && `Motherboard: ${b.motherboard}`,
              b.ram && `RAM: ${b.ram}`,
              b.psu && `PSU: ${b.psu}`,
              b.storage && `Storage: ${b.storage}`,
              b.cooler && `Cooler: ${b.cooler}`,
              b.case_name && `Case: ${b.case_name}`
            ].filter(Boolean).join('<br/>');
            return `<div class="card" style="margin-top:12px">
              <h4>${b.name}</h4>
              <div class="small">${parts}</div>
              ${b.estimated_price > 0 ? `<div style="margin-top:8px"><strong>Est. Price: ${formatPrice(b.estimated_price)}</strong></div>` : ''}
              <button class="btn small" data-delete="${b.id}" style="margin-top:8px">Delete</button>
            </div>`;
          }).join('');
          buildList.querySelectorAll('[data-delete]').forEach(btn=>{
            btn.addEventListener('click', async ()=>{
              if(confirm('Delete this build?')){
                try {
                  await deleteBuild(btn.dataset.delete);
                  window.location.reload();
                } catch (error) {
                  alert('Error deleting build: ' + error.message);
                }
              }
            });
          });
        }
      } catch (error) {
        console.error('Error loading builds:', error);
      }
    }
  }

  const wishlistForm = document.getElementById('wishlistForm');
  const wishlistItems = document.getElementById('wishlistItems');

  async function renderWishlist(){
    if(!wishlistItems) return;
    const user = await checkAuth();
    if(!user){
      wishlistItems.innerHTML = '<p>Please login to view wishlist.</p>';
      return;
    }

    try {
      const items = await getWishlist(user.id);
      if(!items || !items.length){
        wishlistItems.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
      }
      wishlistItems.innerHTML = `<ul>${items.map(it=>
        `<li>${it.item_name} ${it.price > 0 ? `<span class="small">(${formatPrice(it.price)})</span>` : ''} <button data-id="${it.id}" class="btn small">Remove</button></li>`
      ).join('')}</ul>`;
      wishlistItems.querySelectorAll('button').forEach(b=>{
        b.addEventListener('click', async ()=>{
          try {
            await removeFromWishlist(b.dataset.id);
            renderWishlist();
          } catch (error) {
            alert('Error removing item: ' + error.message);
          }
        });
      });
    } catch (error) {
      wishlistItems.innerHTML = '<p>Error loading wishlist.</p>';
    }
  }

  if(wishlistForm){
    const user = await requireAuth();
    if(user){
      wishlistForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const item = document.getElementById('wishItem').value.trim();
        if(!item) return alert('Enter item name.');

        const price = SAMPLE_PRICES[item.toLowerCase()] || 0;

        try {
          await addToWishlist(user.id, {
            item_name: item,
            item_type: '',
            price
          });
          document.getElementById('wishItem').value='';
          renderWishlist();
        } catch (error) {
          alert('Error adding to wishlist: ' + error.message);
        }
      });
    }
  }
  renderWishlist();

  const storeItemsEl = document.getElementById('storeItems');
  if(storeItemsEl){
    const keys = Object.keys(SAMPLE_PRICES);
    storeItemsEl.innerHTML = keys.map(k=>`
      <div class="card">
        <strong>${k.toUpperCase()}</strong>
        <div class="small">${formatPrice(SAMPLE_PRICES[k])}</div>
        <div style="margin-top:8px">
          <button class="btn" data-item="${k}">Add to Wishlist</button>
        </div>
      </div>
    `).join('');
    storeItemsEl.querySelectorAll('[data-item]').forEach(b=>{
      b.addEventListener('click', async ()=>{
        const item = b.dataset.item;
        const user = await checkAuth();
        if(!user){ alert('Please login first.'); window.location.href='login.html'; return; }

        try {
          await addToWishlist(user.id, {
            item_name: item,
            item_type: '',
            price: SAMPLE_PRICES[item] || 0
          });
          alert('Added to wishlist!');
        } catch (error) {
          alert('Error adding to wishlist: ' + error.message);
        }
      });
    });
  }

  const reviewForm = document.getElementById('reviewForm');
  const reviewList = document.getElementById('reviewList');
  function renderReviews(){
    const revs = JSON.parse(localStorage.getItem('mm_reviews') || '[]');
    if(!reviewList) return;
    reviewList.innerHTML = revs.length ?
      `<ul>${revs.map(r=>`<li><strong>${r.user}</strong>: ${r.text} <span class="small">(${r.rating})</span></li>`).join('')}</ul>`
      : '<p>No reviews yet.</p>';
  }
  if(reviewForm){
    reviewForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      let username = document.getElementById('reviewUser').value.trim();
      if(!username){
        const user = await checkAuth();
        if(user){
          try {
            const profile = await getProfile(user.id);
            username = profile.username;
          } catch(e) {
            username = 'Anonymous';
          }
        } else {
          username = 'Anonymous';
        }
      }
      const text = document.getElementById('reviewText').value.trim();
      const rating = document.getElementById('reviewRating').value || '';
      if(!text) return alert('Please write a review.');
      const revs = JSON.parse(localStorage.getItem('mm_reviews') || '[]');
      revs.unshift({ user: username, text, rating, date:Date.now() });
      localStorage.setItem('mm_reviews', JSON.stringify(revs));
      document.getElementById('reviewText').value='';
      renderReviews();
    });
  }
  renderReviews();

  const notifsEl = document.getElementById('notificationsList');
  if(notifsEl){
    notifsEl.innerHTML = '<p>No new notifications.</p>';
  }

  const dashboardNotifs = document.getElementById('dashboardNotifs');
  if(dashboardNotifs){
    dashboardNotifs.innerHTML = 'No new notifications';
  }
});
