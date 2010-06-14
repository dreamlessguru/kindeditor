module('range');

test('range', function() {
	expect(6);

	var range = K.range(document);

	ok(range.startContainer === document);
	ok(range.startOffset === 0);
	ok(range.endContainer === document);
	ok(range.endOffset === 0);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === document);
});

test('range.setStart', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStart(strong.previousSibling, 3);

	ok(range.startContainer === strong.previousSibling);
	ok(range.startOffset === 3);
	ok(range.endContainer === strong.previousSibling);
	ok(range.endOffset === 3);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === strong.previousSibling);
});

test('range.setEnd', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStart(strong.previousSibling, 3);
	range.setEnd(p, 4);

	ok(range.startContainer === strong.previousSibling);
	ok(range.startOffset === 3);
	ok(range.endContainer === p);
	ok(range.endOffset === 4);
	ok(range.collapsed === false);
	ok(range.commonAncestorContainer === p);
});

test('range.setStartBefore', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStartBefore(strong);

	ok(range.startContainer === p);
	ok(range.startOffset === 1);
	ok(range.endContainer === p);
	ok(range.endOffset === 1);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === p);
});

test('range.setStartAfter', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStartAfter(strong);

	ok(range.startContainer === p);
	ok(range.startOffset === 2);
	ok(range.endContainer === p);
	ok(range.endOffset === 2);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === p);
});

test('range.setEndBefore', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStartAfter(strong);
	range.setEndBefore(strong);
	ok(range.startContainer === p);
	ok(range.startOffset === 1);
	ok(range.endContainer === p);
	ok(range.endOffset === 1);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === p);
});

test('range.setEndAfter', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStartAfter(strong);
	range.setEndAfter(strong);

	ok(range.startContainer === p);
	ok(range.startOffset === 2);
	ok(range.endContainer === p);
	ok(range.endOffset === 2);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === p);
});

test('range.selectNode', function() {
	expect(6);

	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.selectNode(strong);
	ok(range.startContainer === p);
	ok(range.startOffset === 1);
	ok(range.endContainer === p);
	ok(range.endOffset === 2);
	ok(range.collapsed === false);
	ok(range.commonAncestorContainer === p);
});

test('range.selectNodeContents', function() {
	var range, strong, img, p;
	//1
	strong = K.query('#test-data-01 strong');
	range = K.range(document);
	range.selectNodeContents(strong);
	ok(range.startContainer === strong);
	ok(range.startOffset === 0);
	ok(range.endContainer === strong);
	ok(range.endOffset === 1);
	ok(range.collapsed === false);
	ok(range.commonAncestorContainer === strong);
	//2
	img = K.query('#test-data-01 img');
	range = K.range(document);
	range.selectNodeContents(img);
	ok(range.startContainer === img.parentNode);
	ok(range.startOffset === 3);
	ok(range.endContainer === img.parentNode);
	ok(range.endOffset === 4);
	ok(range.collapsed === false);
	ok(range.commonAncestorContainer === img.parentNode);
	//3
	strong = K.query('#test-data-02 strong');
	range = K.range(document);
	range.selectNodeContents(strong);
	ok(range.startContainer === strong);
	ok(range.startOffset === 0);
	ok(range.endContainer === strong);
	ok(range.endOffset === 0);
	ok(range.collapsed === true);
	ok(range.commonAncestorContainer === strong);
	//4
	p = K.query('#test-data-02 p');
	range = K.range(document);
	range.selectNodeContents(p);
	ok(range.startContainer === p);
	ok(range.endContainer === p);
	if (K.IE) {
		ok(range.startOffset === 0);
		ok(range.endOffset === 7);
	} else {
		ok(range.startOffset === 1);
		ok(range.endOffset === 9);
	}
	ok(range.collapsed === false);
	ok(range.commonAncestorContainer === p);
});

test('range.collapse', function() {
	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');
	var range;
	range = K.range(document);
	range.setStart(p.childNodes[2], 0);
	range.setEnd(p.childNodes[4], 2);
	range.collapse(true);
	ok(range.startContainer === range.endContainer);
	ok(range.startOffset === range.endOffset);
	ok(range.collapsed === true);
	range = K.range(document);
	range.setStart(p.childNodes[2], 0);
	range.setEnd(p.childNodes[4], 2);
	range.collapse(false);
	ok(range.startContainer === range.endContainer);
	ok(range.startOffset === range.endOffset);
	ok(range.collapsed === true);
});

