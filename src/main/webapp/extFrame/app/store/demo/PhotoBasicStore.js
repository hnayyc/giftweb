Ext.define('ExtjsBox.store.demo.PhotoBasicStore', {
    extend: 'Ext.data.Store',
	
    alias: 'store.extjsbox.store.demo.PhotoBasicStore',

	fields: [
		'id', 'code', 'name', 'a_impacto', 'riesgo_a', 
		'c_impacto', 'riesgo_c', 'i_impacto', 'riesgo_i', 'd_impacto', 
		'riesgo_d', 't_impacto', 'riesgo_t', 'riesgo_total_impacto', 'riesgo_total'
	],
	
    data: [{
            id: 1,
            code: 'E.1',
            name: 'Errores de los usuarios',
            riesgo_a: '0',
            riesgo_c: '0',
            riesgo_i: '0',
            riesgo_d: '1015875',
            riesgo_t: '0',
            riesgo_total: '1015875'
        }, {
            id: 2,
            code: 'E.2',
            name: 'Deficiencias en la organización',
            riesgo_a: '0',
            riesgo_c: '0',
            riesgo_i: '0',
            riesgo_d: '526750',
            riesgo_t: '0',
            riesgo_total: '526750'
        }, {
            id: 3,
            code: 'E.3',
            name: 'Escapes de información',
            riesgo_a: '0',
            riesgo_c: '0',
            riesgo_i: '0',
            riesgo_d: '752500',
            riesgo_t: '0',
            riesgo_total: '752500'
        }, {
            id: 4,
            code: 'E.4',
            name: 'Alteración accidental de la información',
            riesgo_a: '0',
            riesgo_c: '0',
            riesgo_i: '0',
            riesgo_d: '376250',
            riesgo_t: '0',
            riesgo_total: '376250'
        }],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
