<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando diretivas <strong>v-html</strong>'"></p>
    <p v-html="'Usando diretivas <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
    <p v-destaque.atrasar="cor">Usando diretiva personalizada</p>
    <hr />
    <p v-destaque-local:fundo.atrasar.alternar="{cor1:'green', cor2: 'red', atraso: 2000, intervalo: 200}">
      Usando diretiva personalizada
    </p>
    <p v-destaque-local.atrasar="{cor1:'yellow', atraso: 5000}">Usando diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding) {
        const aplicarCor = cor => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

        let cor1 = binding.value.cor1;
        let cor2 = binding.value.cor2;
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1);
          }
        }, atraso);
      },
    },
  },

  data() {
    return {
      cor: "red",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
