Ext.define('ExtjsBox.view.douban.book.BookIndex', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.ExtjsBox.view.douban.book.BookIndex',
	requires: [
		// 'ExtjsBox.store.udp.common.GetOrgByPidStore',
		// 'ExtjsBox.extExtension.TreeComboBox'
	],

	autoScroll: true,
	/*
	* 当GridPanel被添加到容器，且容器的layout为layout:'vbox'时候， 
	* 会出现 Layout run failed 后者GridPanel的尺寸没有撑满父容器
    * 解决办法是，要给父容器设置一个高度，但问题是，高度没有办法定死。
	* 且写死后，也没有解决此问题。
	* 合适的解决办法是：给父容器的layout添加align: 'stretch'设置。
	*/
	layout: {
        type: 'vbox',
        align: 'stretch'
    },
	
	_createPanel: function(){
		return [
			{
				xtype: 'form',
				name: 'searchForm',
				itemId: 'serchForm',
                layout: 'hbox',
                defaults : {
					layout : 'form'
				},
				items: [
					{
						xtype: 'combo',
						fieldLabel: '出版社',
						labelStyle: "text-align:right;",
						labelWidth: 50,
						width: 250,
						name: 'publiser',
						itemId: 'publiser',
						matchFieldWidth : false, // 出版社名字不换行
						emptyText : '全部出版社',
						store: ['社会科学文献出版社', '北京联合出版公司', '中信出版社', '广西师范大学出版' ],
						margin : '5 5 5 5' 
					},{
						xtype: 'combo',
						fieldLabel: '丛书',
						labelStyle: "text-align:right;",
						labelWidth: 40,
						width: 250,
						name: 'bookSeries',
						itemId: 'bookSeries',
						emptyText : '全部丛书',
						store: ['甲骨文丛书', '汗青堂', '后浪大学堂', '理想国译丛'],
						margin : '5 5 5 5'
					},{
						xtype: 'combo',
						fieldLabel: '作者国籍',
						labelStyle: "text-align:right;",
						labelWidth: 60,
						width: 150,
						name: 'country',
						itemId: 'country',
						emptyText : '全部',
						store: ['中国', '美国', '英国', '法国', '德国', '日本'],
						margin : '5 5 5 5' 
					},{
						xtype: 'textfield',
						fieldLabel: '作者',
						labelStyle: "text-align:right;",
						labelWidth: 40,
						width: 200,
						name: 'author',
						itemId: 'author',
						margin : '5 5 5 5' 
					},{
						xtype: 'textfield',
						fieldLabel: '书名',
						labelStyle: "text-align:right;",
						labelWidth: 40,
						width: 250,
						name: 'bookName',
						itemId: 'bookName',
						margin : '5 5 5 5' 
					},{
						xtype: 'button',
						name: 'addBtn',
						text: '添加',
						width: 100,
						margin : '5 5 5 5' ,
						iconCls: 'fa fa-search'
					},{
						xtype: 'button',
						name: 'queryBtn',
						text: '查询',
						width: 100,
						margin : '5 5 5 5' ,
						iconCls: 'fa fa-search'
					}
				]
            },{
                xtype: 'ExtjsBox.view.douban.book.BookGrid',
                name : 'bookGrid',
                itemId : 'bookGrid'
            }
		];
	},
		
	initComponent: function() {
		var me = this;
		me.items = me._createPanel();
		
		this.callParent();
		
        me.down("button[name='addBtn']").on('click', me.onAddBtnClicked, me);
		me.down("button[name='queryBtn']").on('click', me.onQueryBtnClicked, me);
		me.down('grid').on('rowdblclick', me.onGridRowdblclicked, me);
	},
    
	onAddBtnClicked: function() {
		var searchForm = this.down("[name='searchForm']");
        var values = searchForm.getValues();
        var grid = this.down("#bookGrid");
        grid.getStore().loadPage(1, {params: values});
	},
	
    onQueryBtnClicked: function() {
		var searchForm = this.down("[name='searchForm']");
        var values = searchForm.getValues();
        var grid = this.down("#bookGrid");
        grid.getStore().loadPage(1, {params: values});
	},
	
	onGridRowdblclicked: function(scope, record, tr, rowIndex, e, eOpts) {
		var data = record.getData();
		var publisher = data.publisher;
		var seriesName = data.seriesName;
		var bookName = data.bookName;
		var country = data.country;
	}
});
