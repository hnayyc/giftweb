/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('extjsbox.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'extjsbox.view.main.MainController',
        'extjsbox.view.main.MainModel',
        'extjsbox.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                // text: '{name}'
				text: '豆瓣'
            },
            flex: 0
        },
        iconCls: 'fa-home'
		// iconCls: 'fa-th-list'
		// icon: 'resources/image/douban.png'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [/*
		{
			title: 'Home',
			iconCls: 'fa-home',
			// The following grid shares a store with the classic version's grid as well!
			items: [{
				xtype: 'mainlist'
			}]
		}, {
			title: 'Users',
			iconCls: 'fa-user',
			bind: {
				html: '{loremIpsum}'
			}
		},{
			title: '照片雷同',
			iconCls: 'fa-home',
			items: [{
				xtype: 'extjsbox.view.demo.DubietyPhotoGrid'
			}]
		}, */
		{
			title: '豆瓣读书',
			iconCls: 'fa-book',
			items: [{
				xtype: 'ExtjsBox.view.douban.book.BookIndex'
			}]
		},{
			title: '豆瓣电影',
			iconCls: 'fa-film',
			items: [{
				xtype: 'ExtjsBox.view.douban.movie.MovieIndex'
			}]
		},{
			title: '豆瓣音乐',
			iconCls: 'fa-music',
			items: [{
				xtype: 'ExtjsBox.view.douban.music.MusicIndex'
			}]
		}
	]
});
