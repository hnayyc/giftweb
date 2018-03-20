Ext.define('ExtjsBox.view.demo.DubietyPhotoGrid', {
    extend: 'Ext.grid.Panel',
	
    alias: 'widget.extjsbox.view.demo.DubietyPhotoGrid',
	
	//renderTo: Ext.getBody(),
    store: new Ext.create('ExtjsBox.store.demo.PhotoBasicStore'),
	
	collapsible: false,
    animCollapse: false,
	columnLines: true, // 加上表格线
	loadMask: true,
    scrollable:true,
	viewConfig:{
		enableTextSelection :true
    },
	
    columns: [
		{ text: 'ID', dataIndex: 'id', hidden: true, hideable: false}, 
		{ text: 'code', dataIndex: 'code', flex: 1, sortable: true, hideable: false}, 
		{ text: 'name', dataIndex: 'name', flex: 1}, 
		{ text: 'riesgo_a', dataIndex: 'riesgo_a', flex: 1}, 
		{ text: 'riesgo_c', dataIndex: 'riesgo_c', flex: 1}, 
		{ text: 'riesgo_i', dataIndex: 'riesgo_i', flex: 1}, 
		{ text: 'riesgo_d', dataIndex: 'riesgo_d', flex: 1}, 
		{ text: 'riesgo_t', dataIndex: 'riesgo_t', flex: 1}, 
		{ text: 'riesgo_total', dataIndex: 'riesgo_total', flex: 1}
	],
	
    plugins: [{
        ptype: "subtable",
        headerWidth: 30,  // 折叠图标所在列，即第一列的宽度。
        columns: [
			//注意：ptype：'subtable'的columns不支持{ text: '序号', xtype: 'rownumberer'}
			{ text: 'id_amenaza', dataIndex: 'id_amenaza', flex: 1}, 
			{ text: 'codigo', dataIndex: 'codigo', flex: 1},
			{ text: 'tipo', dataIndex: 'tipo', flex: 1},
			{ text: 'modo', dataIndex: 'modo', flex: 1},
			{ text: 'denominacion', dataIndex: 'denominacion', flex: 1},
			{ text: 'eficiencia', dataIndex: 'eficiencia', flex: 1}
		],
		
		// 此函数很重要！！用来遍历计算主从数据的所属关系。
        getAssociatedRecords: function (record) {
			var samePhoto = new Ext.create('ExtjsBox.store.demo.PhotoSameStore');
            var result = Ext.Array.filter( // 此函数作用是对数组arry中的每个元素r用function进行处理。
			samePhoto.data.items,
            function (r) {
				if(r.get('id_amenaza') == record.get('id'))
					return r;
                // return r.get('id_amenaza') == record.get('id');
            });
            return result;
        }
    }]
});