test('range.get', function() {
	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');
	range = K.range(document);
	range.selectNode(strong);
	if (K.IE) {
		same(range.get().text, 'efg');
	} else {
		same(range.get().toString(), 'efg');
	}
});

test('range.compareBoundaryPoints', function() {
	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');
	var cmp, rangeA, rangeB;
	//1
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.setStart(p.childNodes[0], 0);
	rangeA.setEnd(p.childNodes[0], 2);
	rangeB.setStart(p.childNodes[4], 0);
	rangeB.setEnd(p.childNodes[4], 2);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);
	//2
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.setStart(p.childNodes[0], 0);
	rangeA.setEnd(p.childNodes[4], 3);
	rangeB.setStart(p.childNodes[4], 0);
	rangeB.setEnd(p.childNodes[4], 2);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);
	//3
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.setStart(p.childNodes[0], 0);
	rangeA.setEnd(p.childNodes[2], 3);
	rangeB.setStart(p.childNodes[2], 0);
	rangeB.setEnd(p.childNodes[4], 2);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);
	//4
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.selectNode(strong);
	rangeB.selectNode(p);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);
	//5
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.setStart(p.childNodes[0], 0);
	rangeA.setEnd(p.childNodes[0], 2);
	rangeB.setStart(p.childNodes[0], 0);
	rangeB.setEnd(p.childNodes[0], 2);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === 0);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === 0);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);
	//6
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.selectNode(strong);
	rangeB.selectNode(strong.firstChild);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);
	//7
	rangeA = K.range(document);
	rangeB = K.range(document);
	rangeA.selectNode(strong.firstChild);
	rangeB.setStart(strong.firstChild, 0);
	rangeB.setEnd(strong.firstChild, 2);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_START, rangeB);
	ok(cmp === -1);
	cmp = rangeA.compareBoundaryPoints(K.START_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_END, rangeB);
	ok(cmp === 1);
	cmp = rangeA.compareBoundaryPoints(K.END_TO_START, rangeB);
	ok(cmp === -1);

});

test('range.cloneRange', function() {
	expect(6);
	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');

	var range = K.range(document);
	range.setStart(p.childNodes[2], 0);
	range.setEnd(p.childNodes[4], 2);
	var cloneRange = range.cloneRange();
	ok(range.startContainer === cloneRange.startContainer);
	ok(range.startOffset === cloneRange.startOffset);
	ok(range.endContainer === cloneRange.endContainer);
	ok(range.endOffset === cloneRange.endOffset);
	ok(range.collapsed === cloneRange.collapsed);
	ok(range.commonAncestorContainer === cloneRange.commonAncestorContainer);
});

test('range.toString', function() {
	var p = K.query('#test-data-01 p');
	var strong = K.query('#test-data-01 strong');
	var range;
	//1
	range = K.range(document);
	range.selectNode(strong);
	same(range.toString(), 'efg');
	//2
	range = K.range(document);
	range.selectNode(strong);
	range.setStart(strong.firstChild, 1);
	same(range.toString(), 'fg');
	//3
	range = K.range(document);
	range.setStart(strong.firstChild, 1);
	range.setEnd(strong.firstChild, 2);
	same(range.toString(), 'f');
	//4
	range = K.range(document);
	range.setStart(p.childNodes[0], 0);
	range.setEnd(p.childNodes[4], 2);
	same(range.toString(), 'abcdefghijkxy');
	//5
	range = K.range(document);
	range.setStart(p.childNodes[4], 1);
	range.setEnd(p.childNodes[4], 2);
	same(range.toString(), 'y');
	//6
	range = K.range(document);
	range.selectNode(p);
	same(range.toString(), 'abcdefghijkxyz0123456789');
	//7
	range = K.range(document);
	range.selectNode(strong.firstChild);
	same(range.toString(), 'efg');
	//8
	range = K.range(document);
	range.selectNode(strong);
	same(range.toString(), 'efg');
	//9
	range = K.range(document);
	same(range.toString(), '');
	//10
	range = K.range(document);
	range.selectNode(document.body);
	ok(range.toString().length > 100);
});

