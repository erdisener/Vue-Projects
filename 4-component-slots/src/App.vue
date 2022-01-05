<template>
<!--   <Modal :OnSave="onsave" :title="'Erdi'" :content="'neler oluyor bizeneler oluyor'" /> -->

  <Modal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
      </template>
    <template #content>
      <p>Slot ile gelen içerik bilgisi</p>
      </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: {
    Modal,
  },
  methods: {
    onsave() {
      alert("Saved");
    }
  }
}
</script>
