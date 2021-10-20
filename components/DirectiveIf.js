let DirectiveIf = {
	template: `<div>
               <h1 v-text="title"></h1>
                <p v-if='show' v-html="message"> </p>
                <h1>Uso del v-if v-else</h1>
                <p v-if='user.permission'>El usuario tiene permisos</p>
                <p v-else-if='user.permission'>El usuario tiene permisos</p>
                <h1>Uso del v-if v-else y v-else-if</h1>
                <p v-if='user.permission && user.vip'>El usuario tiene permisos y es V.I.P</p>
                <p v-else-if='user.permission'>El usuario tiene permisos</p>
                <p v-else-if='user.vip'>El usuario es V.I.P</p>
                <p v-else='!user.permission && !user.vip'>El usuario no tiene permisos ni es V.I.P</p>
              </div>
            `,
	data() {
		return {
			title: ' Directiva If',
			message: '<b>Hola desde el componente directive-if</b>',
			show: true,
			user: {
				permission: true,
				vip: true,
			},
		};
	},
};
