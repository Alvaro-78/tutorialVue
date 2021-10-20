let DirectiveHtml = {
	template: `<div>
               <h1 v-text="title"></h1>
                <p v-html="message"> </p>
              </div>
            `,
	data() {
		return {
			title: ' Directiva HTML',
			message: '<b>Hola desde el componente directive-html</b>',
		};
	},
};
