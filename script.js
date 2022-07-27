const tecnologias = document.querySelectorAll('.tecnologias-container i');
const tooltip = document.querySelectorAll('.tooltip');

function showToolTip(index) {
  tooltip.forEach((item) => {
    item.classList.remove('ativo');
  });
  tooltip[index].classList.toggle('ativo');
};

tecnologias.forEach((item, index) => {
  item.addEventListener('click', () => {
    showToolTip(index);
  });
});