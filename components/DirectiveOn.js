let DirectiveOn = {
	template: `
              <header>
              <h1 v-text='title'></h1>
              <p v-html='message'></p>

              <p v-text='movie'></p>
              <button @click.stop.prevent='buyTicket'>Comprar entrada</button>
              disponibles: <span v-text='ticket'></span>
              <div>
              <h1>Modificando vista y modelo</h1>
                <input type='text' :value='textInput'@keyup='updateDataInputText'/>
              </div>
              </header>
            `,
	data() {
		return {
			title: 'Directiva v-on',
			message: '<b>Hola desde el componente directive-on</b>',
			welcome_text: 'Bienvenido desde la data',
			ticket: 5,
			movie: 'Avengers',
			textInput: 'Valor por defecto',
		};
	},
	methods: {
		greeting() {
			alert(this.welcome_text);
		},
		buyTicket() {
			if (this.ticket > 0) {
				this.ticket--;
				return alert(`Entrada para ${this.movie} comprada`);
			}
			return alert('Ya no quedan entradas');
		},
		updateDataInputText(event) {
			this.textInput = event.target.value;
		},
	},
};
