
import { ref, computed } from "vue";

export default function () {
  const counter = ref(0);
  const oddOrEven = computed(() => (counter.value % 2 == 0 ? "Çift" : "Tek"));

    return {
      counter,
      oddOrEven
    };
}