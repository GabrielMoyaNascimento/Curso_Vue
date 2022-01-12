new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("Estou exibindo um alerta")
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})