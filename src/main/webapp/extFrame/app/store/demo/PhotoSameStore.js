Ext.define('ExtjsBox.store.demo.PhotoSameStore', {
    extend: 'Ext.data.Store',
	
    alias: 'store.extjsbox.store.demo.PhotoSameStore',

	fields: ['id_amenaza', 'tipo', 'modo', 'codigo', 'denominacion', 'eficiencia'],
	
    data: [{
            id_amenaza: 1,
			codigo: 'corr-11',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 11',
            eficiencia: 'MB'
        },{
            id_amenaza: 1,
			codigo: 'corr-12',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 12',
            eficiencia: 'MB'
        },{
            id_amenaza: 2,
			codigo: 'corr-21',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 21',
            eficiencia: 'MB'
        },{
            id_amenaza: 2,
			codigo: 'corr-22',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 22',
            eficiencia: 'MB'
        },{
            id_amenaza: 3,
			codigo: 'corr-31',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 31',
            eficiencia: 'MB'
        },{
            id_amenaza: 3,
			codigo: 'corr-32',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 32',
            eficiencia: 'MB'
        },{
            id_amenaza: 4,
			codigo: 'corr-41',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 41',
            eficiencia: 'MB'
        },{
            id_amenaza: 4,
			codigo: 'corr-42',
            tipo: 'Correctiva',
            modo: 'Correctiva',
            denominacion: 'correctiva 42',
            eficiencia: 'MB'
        }],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
