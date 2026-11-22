const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const money = n => new Intl.NumberFormat('fa-IR').format(n) + ' تومان';
const initialProducts = [
 {id:1,name:'اطلس کلاسیک',desc:'استیل ضدزنگ · صفحه مشکی',price:48500000,category:['men','classic'],tag:'پرفروش',tone:0,strap:'',dial:''},
 {id:2,name:'سلین رزگلد',desc:'بدنه رزگلد · صفحه صدفی',price:56900000,category:['women','classic'],tag:'کالکشن جدید',tone:1,strap:'strap-cream',dial:'dial-light'},
 {id:3,name:'نوا اتوماتیک',desc:'موتور اتوماتیک · صفحه سبز',price:72000000,category:['men'],tag:'',tone:2,strap:'strap-green',dial:'dial-green'},
 {id:4,name:'لیرا مینیمال',desc:'استیل صیقلی · طراحی ظریف',price:39800000,category:['women'],tag:'',tone:3,strap:'strap-silver',dial:'dial-blue'},
 {id:5,name:'آرتمیس پرستیژ',desc:'بدنه طلایی · صفحه شامپاینی',price:84500000,category:['women','classic'],tag:'محدود',tone:4,strap:'strap-cream',dial:'dial-light'},
 {id:6,name:'وکتور اسپرت',desc:'طراحی اسپرت · بند مقاوم',price:62500000,category:['men','sport'],tag:'',tone:5,strap:'strap-green',dial:'dial-green'},
 {id:7,name:'موناکو',desc:'طراحی مینیمال · صفحه روشن',price:44500000,category:['women','classic'],tag:'',tone:6,strap:'strap-silver',dial:'dial-light'},
 {id:8,name:'کرونو پرو',desc:'استیل مشکی · طراحی مدرن',price:93500000,category:['men','sport'],tag:'ویژه',tone:7,strap:'',dial:''}
];
const read = (key, fallback) => { try { const v=localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } };
let products = read('avan_products', initialProducts);
let cart = read('avan_cart', []);
let orders = read('avan_orders', []);
let favorites = read('avan_favorites', []);
let activeCategory = 'all';
let maxPrice = 100000000;
let activeAdminTab = 'products';
let toastTimer;

