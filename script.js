function route(){
  var h=(location.hash||'#home').slice(1);
  if(!document.getElementById(h))h='home';
  document.querySelectorAll('.page').forEach(function(p){p.classList.toggle('on',p.id===h)});
  document.querySelectorAll('nav a').forEach(function(a){a.classList.toggle('on',a.dataset.p===h)});
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);route();
document.querySelectorAll('.tabs button').forEach(function(b){
  b.onclick=function(){
    document.querySelectorAll('.tabs button').forEach(function(x){x.classList.remove('on')});
    b.classList.add('on');
    document.getElementById('learnF').style.display=b.dataset.t==='learn'?'block':'none';
    document.getElementById('bizF').style.display=b.dataset.t==='biz'?'block':'none';
  };
});
function send(e){e.preventDefault();document.getElementById('form').style.display='none';document.getElementById('ok').style.display='block';return false}
