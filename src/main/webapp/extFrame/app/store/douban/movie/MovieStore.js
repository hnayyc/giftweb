Ext.define('ExtjsBox.store.douban.movie.MovieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ExtjsBox.store.douban.movie.MovieStore',

	pageSize: 10,
	autoLoad: true,
	
	fields: ['movieName', 'movieUrl', 'score', 'votes'],

    data: { 
		items: [
			{ movieName: '三块广告牌', movieUrl: "https://movie.douban.com/subject/26611804/", score: "8.7", votes: "56075" },
			{ movieName: '七个神经病', movieUrl: "https://movie.douban.com/subject/6753166/", score: "7.6", votes: "52268" },
			{ movieName: '杀手没有假期', movieUrl: "https://movie.douban.com/subject/2044089/", score: "8.1", votes: "83290" },
			{ movieName: '秘密特工', movieUrl: "https://movie.douban.com/subject/6845667/", score: "8.0", votes: "76849" }
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
		url : Udp.getRootPath() + '/movie/movieGrid',
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
			movieNode: '',
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