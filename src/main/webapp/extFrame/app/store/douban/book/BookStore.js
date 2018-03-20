Ext.define('ExtjsBox.store.douban.book.BookStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ExtjsBox.store.douban.book.BookStore',

	pageSize: 20,
	autoLoad: true,
	
	fields: ['publisher', 'seriesName', 'bookName', 'country', 'author', 'bookUrl'],

    data: { 
		items: [
			{ publisher: '社会科学文献出版社', seriesName: '甲骨文丛书', bookName: '阿拉伯的劳伦斯', 
			  country: '美国', author: '斯科特·安德森', bookUrl: 'https://book.douban.com/subject/25883305/' },
			{ publisher: '社会科学文献出版社', seriesName: '甲骨文丛书', bookName: '伯罗奔尼撒战争', 
			  country: '美国', author: '唐纳德·卡根', bookUrl: 'https://book.douban.com/subject/26451505/' },
			{ publisher: '社会科学文献出版社', seriesName: '甲骨文丛书', bookName: '天国之秋', 
			  country: '美国', author: '裴士锋', bookUrl: 'https://book.douban.com/subject/25938605/' },
			
			{ publisher: '北京联合出版公司', seriesName: '后浪大学堂', bookName: '中国近代史', 
			  country: '美国', author: '徐中约', bookUrl: 'https://book.douban.com/subject/2376486/' },
			{ publisher: '北京联合出版公司', seriesName: '后浪大学堂', bookName: '意识形态起源和影响', 
			  country: '美国', author: '利昂·P. 巴拉达特', bookUrl: 'https://book.douban.com/subject/3095037/' },
			{ publisher: '北京联合出版公司', seriesName: '后浪大学堂', bookName: '听音乐', 
			  country: '美国', author: '罗杰·凯密恩', bookUrl: 'https://book.douban.com/subject/25938605/' },
			  
			{ publisher: '广西师范大学出版', seriesName: '理想国译丛', bookName: '奥斯维辛', 
			  country: '英国', author: '劳伦斯•里斯', bookUrl: 'https://book.douban.com/subject/26861418/' },
			{ publisher: '广西师范大学出版', seriesName: '理想国译丛', bookName: '耳语者', 
			  country: '英国', author: '奥兰多·费吉斯', bookUrl: 'https://book.douban.com/subject/25953571/' },
			{ publisher: '广西师范大学出版', seriesName: '理想国译丛', bookName: '档案 : 一部个人史', 
			  country: '英国', author: '蒂莫西·加顿艾什', bookUrl: 'https://book.douban.com/subject/26577706/' },			  
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
		url : Udp.getRootPath() + '/book/bookGrid',
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
			bookNode: '',
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