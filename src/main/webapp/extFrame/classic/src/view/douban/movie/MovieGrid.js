Ext.define('ExtjsBox.view.douban.movie.MovieGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ExtjsBox.view.douban.movie.MovieGrid',
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
			{ text: '电影名称', dataIndex: 'movieName',  style :"text-align:center", align:'center', width:200},
			{ text: '评分', dataIndex: 'score', style: 'text-align:center', align:'center', width:200},
			{ text: '参评人数', dataIndex: 'votes', style :"text-align:center", align:'center', width:200},
			{ text: '电影链接', dataIndex: 'movieUrl', style :"text-align:center", align:'center', width:350, renderer: me.linkRender}
		];		

		pageGridStore = Ext.create('ExtjsBox.store.douban.movie.MovieStore');
		this.store = pageGridStore;
		this.bbar = {
			store: me.store,
			xtype: "PageTool"
		}; 
		this.callParent();
	},
	
	ismovieRender: function(value, metaData, record) {
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

