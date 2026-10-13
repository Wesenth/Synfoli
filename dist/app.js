const themes=['boutique','ranch','boho'];
const notes={boutique:'皮革棕 · 经典衬线 · 精品陈列',ranch:'深棕色 · 西部招牌字体 · 沉浸大图',boho:'奶油白 · 轻盈衬线 · 拱形留白'};
function setTheme(theme){if(!themes.includes(theme))theme='boutique';document.documentElement.dataset.theme=theme;document.querySelectorAll('[data-style]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.style===theme)));document.querySelector('#design-note').textContent=notes[theme];const url=new URL(location);url.searchParams.set('style',theme);history.replaceState(null,'',url);}
document.querySelectorAll('[data-style]').forEach(b=>b.addEventListener('click',()=>{setTheme(b.dataset.style);window.scrollTo({top:0,behavior:'instant'});}));
setTheme(new URLSearchParams(location.search).get('style'));
const imageDialog=document.querySelector('#image-dialog');
document.addEventListener('click',e=>{const b=e.target.closest('.zoom-image');if(b){const img=imageDialog.querySelector('img');img.src=b.dataset.image;img.alt=b.querySelector('img').alt;imageDialog.showModal();}if(e.target.closest('#image-dialog .close')||e.target===imageDialog)imageDialog.close();});
const selected=new Set();let toastTimer;
function showToast(message){const toast=document.querySelector('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2500);}
document.querySelectorAll('[data-product]').forEach(b=>b.addEventListener('click',()=>{const name=b.dataset.product;if(selected.has(name)){selected.delete(name);b.innerHTML='Add to inquiry <span>＋</span>';b.setAttribute('aria-pressed','false');showToast('Style removed from inquiry');}else{selected.add(name);b.innerHTML='Added to inquiry <span>✓</span>';b.setAttribute('aria-pressed','true');showToast('Style added. Complete your inquiry below.');}document.querySelector('#selected-styles').value=[...selected].join('; ');}));
document.querySelector('#retail-link').addEventListener('click',()=>document.querySelector('#buyer-type').value='Personal / Retail inquiry');
const inquiryDialog=document.querySelector('#inquiry-dialog');const preview=document.querySelector('#inquiry-preview');const emailLink=document.querySelector('#email-link');
function updateEmail(){emailLink.href='mailto:service@synfoli.com?subject='+encodeURIComponent('Synfoli jewelry inquiry')+'&body='+encodeURIComponent(preview.value);}
document.querySelector('#inquiry-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);preview.value=`Hello Synfoli,\n\nI am interested in ${d.get('type')}.\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nStore: ${d.get('store')||'—'}\nSelected styles: ${d.get('styles')||'To discuss'}\n\n${d.get('message')}\n\nPlease share pricing, order minimums, availability and delivery options.\n\nThank you,\n${d.get('name')}`;updateEmail();document.querySelector('#inquiry-status').textContent='Nothing has been sent yet.';inquiryDialog.showModal();});
preview.addEventListener('input',updateEmail);
inquiryDialog.querySelector('.close').addEventListener('click',()=>inquiryDialog.close());
inquiryDialog.addEventListener('click',e=>{if(e.target===inquiryDialog)inquiryDialog.close();});
document.querySelector('#copy-inquiry').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(preview.value);document.querySelector('#inquiry-status').textContent='Inquiry copied. Paste it into your preferred email app.';}catch{preview.select();document.querySelector('#inquiry-status').textContent='Select and copy the text to your email app.';}});
