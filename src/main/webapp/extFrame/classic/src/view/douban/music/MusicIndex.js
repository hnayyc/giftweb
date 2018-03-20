Ext.define('ExtjsBox.view.douban.music.MusicIndex', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.ExtjsBox.view.douban.music.MusicIndex',
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
						xtype: 'textfield',
						fieldLabel: '丛书',
						labelStyle: "text-align:right;",
						labelWidth: 60,
						width: 200,
						name: 'seriesName',
						itemId: 'seriesName',
						margin : '5 5 5 5' 
					},{
						xtype: 'textfield',
						fieldLabel: '书名',
						labelStyle: "text-align:right;",
						labelWidth: 60,
						width: 200,
						name: 'musicName',
						itemId: 'musicName',
						margin : '5 5 5 5' 
					},{
						xtype: 'textfield',
						fieldLabel: '出版社',
						labelStyle: "text-align:right;",
						labelWidth: 60,
						width: 200,
						name: 'publishName',
						itemId: 'publishName',
						margin : '5 5 5 5' 
					},{
						xtype: 'textfield',
						fieldLabel: '作者国籍',
						labelStyle: "text-align:right;",
						labelWidth: 60,
						width: 200,
						name: 'authorCountry',
						itemId: 'authorCountry',
						margin : '5 5 5 5' 
					},{
						xtype: 'textfield',
						fieldLabel: '作者',
						labelStyle: "text-align:right;",
						labelWidth: 60,
						width: 200,
						name: 'authorName',
						itemId: 'authorName',
						margin : '5 5 5 5' 
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
                xtype: 'ExtjsBox.view.douban.music.MusicGrid',
                name : 'musicGrid',
                itemId : 'musicGrid'
            }
		];
	},
		
	initComponent: function() {
		var me = this;
		me.items = me._createPanel();
		this.callParent();
		
        me.down("button[name='queryBtn']").on('click', me.onQueryBtnClicked, me);
	},
    
    onQueryBtnClicked: function() {
		var searchForm = this.down("[name='searchForm']");
        var values = searchForm.getValues();
        var grid = this.down("#musicGrid");
        grid.getStore().loadPage(1, {params: values});
	}
});
