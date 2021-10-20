let DirectiveModel = {
	template: `<div>
                <h1 v-text="title"></h1>
                <p v-html='message'></p>
                <input type='text' v-model='inputText'/>
                
                <h2>Tipo checkbox</h2>
                <label>
                <input type='checkbox' v-model='checked'/>
                Active 
                </label>

                <h2> Películas </h2>
                <label v-for='(movie, key) in movies' :key='key'>
                  <input :value='movie' type='checkbox' v-model='favouriteMovies'>
                  {{ movie }}
                </label>
              </div>
            `,
	data() {
		return {
			title: ' Directiva Model',
			message: '<b>Hola desde el componente directive-model</b>',
			show: true,
			inputText: 'Data del Input',
			checked: false,
			favouriteMovies: [],
			movies: ['Avengers', 'Loki', 'buscando a nemo', 'Harry Petas'],
		};
	},
};
