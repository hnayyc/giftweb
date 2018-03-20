Ext.define('ExtjsBox.extExtension.PageTool', {
	extend : 'Ext.toolbar.Paging',
	requires:['ExtjsBox.extExtension.PageExpand'],
	alias : 'widget.PageTool',
	plugins: {ptype:'pageExpand'},
	displayMsg : '显示{0}-{1}条，共{2}条',
	emptyMsg : "没有数据",
	displayInfo : true
});