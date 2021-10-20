Vue.component('vue-directives', {
	template: `<div>
               <h1 v-text="title"></h1>
                <a :href='link.href' v-text='link.text'></a>
                <DirectiveHtml />
                <DirectiveShow />
                <DirectiveIf />
                <DirectiveFor />
                <DirectiveOn />
                <DirectiveModel/>
              </div>
            `,
	data() {
		return {
			title: ' Directivas Vue',
			link: {
				text: 'Álvaro linkedin',
				href: 'https://www.google.es/',
				title: 'mi perfil en linkedin',
			},
		};
	},
	components: {
		DirectiveHtml,
		DirectiveShow,
		DirectiveIf,
		DirectiveFor,
		DirectiveOn,
		DirectiveModel,
	},
});
