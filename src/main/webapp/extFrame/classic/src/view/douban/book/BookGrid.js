Ext.define('ExtjsBox.view.douban.book.BookGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ExtjsBox.view.douban.book.BookGrid',
    requires: [
        'ExtjsBox.extExtension.PageTool'
	],

	// tbar:{},
    columnLines: true, // 加上表格线
    loadMask: true,
    scrollable:true,
	viewConfig:{
		enableTextSelection :true
    },

	initComponent : function() {
		var me = this;
		me.columns = [
			{ text: '序号', xtype: 'rownumberer', style :"text-align:center", align:'center', width:60},
			{ text: '出版社', dataIndex: 'publisher',  style :"text-align:center", align:'center', width:200},
			{ text: '丛书', dataIndex: 'seriesName',  style :"text-align:center", align:'center', width:200},
			{ text: '书名', dataIndex: 'bookName', style :"text-align:center", align:'left', width:200},
			{ text: '作者', dataIndex: 'author', style :"text-align:center", align:'center', width:200},
			{ text: '作者国籍', dataIndex: 'country', style: 'text-align:center', align:'center', width:150},
			{ text: '链接', dataIndex: 'bookUrl', style :"text-align:center", align:'left', width:350, renderer: me.linkRender}
		];		

		pageGridStore = Ext.create('ExtjsBox.store.douban.book.BookStore');
		this.store = pageGridStore;
		this.bbar = {
			store: me.store,
			xtype: "PageTool"
		}; 
		
		this.callParent();
		
		this.listeners = {
			itemdbclick: function(scope, record, item, index, e, eOpts) {
				var data = record;
			}
		};
	},
	
	isbookRender: function(value, metaData, record) {
		var htmlOk = '<img src="resources/img/bda/ok.png" style="width:20px;height:20px"/>';
		var htmlErr = '<img src="resources/img/bda/err.png" style="width:20px;height:20px"/>';
		var level = record.get('level');
		if(level < 70)
			return htmlErr;
		else
			return htmlOk;
	},
	
	linkRender: function(value, metaData, record) {
		var href = "<a href='" + value + "' target='_blank'>" + value + "</a>";
		return href;
	}
})

