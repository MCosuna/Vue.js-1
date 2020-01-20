var app = new Vue({
  el: "#app",
  data: {
    // lista: [],
    texto: "",
    todos: [
      // { text: this.texto },
    ],
    listaVisible: true,
    total: 0,
    realizadas: 0
  },
  mounted() {
    if (localStorage.getItem("notas")) 
      this.todos = JSON.parse(localStorage.getItem("notas")); //Mostrar las cosas de la lista
    }
  ,
  methods: {
    metodo: function (index) {
      this.todos.push({text: this.texto});
      this.texto = "";
      this.total = this.todos.length; //Total del array todos
      localStorage.setItem("notas", JSON.stringify(this.todos)); //Lo guardamos en el array todos
      // this.realizadas = this.total--;
    },
    eliminar: function () {
      for (let i = 0; i < this.todos.length; i++) {
        //recorremos el array posición por posición
        if (this.todos[i].seleccion == true) {
          //Si la selección es true entramos en la condición
          this.todos.splice(i, 1);
          localStorage.removeItem(this.todos[i]);
        }
        localStorage.setItem("notas", JSON.stringify(this.todos));
        this.total = this.todos.length; //Total del array todos
      }
    },
    comprueba: function (elemento) {
      if (elemento.seleccion == false) {
        elemento.seleccion = true;
        this.total.length;
      } else {
        elemento.seleccion = false;
        this.realizadas = this.total--;
      }
      // localStorage.notas=JSON.stringify(this.arr);
      localStorage.realizadas = JSON.stringify(this.realizadas);
    }
    // ordenar:
  },
  computed: {
    created: function () {
      localStorage.getItem("notas"); //Lo sacamos del array todos
    }
  }
});
