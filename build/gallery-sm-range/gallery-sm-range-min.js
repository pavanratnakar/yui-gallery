YUI.add("gallery-sm-range",function(e,t){var n=e.config.doc,r=e.config.win,i=!!(r&&r.Range&&n.createRange),s=i?function(e){this._range=e||n.createRange()}:function(e){this._range=e||n.body.createTextRange()};s.prototype={clone:i?function(){return new e.Range(this._range.cloneRange())}:function(){throw new Error("Not yet implemented.")},cloneContents:i?function(){return e.one(this._range.cloneContents())}:function(){throw new Error("Not yet implemented.")},collapse:function(e){return this._range.collapse(e&&e.toStart),this},compare:i?function(t,n){t._range&&(t=t._range),n=e.merge({myPoint:"start",otherPoint:"start"},n);var i=r.Range[n.myPoint.toUpperCase()+"_TO_"+n.otherPoint.toUpperCase()];return this._range.compareBoundaryPoints(i,t)}:function(){throw new Error("Not yet implemented.")},deleteContents:i?function(){return this._range.deleteContents(),this}:function(){throw new Error("Not yet implemented.")},endNode:i?function(t,n){if(t){var r=e.one(t)._node;n||(n=0),typeof n===Number?this._range.setEnd(r,n):n==="before"?this._range.setEndBefore(r):n==="after"&&this._range.setEndAfter(r)}return e.one(this._range.endContainer)}:function(e,t){throw new Error("Not yet implemented.")},endOffset:i?function(e){return(e||e===0)&&this.endNode(this._range.endContainer,e),this._range.endOffset}:function(e){throw new Error("Not yet implemented.")},extractContents:i?function(){return e.one(this._range.extractContents())}:function(){throw new Error("Not yet implemented.")},insertNode:i?function(t){return t=e.one(t),this._range.insertNode(t._node),t}:function(){throw new Error("Not yet implemented.")},isCollapsed:i?function(){return this._range.collapsed}:function(){throw new Error("Not yet implemented.")},isEquivalent:function(e){return e&&this.compare(e)===0&&this.compare(e,{myPoint:"end",otherPoint:"end"})===0},isInsideNode:function(t){var n=e.one(t)._node,r=this.parentNode()._node;if(n===r)return!0;while(r=r.parentNode)if(n===r)return!0;return!1},parentNode:i?function(){return e.one(this._range.commonAncestorContainer)}:function(){return e.one(this._range.parentElement())},startNode:i?function(t,n){if(t){var r=e.one(t)._node;n||(n=0),typeof n===Number?this._range.setStart(r,n):n==="before"?this._range.setStartBefore(r):n==="after"&&this._range.setStartAfter(r)}return e.one(this._range.startContainer)}:function(e,t){throw new Error("Not yet implemented.")},startOffset:i?function(e){return(e||e===0)&&this.startNode(this._range.startContainer,e),this._range.startOffset}:function(e){throw new Error("Not yet implemented.")},toHTML:i?function(){var e=n.createElement("div");return e.appendChild(this._range.cloneContents()),e.innerHTML}:function(){return this._range.htmlText},toString:i?function(){return this._range.toString()}:function(){return this._range.text},traverse:function(t,n){function o(s){t.call(n,e.one(s));if(s===i)return;if(s.firstChild)o(s.firstChild);else if(s.nextSibling)o(s.nextSibling);else{var u=s;while(u=u.parentNode)if(u!==r&&u.nextSibling){o(u.nextSibling);break}}}if(this.isCollapsed())return this;var r=this.parentNode()._node,i=this.endNode()._node,s=this.endOffset();return s&&i.childNodes.length&&(i=i.childNodes[s]),o(this.startNode()._node),this},wrap:i?function(t,n){var r=this._range.extractContents(),i=e.DOM.create(t);return i.appendChild(r),this._range.insertNode(i),n&&n.includeWrapper?this._range.selectNode(i):this._range.selectNodeContents(i),i}:function(e){throw new Error("Not yet implemented.")}},e.Range=s},"@VERSION@",{requires:["node-base"]});
