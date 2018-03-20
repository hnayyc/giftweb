Ext.define('ExtjsBox.store.douban.music.MusicStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ExtjsBox.store.douban.music.MusicStore',

	pageSize: 10,
	autoLoad: true,
	
	fields: ['name', 'email', 'phone', 'level'],

    data: { 
		items: [
			{ name: 'aaaaa', email: "aaaaa@enterprise.com", phone: "111-1111", level: "1" },
			{ name: 'bbbbb', email: "bbbbb@enterprise.com", phone: "222-2222", level: "2" },
			{ name: 'ccccc', email: "ccccc@enterprise.com", phone: "333-3333", level: "3" },
			{ name: 'ddddd', email: "ddddd@enterprise.com", phone: "444-4444", level: "4" }
		]
	},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
	
/*
	proxy : {
		type : 'ajax',
		url : Udp.getRootPath() + '/music/musicGrid',
		actionMethods : {
			create : 'POST',
			read : 'POST', // by default GET
			update : 'POST',
			destroy : 'POST'
		},
		reader : {
			type : 'json',
			rootProperty : 'rows',
			totalProerty : 'total',
			idProperty : 'id'
		},
		extraParams:{
			orgCode:'', 
			projectBatchId:'', 
			projectSingleName: '',
			musicNode: '',
			minRatio: '',
			maxRatio: '',
			type: ''
		}
	},
	
	listeners: {
		load: function(store, records, successful,eOpts) {
			var jsonData = Ext.JSON.decode(eOpts.getResponse().responseText);
			if(!jsonData.success) {
				Udp.ShowTipsMsg(jsonData.msg, '4000', '2', null);
			}
		}
	}
*/
});