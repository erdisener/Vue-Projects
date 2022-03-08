<template>
  <div class="w-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoices="invoiceList"  :editInvoice="editInvoice"/>
   <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";

import appSidebar from "./components/appSidebar.vue"
import invoiceContent from "./components/invoiceContent.vue"

const invoiceList = ref([
  {
    id: new Date().getTime(),
    contact: {
      contact_name: "Erdi",
        email: "erdi@gmail",
        city: "Bursa",
        country: "turkey",
        zipcode: 12000,
    },
    items: [
      {
        id: new Date().getTime(),
        name: "Ürün1",
        qty: 5,
        unit_price: 3.0,
        total_price: 15.0,
      }
    ]
  }
]);
const state = reactive({ activeInvoice: null });
const saveInvoice = (invoice) => {
  console.log("invoice >>>>>", invoice);
  invoiceList.value.push(invoice);
};

const editInvoice = (invoice) => {
  console.log(invoice);
  state.activeInvoice = invoice;
}

</script>