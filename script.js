const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".header nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll("[data-service]").forEach(a=>a.addEventListener("click",()=>{
  const s=document.querySelector('[name="servico"]');
  if(s){s.value=a.dataset.service}
}));

document.querySelector("#form").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const msg=`Olá, Rota! Vim pelo site e gostaria de solicitar um orçamento.%0A%0A*Nome:* ${f.get("nome")}%0A*Serviço:* ${f.get("servico")}%0A*Endereço:* ${f.get("endereco")}%0A*Detalhes:* ${f.get("mensagem")||"Não informado"}`;
  location.href=`https://wa.me/553591363484?text=${msg}`;
});
