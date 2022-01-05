<template>
    <div class="container">
        <div class="header">
            <slot name="title"/>
        </div>
        <div class="content">
            <slot name="content"/>
        </div>
        <div class="footer text-right">
            <button>Kapat</button>
            <button @click="OnSave" class="green">Kaydet</button>
        </div>
    </div>
</template>

<script>

export default {
    props : ["title","content","OnSave"]
}
</script>
