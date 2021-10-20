let DirectiveFor = {
	template: `<div>
               <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <ul>
                  <li v-for='(color, index) in list' :key='index' v-text='color'></li>
                </ul>
                <h3>Lista de Objetos</h3>
                <ul>
                  <li v-for='(item, key, index) in object_list' :key='index'>
                  {{ key }} : {{ item }}
                  </li>
                </ul>
                <h3>Lista de un Array con objetos</h3>
                <ul>
                  <li v-for='(item, index) in other_list' :key='index'>
                  Name: {{ item.name }} {{ item.last_name }}
                  </li>
                </ul>
              </div>
            `,
	data() {
		return {
			title: ' Directiva For',
			message: '<b>Hola desde el componente directive-for</b>',
			list: ['red', 'yellow', 'blue', 'brown', 'purple'],
			object_list: {
				name: 'Manolo',
				last_name: 'Del Bombo',
				nick: 'MDB',
			},
			other_list: [
				{
					name: 'Manolo',
					last_name: 'Del Bombo',
					nick: 'MDB',
				},
				{
					name: 'Armando',
					last_name: 'Jaleo Segura',
					nick: 'AJS',
				},
				{
					name: 'Aitor',
					last_name: 'Menta',
					nick: 'AM',
				},
			],
		};
	},
};
