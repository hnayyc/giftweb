Ext.define('ExtjsBox.extExtension.PageExpand',{
    extend:'Ext.util.Observable',
    alias :'plugin.pageExpand',
    
	pageSizes: [
		[-1,'不分页'],
		[5,5],[10,10],[15,15],[20,20],
		[25,25],[30,30],[50,50],[70,70],
		[100,100],[200,200]
	],
	
//    pageSizeText: [{ name: '5',values:'5' },
//                   { name: '10',values:'10' }],
    prefixText: '每页 ',
    postfixText: '条',
    addToItem: false,    //true添加到items中去，配合index；false则直接添加到最后
    index: 0,           //在items中的位置
    init: function(pagingToolbar) {
        var ps = this.pageSizes;
        var combo = Ext.create('Ext.form.ComboBox',{
        	forceSelection : true,
			queryMode: 'local',
			editable : false,
//			displayField : 'name',
//			valueField : 'values',
            width: 90,
            store: ps,
            loadPages: function() {
                var rowIndex = 0;
                var gp = pagingToolbar.findParentBy(
                                function(ct, cmp) { return (ct instanceof Ext.grid.GridPanel) ? true : false; }
                              );
                gp.store.setPageSize(pagingToolbar.pageSize);
                gp.store.currentPage=1;
//                var sm = gp.getSelectionModel();
//                if (undefined != sm && sm.hasSelection()) {
//                    if (sm instanceof Ext.grid.RowSelectionModel) {
//                        rowIndex = gp.store.indexOf(sm.getSelected());
//                    } else if (sm instanceof Ext.grid.CellSelectionModel) {
//                        rowIndex = sm.getSelectedCell()[0];
//                    }
//                }
//                rowIndex += 10;
                if(pagingToolbar.pageSize == gp.store.totalCount){
                   pagingToolbar.pageSize = -1;
                }
                pagingToolbar.doRefresh();
            },
            listeners: {
                select: function(c, r, i) {
                	if(r.data.field1 == -1){
                	   pagingToolbar.pageSize = pagingToolbar.store.totalCount;
                	}else{
                	   pagingToolbar.pageSize = r.data.field1;
                	}
                    
                    this.loadPages();
                }
//                blur: function() {
//                    var pagesizeTemp = Number(this.getValue());
//                    if (isNaN(pagesizeTemp)) {
//                        this.setValue(pagingToolbar.pageSize);
//                        return;
//                    }
//                    pagingToolbar.pageSize = Number(this.getValue());
//                    this.loadPages();
//                }
            }
        });
        if (this.addToItem) {
            var inputIndex = this.index;
            if (inputIndex > pagingToolbar.items.length) inputIndex = pagingToolbar.items.length;
            pagingToolbar.insert(++inputIndex, '-');
            pagingToolbar.insert(++inputIndex, this.prefixText);
            pagingToolbar.insert(++inputIndex, combo);
            pagingToolbar.insert(++inputIndex, this.postfixText);
        }
        else {
            pagingToolbar.add('-');
            pagingToolbar.add(this.prefixText);
            pagingToolbar.add(combo);
            pagingToolbar.add(this.postfixText);
        }
        pagingToolbar.on({
            beforedestroy: function() {
                combo.destroy();
            },
            change: function() {
            	if(typeof(pagingToolbar.pageSize) == "undefined"){
            	    combo.setValue(pagingToolbar.store.pageSize);
            	}else{
            		combo.setValue(pagingToolbar.pageSize);
            	}
                
            }
        });

    }
})