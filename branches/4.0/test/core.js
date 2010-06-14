module('core');

test('core', function() {
	//browser version test
	ok(/^\d+$/.test(K.VERSION));
	//each test
	var arr = ['a', 'b'];
	var obj = {a : 'aa', b : 'bb', c : 0, d : null};
	var i = 0;
	K.each(arr, function(key, val) {
		if (key === 0) ok(val === 'a');
		if (key === 1) ok(val === 'b');
		i++;
	});
	ok(i === 2);
	i = 0;
	K.each(obj, function(key, val) {
		if (key === 'a') ok(val === 'aa');
		if (key === 'b') ok(val === 'bb');
		if (key === 'c') ok(val === 0);
		if (key === 'd') ok(val === null);
		i++;
	});
	ok(i === 4);
	i = 0;
	K.each(arr, function(key, val) {
		i++;
		return false;
	});
	ok(i === 1);
	i = 0;
	K.each(obj, function(key, val) {
		i++;
		return true;
	});
	ok(i === 4);
	//isArray test
	ok(K.isArray([]) === true);
	ok(K.isArray(['a', 'b']) === true);
	ok(K.isArray({a : 'a'}) === false);
	ok(K.isArray(null) === false);
	ok(K.isArray(1) === false);
	ok(K.isArray('a') === false);
	ok(K.isArray(0) === false);
	ok(K.isArray('') === false);
	//inArray test
	arr = [null, 0, '', 10, '11', true];
	ok(K.inArray(null, arr) === 0);
	ok(K.inArray(0, arr) === 1);
	ok(K.inArray('', arr) === 2);
	ok(K.inArray(10, arr) === 3);
	ok(K.inArray(11, arr) === -1);
	ok(K.inArray('11', arr) === 4);
	ok(K.inArray(true, arr) === 5);
	ok(K.inArray(false, arr) === -1);
	//trim test
	same(K.trim(' a '), 'a');
	same(K.trim(' a a '), 'a a');
	same(K.trim(' &nbsp; '), '&nbsp;');

	//same(KC.escape('<strong>&lt;"</strong>'), '&lt;strong&gt;&amp;lt;&quot;&lt;/strong&gt;');

	//same(KC.unescape('&lt;strong&gt;&amp;lt;&quot;&lt;/strong&gt;'), '<strong>&lt;"</strong>');
	//toHex test
	same(K.toHex('rgb(0, 0, 0)'), '#000000');
	same(K.toHex('rgb(0, 0, 0)'), '#000000');
	same(K.toHex(' rgb(0, 0, 0) rgb (255, 255, 255) '), ' #000000 #FFFFFF ');
});

