
KindEditor.plugin('link', function(K) {
	var self = this, name = 'link';
	function getSelectedLink() {
		return self.edit.cmd.commonNode({ a : '*' });
	}
	var functions = {
		edit : function() {
			var lang = self.lang(name + '.'),
				html = '<div style="padding:10px 20px;">' +
					//url
					'<div class="ke-dialog-row">' +
					'<label for="keUrl">' + lang.url + '</label>' +
					'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:90%;" /></div>' +
					//type
					'<div class="ke-dialog-row"">' +
					'<label for="keType">' + lang.linkType + '</label>' +
					'<select id="keType" name="type"></select>' +
					'</div>' +
					'</div>',
				dialog = self.createDialog({
					name : name,
					width : 400,
					title : self.lang(name),
					body : html,
					yesBtn : {
						name : self.lang('yes'),
						click : function(e) {
							self.exec('createlink', urlBox.val(), typeBox.val()).hideDialog().focus();
						}
					}
				}),
				div = dialog.div(),
				urlBox = K('input[name="url"]', div),
				typeBox = K('select[name="type"]', div);
			urlBox.val('http://');
			typeBox[0].options[0] = new Option(lang.newWindow, '_blank');
			typeBox[0].options[1] = new Option(lang.selfWindow, '');
			var a = getSelectedLink();
			if (a) {
				urlBox.val(a.attr('href'));
				typeBox.val(a.attr('target'));
			}
			urlBox[0].focus();
			urlBox[0].select();
		},
		'delete' : function() {
			self.exec('unlink', null);
		}
	};
	self.clickToolbar(name, functions.edit);
	K.each(('edit,delete').split(','), function(i, val) {
		self.addContextmenu({
			title : self.lang(val + 'Link'),
			click : function() {
				functions[val]();
				self.hideMenu();
			},
			cond : getSelectedLink,
			width : 150,
			iconClass : val == 'edit' ? 'ke-icon-link' : undefined
		});
	});
	self.addContextmenu({ title : '-' });
});