function save(key,value){ localStorage.setItem(key, JSON.stringify(value)); }
function toast(message){ const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),2400); }
function watchMarkup(p, extra=''){ return `<div class="product-watch"><div class="product-strap ${p.strap||''}"></div><div class="product-dial ${p.dial||''}"></div></div>`; }
function filteredProducts(){
 const q=$('#search-input').value.trim().toLocaleLowerCase('fa');
 return products.filter(p=>(activeCategory==='all'||p.category.includes(activeCategory))&&p.price<=maxPrice&&(!q||(p.name+' '+p.desc).toLocaleLowerCase('fa').includes(q)));
}
function renderProducts(){
 const list=filteredProducts(), sort=$('#sort-select').value;
 if(sort==='low') list.sort((a,b)=>a.price-b.price);
 if(sort==='high') list.sort((a,b)=>b.price-a.price);
 if(sort==='new') list.sort((a,b)=>b.id-a.id);
 $('#product-grid').innerHTML=list.length?list.map(p=>`
 <article class="product-card">
  <div class="product-visual tone-${p.tone%8}" data-details="${p.id}">
   ${p.tag?`<span class="product-tag">${p.tag}</span>`:''}
   ${watchMarkup(p)}
   <button class="favorite-btn ${favorites.includes(p.id)?'saved':''}" data-favorite="${p.id}" aria-label="افزودن به علاقه‌مندی‌ها">${favorites.includes(p.id)?'♥':'♡'}</button>
  </div>
  <div class="product-info"><div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.desc)}</p></div><strong>${new Intl.NumberFormat('fa-IR').format(p.price)} <small>تومان</small></strong></div>
  <div class="product-actions"><button data-add="${p.id}">افزودن به سبد</button><button data-details="${p.id}">جزئیات محصول</button></div>
 </article>`).join(''):'<div class="empty-state">محصولی با این مشخصات پیدا نشد. فیلترها را تغییر دهید.</div>';
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function updateCartCount(){ $('#cart-count').textContent=new Intl.NumberFormat('fa-IR').format(cart.reduce((n,x)=>n+x.qty,0)); }
function renderCart(){
 const box=$('#cart-items');
 if(!cart.length){box.innerHTML='<div class="empty-state">سبد خرید شما خالی است.</div>';}
 else box.innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id);if(!p)return '';return `<div class="cart-row"><div class="cart-thumb">${watchMarkup(p)}</div><div><h4>${escapeHtml(p.name)}</h4><p>${money(p.price)}</p><div class="qty-controls"><button data-qty="${p.id}" data-delta="-1">−</button><span>${item.qty}</span><button data-qty="${p.id}" data-delta="1">+</button></div></div><button class="remove-item" data-remove="${p.id}">حذف</button></div>`}).join('');
 $('#cart-total').textContent=money(cart.reduce((sum,item)=>{const p=products.find(x=>x.id===item.id);return sum+(p?p.price*item.qty:0)},0));
 updateCartCount();
}
function addToCart(id){const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});save('avan_cart',cart);renderCart();toast('به سبد خرید اضافه شد.');}
function openOverlay(){ $('#overlay').classList.add('show'); document.body.classList.add('locked'); }
function closeAll(){ $('#overlay').classList.remove('show');$('.cart-drawer').classList.remove('open');$$('.modal').forEach(m=>m.classList.remove('open'));document.body.classList.remove('locked'); }
function openCart(){openOverlay();$('#cart-drawer').classList.add('open');$('#cart-drawer').setAttribute('aria-hidden','false');renderCart();}
function openProduct(id){const p=products.find(x=>x.id===id);if(!p)return;$('#product-modal-content').innerHTML=`<div class="detail-layout"><div class="detail-image tone-${p.tone%8}">${watchMarkup(p)}</div><div class="detail-copy"><p class="eyebrow">AVAN · SELECTED OBJECT</p><h2>${escapeHtml(p.name)}</h2><p>${escapeHtml(p.desc)}. طراحی‌شده برای همراهی با لحظه‌های مهم و روزهای ماندگار شما.</p><div class="detail-price">${money(p.price)}</div><button class="button button-dark" data-add="${p.id}">افزودن به سبد خرید <b>↙</b></button></div></div>`;openOverlay();$('#product-modal').classList.add('open');}
function openAdmin(){openOverlay();$('#admin-modal').classList.add('open');renderAdmin();}
function renderAdmin(){
 const total=orders.reduce((s,o)=>s+o.total,0);
 $('#admin-stats').innerHTML=`<div class="stat-card"><span>تعداد محصولات</span><strong>${new Intl.NumberFormat('fa-IR').format(products.length)}</strong></div><div class="stat-card"><span>سفارش‌های آزمایشی</span><strong>${new Intl.NumberFormat('fa-IR').format(orders.length)}</strong></div><div class="stat-card"><span>مجموع سفارش‌ها</span><strong>${money(total)}</strong></div>`;
 $$('.admin-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===activeAdminTab));
 const content=$('#admin-content');
 if(activeAdminTab==='products'){
 content.innerHTML=`<form class="admin-form" id="add-product-form"><input name="name" placeholder="نام محصول" required><input name="desc" placeholder="توضیحات کوتاه" required><input name="price" type="number" min="1" placeholder="قیمت به تومان" required><select name="category"><option value="men">مردانه</option><option value="women">زنانه</option><option value="classic">کلاسیک</option><option value="sport">اسپرت</option></select><button class="button button-dark" type="submit">افزودن محصول جدید</button></form>
 <div style="overflow:auto"><table class="admin-table"><thead><tr><th>نام محصول</th><th>قیمت</th><th>دسته</th><th>عملیات</th></tr></thead><tbody>${products.map(p=>`<tr><td>${escapeHtml(p.name)}</td><td>${new Intl.NumberFormat('fa-IR').format(p.price)}</td><td>${p.category.map(c=>({men:'مردانه',women:'زنانه',classic:'کلاسیک',sport:'اسپرت'}[c])).join('، ')}</td><td><button data-edit="${p.id}">ویرایش قیمت</button> · <button data-delete="${p.id}">حذف</button></td></tr>`).join('')}</tbody></table></div>`;
 }else{
 content.innerHTML=orders.length?`<div style="overflow:auto"><table class="admin-table"><thead><tr><th>کد</th><th>زمان</th><th>اقلام</th><th>مبلغ</th></tr></thead><tbody>${orders.map(o=>`<tr><td>${o.id}</td><td>${escapeHtml(o.date)}</td><td>${o.items.length} محصول</td><td>${money(o.total)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="order-empty">هنوز سفارش آزمایشی ثبت نشده است.</div>';
 }
}
$('#product-grid').addEventListener('click',e=>{
 const add=e.target.closest('[data-add]'), detail=e.target.closest('[data-details]'), fav=e.target.closest('[data-favorite]');
 if(add)addToCart(Number(add.dataset.add));
 if(detail)openProduct(Number(detail.dataset.details));
 if(fav){const id=Number(fav.dataset.favorite);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save('avan_favorites',favorites);renderProducts();}
});
$('#product-modal-content').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){addToCart(Number(b.dataset.add));closeAll();}});
$('#cart-items').addEventListener('click',e=>{
 const qty=e.target.closest('[data-qty]'),remove=e.target.closest('[data-remove]');
 if(qty){const id=Number(qty.dataset.qty),item=cart.find(x=>x.id===id);if(item){item.qty+=Number(qty.dataset.delta);if(item.qty<=0)cart=cart.filter(x=>x.id!==id);}save('avan_cart',cart);renderCart();}
 if(remove){cart=cart.filter(x=>x.id!==Number(remove.dataset.remove));save('avan_cart',cart);renderCart();}
});
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;activeCategory=b.dataset.category;$$('.filter').forEach(x=>x.classList.toggle('active',x===b));renderProducts();});
$('#search-input').addEventListener('input',renderProducts);
$('#sort-select').addEventListener('change',renderProducts);
$('#price-range').addEventListener('input',e=>{maxPrice=Number(e.target.value);$('#price-label').textContent=new Intl.NumberFormat('fa-IR').format(maxPrice/1000000)+' میلیون تومان';renderProducts();});
$('#clear-filters').addEventListener('click',()=>{activeCategory='all';maxPrice=100000000;$('#search-input').value='';$('#sort-select').value='featured';$('#price-range').value=maxPrice;$('#price-label').textContent='۱۰۰ میلیون تومان';$$('.filter').forEach(b=>b.classList.toggle('active',b.dataset.category==='all'));renderProducts();});
$$('.cart-open').forEach(b=>b.addEventListener('click',openCart));
$$('.admin-open').forEach(b=>b.addEventListener('click',openAdmin));
$('#overlay').addEventListener('click',closeAll);
$$('[data-close]').forEach(b=>b.addEventListener('click',closeAll));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll();});
$('#checkout-btn').addEventListener('click',()=>{
 if(!cart.length){toast('سبد خرید خالی است.');return;}
 const total=cart.reduce((s,i)=>{const p=products.find(x=>x.id===i.id);return s+(p?p.price*i.qty:0)},0);
 orders.unshift({id:'AV-'+Date.now().toString().slice(-6),date:new Date().toLocaleString('fa-IR'),items:cart.map(x=>({...x})),total});
 save('avan_orders',orders);cart=[];save('avan_cart',cart);renderCart();closeAll();toast('سفارش آزمایشی ثبت شد؛ پرداختی انجام نشده است.');
});
$$('.admin-tab').forEach(b=>b.addEventListener('click',()=>{activeAdminTab=b.dataset.tab;renderAdmin();}));
$('#admin-content').addEventListener('submit',e=>{
 if(e.target.id!=='add-product-form')return;e.preventDefault();const fd=new FormData(e.target);
 const name=fd.get('name').trim(),desc=fd.get('desc').trim(),price=Number(fd.get('price')),category=fd.get('category');
 if(!name||!desc||!price||price<1){toast('اطلاعات محصول را بررسی کنید.');return;}
 products.push({id:Math.max(0,...products.map(p=>p.id))+1,name,desc,price,category:[category],tag:'جدید',tone:products.length%8,strap:'',dial:''});save('avan_products',products);renderAdmin();renderProducts();toast('محصول اضافه شد.');
});
$('#admin-content').addEventListener('click',e=>{
 const del=e.target.closest('[data-delete]'),edit=e.target.closest('[data-edit]');
 if(del){const id=Number(del.dataset.delete);products=products.filter(p=>p.id!==id);cart=cart.filter(x=>x.id!==id);save('avan_products',products);save('avan_cart',cart);renderAdmin();renderProducts();renderCart();toast('محصول حذف شد.');}
 if(edit){const id=Number(edit.dataset.edit),p=products.find(x=>x.id===id);const next=prompt('قیمت جدید را به تومان وارد کنید:',String(p.price));if(next===null)return;const price=Number(next);if(!Number.isFinite(price)||price<=0){toast('قیمت واردشده معتبر نیست.');return;}p.price=price;save('avan_products',products);renderAdmin();renderProducts();renderCart();toast('قیمت به‌روزرسانی شد.');}
});
$('#newsletter-form').addEventListener('submit',e=>{e.preventDefault();$('#form-message').textContent='ممنون از همراهی شما! این فرم هنوز به سامانه ایمیل متصل نیست.';e.target.reset();});
$('#menu-toggle').addEventListener('click',()=>$('#main-nav').classList.toggle('show'));
$$('#main-nav a').forEach(a=>a.addEventListener('click',()=>$('#main-nav').classList.remove('show')));
renderProducts();renderCart();
