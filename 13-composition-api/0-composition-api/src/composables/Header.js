
import { ref, computed } from "vue";

export default function () {
    const title = ref("Setup başlığı");
    const titleLengthMessage = computed(() => title.value.length + " adet karakter vardır");

    return {
        title,
        titleLengthMessage
    }
}