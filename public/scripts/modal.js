<script>
function iniciaModal(modalID) {
  const modal = document.getElementById(modalID)
  modal.classList.add('mostrar')
  modal.addEventListener('click', (event) => {
    if(event.target.id == modalID || event.target.className == 'fechar') {
      modal.classList.remove('mostrar')
    }
  })
}

iniciaModal('modal-promocao')


</script>