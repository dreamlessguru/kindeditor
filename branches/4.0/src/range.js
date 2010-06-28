/**
 * KindEditor - WYSIWYG HTML Editor
 *
 * Copyright (c) 2010 kindsoft.net All rights reserved.
 * Released under LGPL License.
 */

/**
 * @name range.js
 * @fileOverview W3C Range、W3C Range和原生Range之间转换
 * @author Longhao Luo
 */

/**
#using "core.js"
#using "html.js"
#using "selector.js"
#using "node.js"
*/
(function (K, undefined) {

/**
	@name KindEditor.START_TO_START
	@type {Int}
	@description
	调用range.compareBoundaryPoints时使用。
	@see KindEditor.range#compareBoundaryPoints
*/
/**
	@name KindEditor.START_TO_END
	@type {Int}
	@description
	调用range.compareBoundaryPoints时使用。
	@see KindEditor.range#compareBoundaryPoints
*/
/**
	@name KindEditor.END_TO_END
	@type {Int}
	@description
	调用range.compareBoundaryPoints时使用。
	@see KindEditor.range#compareBoundaryPoints
*/
/**
	@name KindEditor.END_TO_START
	@type {Int}
	@description
	调用range.compareBoundaryPoints时使用。
	@see KindEditor.range#compareBoundaryPoints
*/
var _IE = K.IE,
	_node = K.node,
	_inArray = K.inArray,
	_START_TO_START = 0,
	_START_TO_END = 1,
	_END_TO_END = 2,
	_END_TO_START = 3;

/**
	@name KindEditor.range
	@class KRange类
	@param {document|Range} mixed document或原生Range
	@description
	KRange类，包含W3C Range所有接口，此外还有包含KRange和原生Range之间的转换功能。
	@example
	var krange = K.range(document); //新建KRange对象
	krange = K.range(originalRange); //将原生Range转换成KRange
	@see <a href="http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html" target="_blank">DOM Level 2 Range Reference</a>
*/

function _range(mixed) {
	if (!mixed.nodeName) {
		return mixed.get ? mixed : _toRange(mixed);
	}
	var doc = mixed;
	return {
		/**
			@name KindEditor.range#startContainer
			@property
			@public
			@type {Node}
			@description
			Range的开始节点。
		*/
		startContainer : doc,
		/**
			@name KindEditor.range#startOffset
			@property
			@public
			@type {Int}
			@description
			Range的开始节点的位置。
		*/
		startOffset : 0,
		/**
			@name KindEditor.range#endContainer
			@property
			@public
			@type {Node}
			@description
			Range的结束节点。
		*/
		endContainer : doc,
		/**
			@name KindEditor.range#endOffset
			@property
			@public
			@type {Int}
			@description
			Range的结束节点的位置。
		*/
		endOffset : 0,
		/**
			@name KindEditor.range#collapsed
			@property
			@public
			@type {Boolean}
			@description
			Range的折叠状态，当Range处于折叠状态时true，否则false。
		*/
		collapsed : true,
		/**
			@name KindEditor.range#commonAncestorContainer
			@property
			@public
			@type {Node}
			@description
			开始节点和结束节点的共同祖先Node。
		*/
		commonAncestorContainer : doc,
		/**
			@name KindEditor.range#setStart
			@function
			@public
			@param {Node} node
			@param {Int} offset
			@returns {KRange}
			@description
			设置Range的开始节点和位置。
		*/
		setStart : function(node, offset) {
			this.startContainer = node;
			this.startOffset = offset;
			if (this.endContainer === doc) {
				this.endContainer = node;
				this.endOffset = offset;
			}
			_compareAndUpdate.call(this, doc);
			_updateCollapsed.call(this);
			_updateCommonAncestor.call(this, doc);
			return this;
		},
		/**
			@name KindEditor.range#setEnd
			@function
			@public
			@param {Node} node
			@param {Int} offset
			@returns {KRange}
			@description
			设置Range的结束节点和位置。
		*/
		setEnd : function(node, offset) {
			this.endContainer = node;
			this.endOffset = offset;
			if (this.startContainer === doc) {
				this.startContainer = node;
				this.startOffset = offset;
			}
			_compareAndUpdate.call(this, doc);
			_updateCollapsed.call(this);
			_updateCommonAncestor.call(this, doc);
			return this;
		},
		/**
			@name KindEditor.range#setStartBefore
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			将Node的开始位置设为Range的开始位置。
		*/
		setStartBefore : function(node) {
			return this.setStart(node.parentNode || doc, _node(node).index);
		},
		/**
			@name KindEditor.range#setStartAfter
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			将Node的结束位置设为Range的开始位置。
		*/
		setStartAfter : function(node) {
			return this.setStart(node.parentNode || doc, _node(node).index + 1);
		},
		/**
			@name KindEditor.range#setEndBefore
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			将Node的开始位置设为Range的结束位置。
		*/
		setEndBefore : function(node) {
			return this.setEnd(node.parentNode || doc, _node(node).index);
		},
		/**
			@name KindEditor.range#setEndAfter
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			将Node的结束位置设为Range的结束位置。
		*/
		setEndAfter : function(node) {
			return this.setEnd(node.parentNode || doc, _node(node).index + 1);
		},
		/**
			@name KindEditor.range#selectNode
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			将Node的开始位置和结束位置分别设为Range的开始位置和结束位置。
		*/
		selectNode : function(node) {
			this.setStartBefore(node);
			this.setEndAfter(node);
			return this;
		},
		/**
			@name KindEditor.range#selectNodeContents
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			<p>将Node的子节点的开始位置和结束位置分别设为Range的开始位置和结束位置。</p>
			<p>对于文本节点和无结束符的元素，相当于使用selectNode。</p>
		*/
		selectNodeContents : function(node) {
			var knode = _node(node);
			if (knode.type == 3 || knode.isSingle()) {
				this.selectNode(node);
			} else {
				if (knode.children.length > 0) {
					this.setStartBefore(knode.first.get());
					this.setEndAfter(knode.last.get());
				} else {
					this.setStart(node, 0);
					this.setEnd(node, 0);
				}
			}
			return this;
		},
		/**
			@name KindEditor.range#collapse
			@function
			@public
			@param {Boolean} toStart 折叠方向，true或false
			@returns {KRange}
			@description
			折叠KRange，当toStart为true时向前折叠，false时向后折叠。
		*/
		collapse : function(toStart) {
			if (toStart) this.setEnd(this.startContainer, this.startOffset);
			else this.setStart(this.endContainer, this.endOffset);
			return this;
		},
		/**
			@name KindEditor.range#compareBoundaryPoints
			@function
			@public
			@param {Int} how 位置信息，可设置K.START_TO_START、K.START_TO_END、K.END_TO_END、K.END_TO_START。
			@param {KRange} range 目标range
			@returns {Int} 当this range在目标range的左侧时返回-1，在目标range的右侧时返回1，相同时返回0。
			@description
			<p>根据how参数比较2个range的边界。</p>
			<p>how参数的方向规则：</p>
			<p>K.START_TO_START：比较目标range的开始位置和this range的开始位置。</p>
			<p>K.START_TO_END：比较目标range的开始位置和this range的结束位置。</p>
			<p>K.END_TO_END：比较目标range的结束位置和this range的结束位置。</p>
			<p>K.END_TO_START：比较目标range的结束位置和this range的开始位置。</p>
		*/
		compareBoundaryPoints : function(how, range) {
			var rangeA = this.get(),
				rangeB = range.get();
			if (_IE) {
				var arr = {};
				arr[_START_TO_START] = 'StartToStart';
				arr[_START_TO_END] = 'EndToStart';
				arr[_END_TO_END] = 'EndToEnd';
				arr[_END_TO_START] = 'StartToEnd';
				var cmp = rangeA.compareEndPoints(arr[how], rangeB);
				if (cmp !== 0) return cmp;
				var nodeA, nodeB, posA, posB;
				if (how === _START_TO_START || how === _END_TO_START) {
					nodeA = this.startContainer;
					posA = this.startOffset;
				}
				if (how === _START_TO_END || how === _END_TO_END) {
					nodeA = this.endContainer;
					posA = nodeA.nodeType == 1 ? this.endOffset - 1 : this.endOffset;
				}
				if (how === _START_TO_START || how === _START_TO_END) {
					nodeB = range.startContainer;
					posB = range.startOffset;
				}
				if (how === _END_TO_END || how === _END_TO_START) {
					nodeB = range.endContainer;
					posB = nodeB.nodeType == 1 ? range.endOffset - 1 : range.endOffset;
				}
				if (nodeA === nodeB) return 0;
				var childA = nodeA,
					childB = nodeB;
				if (nodeA.nodeType === 1) {
					childA = nodeA.childNodes[posA];
					if (childA === nodeB) {
						if (how === _START_TO_START || how === _END_TO_START) return -1;
						if (how === _END_TO_END || how === _START_TO_END) return 1;
					}
				}
				if (nodeB.nodeType === 1) {
					childB = nodeB.childNodes[posB];
					if (childB === nodeA) {
						if (how === _START_TO_START || how === _END_TO_START) return 1;
						if (how === _END_TO_END || how === _START_TO_END) return -1;
					}
				}
				if (childA && childB === childA.nextSibling) return -1;
				if (childB && childA === childB.nextSibling) return 1;
				var bool = _node(childB).isAncestor(childA);
				if (how === _START_TO_START || how === _END_TO_START) return bool ? -1 : 1;
				if (how === _END_TO_END || how === _START_TO_END) return bool ? 1 : -1;
			} else {
				return rangeA.compareBoundaryPoints(how, rangeB);
			}
		},
		/**
			@name KindEditor.range#cloneRange
			@function
			@public
			@returns {KRange}
			@description
			复制KRange。
		*/
		cloneRange : function() {
			var range = _range(doc);
			range.setStart(this.startContainer, this.startOffset);
			range.setEnd(this.endContainer, this.endOffset);
			return range;
		},
		/**
			@name KindEditor.range#toString
			@function
			@public
			@returns {String}
			@description
			返回KRange的文本内容。
		*/
		toString : function() {
			//TODO
			var rng = this.get(),
				str = _IE ? rng.text : rng.toString();
			return str.replace(/\r\n|\n|\r/g, '');
		},
		/**
			@name KindEditor.range#cloneContents
			@function
			@public
			@returns {documentFragment}
			@description
			复制并返回KRange的内容。
		*/
		cloneContents : function() {
			return _copyAndDelete.call(this, doc, true, false);
		},
		/**
			@name KindEditor.range#deleteContents
			@function
			@public
			@returns {KRange}
			@description
			删除KRange的内容。
		*/
		deleteContents : function() {
			return _copyAndDelete.call(this, doc, false, true);
		},
		/**
			@name KindEditor.range#extractContents
			@function
			@public
			@returns {documentFragment}
			@description
			删除并返回KRange的内容。
		*/
		extractContents : function() {
			return _copyAndDelete.call(this, doc, true, true);
		},
		/**
			@name KindEditor.range#insertNode
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			将指定Node插入到KRange的开始位置。
		*/
		insertNode : function(node) {
			var startContainer = this.startContainer,
				startOffset = this.startOffset,
				endContainer = this.endContainer,
				endOffset = this.endOffset,
				afterNode,
				parentNode,
				endNode,
				endTextNode,
				endTextPos,
				eq = startContainer == endContainer,
				isFrag = node.nodeName.toLowerCase() === '#document-fragment';
			if (endContainer.nodeType == 1 && endOffset > 0) {
				endNode = endContainer.childNodes[endOffset - 1];
				if (endNode.nodeType == 3) {
					eq = startContainer == endNode;
					if (eq) endTextPos = endNode.nodeValue.length;
				}
			}
			if (startContainer.nodeType == 1) {
				if (startContainer.childNodes.length > 0) {
					afterNode = startContainer.childNodes[startOffset];
				} else {
					parentNode = startContainer;
				}
			} else {
				if (startOffset == 0) {
					afterNode = startContainer;
				} else if (startOffset < startContainer.length) {
					afterNode = startContainer.splitText(startOffset);
					if (eq) {
						endTextNode = afterNode;
						endTextPos = endTextPos ? endTextPos - startOffset : this.endOffset - startOffset;
						this.setEnd(endTextNode, endTextPos);
					}
				} else {
					if (startContainer.nextSibling) {
						afterNode = startContainer.nextSibling;
					} else {
						parentNode = startContainer.parentNode;
					}
				}
			}
			if (afterNode) afterNode.parentNode.insertBefore(node, afterNode);
			if (parentNode) parentNode.appendChild(node);
			if (isFrag) {
				if (node.firstChild) this.setStartBefore(node.firstChild);
				if (this.collapsed) {
					if (afterNode) endNode = afterNode.previousSibling;
					if (parentNode) endNode = parentNode.lastChild;
				}
			} else {
				this.setStartBefore(node);
				if (this.collapsed) endNode = node;
			}
			if (endNode) this.setEndAfter(endNode);
			return this;
		},
		/**
			@name KindEditor.range#surroundContents
			@function
			@public
			@param {Node} node
			@returns {KRange}
			@description
			用指定Node围住KRange的内容。
		*/
		surroundContents : function(node) {
			node.appendChild(this.extractContents());
			return this.insertNode(node);
		},
		/**
			@name KindEditor.range#get
			@function
			@public
			@returns {Range}
			@description
			将KRange转换成原生Range并返回。
		*/
		get : function() {
			var startContainer = this.startContainer,
				startOffset = this.startOffset,
				endContainer = this.endContainer,
				endOffset = this.endOffset,
				range;
			if (doc.createRange) {
				range = doc.createRange();
				range.selectNodeContents(doc.body);
			} else {
				range = doc.body.createTextRange();
			}
			if (_IE) {
				range.setEndPoint('StartToStart', _getEndRange(startContainer, startOffset));
				range.setEndPoint('EndToStart', _getEndRange(endContainer, endOffset));
			} else {
				range.setStart(startContainer, startOffset);
				range.setEnd(endContainer, endOffset);
			}
			return range;
		},
		/**
			@name KindEditor.range#html
			@function
			@public
			@returns {String}
			@description
			返回KRange内容的HTML。
		*/
		html : function() {
			return _node(this.cloneContents()).outer();
		}
	};
}
//更新collapsed
function _updateCollapsed() {
	this.collapsed = (this.startContainer === this.endContainer && this.startOffset === this.endOffset);
}
//更新commonAncestorContainer
function _updateCommonAncestor(doc) {
	function getParents(node) {
		var parents = [];
		while (node) {
			parents.push(node);
			node = node.parentNode;
		}
		return parents;
	}
	var parentsA = getParents(this.startContainer),
		parentsB = getParents(this.endContainer),
		i = 0, lenA = parentsA.length, lenB = parentsB.length, parentA, parentB;
	while (++i) {
		parentA = parentsA[lenA - i], parentB = parentsB[lenB - i];
		if (!parentA || !parentB || parentA !== parentB) break;
	}
	this.commonAncestorContainer = parentsA[lenA - i + 1];
}
//检查开始节点和结束节点的位置，校正错误设置
function _compareAndUpdate(doc) {
	var rangeA = _range(doc),
		rangeB = _range(doc);
	rangeA.startContainer = rangeA.endContainer = this.startContainer;
	rangeA.startOffset = rangeA.endOffset = this.startOffset;
	rangeB.startContainer = rangeB.endContainer = this.endContainer;
	rangeB.startOffset = rangeB.endOffset = this.endOffset;
	if (rangeA.compareBoundaryPoints(_START_TO_START, rangeB) == 1) {
		this.startContainer = this.endContainer;
		this.startOffset = this.endOffset;
	}
}

/*
	根据参数复制或删除KRange的内容。
	cloneContents: copyAndDelete(true, false)
	extractContents: copyAndDelete(true, true)
	deleteContents: copyAndDelete(false, true)
*/
function _copyAndDelete(doc, isCopy, isDelete) {
	var self = this,
		startContainer = self.startContainer,
		startOffset = self.startOffset,
		endContainer = self.endContainer,
		endOffset = self.endOffset,
		nodeList = [],
		selfRange = self;
	if (isDelete) {
		selfRange = self.cloneRange();
		self.collapse(true);
		if (startContainer.nodeType == 3 && startOffset == 0) {
			self.setStart(startContainer.parentNode, 0);
			self.setEnd(startContainer.parentNode, 0);
		}
	}
	function splitTextNode(node, startOffset, endOffset) {
		var length = node.nodeValue.length,
			centerNode;
		if (isCopy) {
			var cloneNode = node.cloneNode(true),
			centerNode = cloneNode.splitText(startOffset);
			centerNode.splitText(endOffset - startOffset);
		}
		if (isDelete) {
			var center = node;
			if (startOffset > 0) center = node.splitText(startOffset);
			if (endOffset < length) center.splitText(endOffset - startOffset);
			nodeList.push(center);
		}
		return centerNode;
	}
	function getTextNode(node) {
		if (node == startContainer && node == endContainer) {
			return splitTextNode(node, startOffset, endOffset);
		} else if (node == startContainer) {
			return splitTextNode(node, startOffset, node.nodeValue.length);
		} else if (node == endContainer) {
			return splitTextNode(node, 0, endOffset);
		} else {
			return splitTextNode(node, 0, node.nodeValue.length);
		}
	}
	function extractNodes(parent, frag) {
		var node = parent.firstChild;
		while (node) {
			var range = _range(doc);
			range.selectNode(node);
			if (range.compareBoundaryPoints(_END_TO_START, selfRange) >= 0) return false;
			var nextNode = node.nextSibling;
			if (range.compareBoundaryPoints(_START_TO_END, selfRange) > 0) {
				var type = node.nodeType;
				if (type == 1) {
					if (range.compareBoundaryPoints(_START_TO_START, selfRange) >= 0) {
						if (isCopy) {
							frag.appendChild(node.cloneNode(true));
						}
						if (isDelete) {
							nodeList.push(node);
						}
					} else {
						var childFlag;
						if (isCopy) {
							childFlag = node.cloneNode(false);
							frag.appendChild(childFlag);
						}
						if (!extractNodes(node, childFlag)) return false;
					}
				} else if (type == 3) {
					var textNode = getTextNode(node);
					if (textNode) frag.appendChild(textNode);
				}
			}
			node = nextNode;
		}
		return true;
	}
	var frag = doc.createDocumentFragment(),
		ancestor = selfRange.commonAncestorContainer;
	if (ancestor.nodeType == 3) {
		var textNode = getTextNode(ancestor);
		if (textNode) frag.appendChild(textNode);
	} else {
		extractNodes(ancestor, frag);
	}
	for (var i = 0, len = nodeList.length; i < len; i++) {
		var node = nodeList[i];
		node.parentNode.removeChild(node);
	}
	return isCopy ? frag : self;
}
//根据原生Range，取得开始节点和结束节点的位置。IE专用
function _getStartEnd(rng, isStart) {
	var doc = rng.parentElement().ownerDocument;
	var range = _range(doc);
	var pointRange = rng.duplicate();
	pointRange.collapse(isStart);
	var parent = pointRange.parentElement();
	var children = parent.childNodes;
	if (children.length == 0) {
		range.selectNode(parent);
		return {node: range.startContainer, offset: range.startOffset};
	}
	var startNode = doc, startPos = 0, isEnd = false;
	var testRange = rng.duplicate();
	testRange.moveToElementText(parent);
	for (var i = 0, len = children.length; i < len; i++) {
		var node = children[i];
		var cmp = testRange.compareEndPoints('StartToStart', pointRange);
		if (cmp > 0) isEnd = true;
		if (cmp == 0) {
			var range = _range(doc);
			if (node.nodeType == 1) range.selectNode(node);
			else range.setStartBefore(node);
			return {node: range.startContainer, offset: range.startOffset};
		}
		if (node.nodeType == 1) {
			var nodeRange = rng.duplicate();
			nodeRange.moveToElementText(node);
			testRange.setEndPoint('StartToEnd', nodeRange);
			if (isEnd) startPos += nodeRange.text.length;
			else startPos = 0;
		} else if (node.nodeType == 3) {
			testRange.moveStart('character', node.nodeValue.length);
			startPos += node.nodeValue.length;
		}
		if (!isEnd) startNode = node;
	}
	if (!isEnd && startNode.nodeType == 1) {
		range.setStartAfter(parent.lastChild);
		return {node: range.startContainer, offset: range.startOffset};
	}
	testRange = rng.duplicate();
	testRange.moveToElementText(parent);
	testRange.setEndPoint('StartToEnd', pointRange);
	startPos -= testRange.text.length;
	return {node: startNode, offset: startPos};
}
//将原生Range转换成KRange
function _toRange(rng) {
	if (_IE) {
		var doc = rng.parentElement().ownerDocument;
		if (rng.item) {
			var range = _range(doc);
			range.selectNode(rng.item(0));
			return range;
		}
		var start = _getStartEnd(rng, true),
			end = _getStartEnd(rng, false),
			range = _range(doc);
		range.setStart(start.node, start.offset);
		range.setEnd(end.node, end.offset);
		return range;
	} else {
		var startContainer = rng.startContainer,
			doc = startContainer.ownerDocument || startContainer,
			range = _range(doc);
		range.setStart(startContainer, rng.startOffset);
		range.setEnd(rng.endContainer, rng.endOffset);
		return range;
	}
}
//取得父节点里的该节点前的纯文本长度。IE专用
function _getBeforeLength(node) {
	var doc = node.ownerDocument,
		len = 0,
		sibling = node.previousSibling;
	while (sibling) {
		if (sibling.nodeType == 1) {
			if (!_node(sibling).isSingle()) {
				var range = doc.body.createTextRange();
				range.moveToElementText(sibling);
				len += range.text.length;
			} else {
				len += 1;
			}
		} else if (sibling.nodeType == 3) {
			len += sibling.nodeValue.length;
		}
		sibling = sibling.previousSibling;
	}
	return len;
}
//根据Node和offset，取得表示该位置的原生Range。IE专用
function _getEndRange(node, offset) {
	var doc = node.ownerDocument || node,
		range = doc.body.createTextRange();
	if (doc == node) {
		range.collapse(true);
		return range;
	}
	if (node.nodeType == 1) {
		var children = node.childNodes,
			isStart,
			child,
			isTemp = false;
		if (offset == 0) {
			child = children[0];
			isStart = true;
		} else {
			child = children[offset - 1];
			isStart = false;
		}
		if (!child) {
			var temp = doc.createTextNode(' ');
			node.appendChild(temp);
			child = temp;
			isTemp = true;
		}
		if (child.nodeName.toLowerCase() === 'head') {
			if (offset === 1) isStart = true;
			if (offset === 2) isStart = false;
			range.collapse(isStart);
			return range;
		}
		if (child.nodeType == 1) {
			range.moveToElementText(child);
			range.collapse(isStart);
		} else {
			range.moveToElementText(node);
			if (isTemp) node.removeChild(temp);
			var len = _getBeforeLength(child);
			len = isStart ? len : len + child.nodeValue.length;
			range.moveStart('character', len);
		}
	} else if (node.nodeType == 3) {
		range.moveToElementText(node.parentNode);
		range.moveStart('character', offset + _getBeforeLength(node));
	}
	return range;
}

K.range = _range;
K.START_TO_START = _START_TO_START;
K.START_TO_END = _START_TO_END;
K.END_TO_END = _END_TO_END;
K.END_TO_START = _END_TO_START;

})(KindEditor);
