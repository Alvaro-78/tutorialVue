let DirectiveShow = {
	template: `<div>
               <h1 v-text="title"></h1>
                <p v-show='show' v-html="message"> </p>
                <p v-show='user.permission'>El usuario tiene permisos</p>
                <p v-show='!user.permission'>El usuario no tiene permisos</p>
              </div>
            `,
	data() {
		return {
			title: ' Directiva Show',
			message: '<b>Hola desde el componente directive-show</b>',
			show: true,
			user: {
				permission: false,
			},
		};
	},
};
