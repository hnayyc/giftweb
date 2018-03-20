Ext.define('ExtjsBox.view.douban.music.MusicGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ExtjsBox.view.douban.music.MusicGrid',
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
			{ text: '姓名', dataIndex: 'name',  style :"text-align:center", align:'center', width:200},
			{ text: '邮箱', dataIndex: 'email', style :"text-align:center", align:'center', width:200},
			{ text: '电话', dataIndex: 'phone', style: 'text-align:center', align:'center', width:200},
			{ text: '级别', dataIndex: 'level', style :"text-align:center", align:'center', width:200}
		];		

		pageGridStore = Ext.create('ExtjsBox.store.douban.music.MusicStore');
		this.store = pageGridStore;
		this.bbar = {
			store: me.store,
			xtype: "PageTool"
		}; 
		this.callParent();
	},
	
	ismusicRender: function(value, metaData, record) {
		var htmlOk = '<img src="resources/img/bda/ok.png" style="width:20px;height:20px"/>';
		var htmlErr = '<img src="resources/img/bda/err.png" style="width:20px;height:20px"/>';
		var level = record.get('level');
		if(level < 70)
			return htmlErr;
		else
			return htmlOk;
	}
})

