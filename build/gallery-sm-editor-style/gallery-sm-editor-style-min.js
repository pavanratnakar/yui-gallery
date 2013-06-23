YUI.add("gallery-sm-editor-style",function(e,t){(function(){var t=1,n=e.Base.create("editorStyle",e.Base,[],{styleCommands:{bold:{property:"fontWeight",valueOn:"bold",valueOff:"normal"},fontName:{property:"fontFamily"},fontSize:{property:"fontSize"},italic:{property:"fontStyle",valueOn:"italic",valueOff:"normal"},underline:{property:"textDecoration",valueOn:"underline",valueOff:"none"}},bold:function(){return this.command("bold","toggle"),this},italic:function(){return this.command("italic","toggle"),this},styles:function(e){var t={},n;if(e)for(n in e)e.hasOwnProperty(n)&&(t[n]=this.command(n,e[n]));else{var r=this.styleCommands;for(n in r)r.hasOwnProperty(n)&&(t[n]=this._queryCommandValue(n))}return t},underline:function(){return this.command("underline","toggle"),this},_cleanNode:function(n,r){function s(o){if(t!==o.get("nodeType"))return;o.get("children").each(s);if(""===o.get("text"))o.remove(!0);else{o!==n&&e.Array.each(r,function(e){o.setStyle(e,"")});var u=e.Object.some(i,function(e){return""!==o._node.style[e.property]});if(!u){var a=e.Node.create(o.getHTML());o.replace(a).remove(!0),o=a}}return o}var i=this.styleCommands;return r=e.Array(r),s(n)},_execCommand:function(n,r){var i=this.styleCommands[n],s=this.selection.range(),o,u;if(!i)return e.Editor.Base.prototype._execCommand.call(this,n,r);if(!s)return;o=s.parentNode(),t!==o.get("nodeType")&&(o=o.ancestor()),o!==this._inputNode&&o.get("text")===s.toString()?u=o:u=s.wrap("<span>"),this.boolCommands[n]&&(this._queryCommandValue(n)?r=this._getStyledAncestor(u,i.property)?i.valueOff:"":r=i.valueOn||r),u.setStyle(i.property,r),u=this._cleanNode(u,i.property),s.startNode(u),s.endNode(u),t===u.get("nodeType")?s.endOffset(u.get("childNodes").size()):s.endOffset(u.get("text").length),this.selection.select(s)},_getStyledAncestor:function(e,n,r){return e.ancestor(function(e){return t!==e._node.nodeType?!1:!!e._node.style[n]},r,this.selectors.input)},_queryCommandValue:function(t){var n=this.styleCommands[t],r=this.selection.range(),i,s;return n?(r&&(i=this._getStyledAncestor(r.shrink().parentNode(),n.property,!0),i&&(s=i.getStyle(n.property)),this.boolCommands[t]&&(s=s===n.valueOn)),s):e.Editor.Base.prototype._queryCommandValue.call(this,t)}});e.namespace("Editor").Style=n})()},"@VERSION@",{requires:["node-style","gallery-sm-editor-base"]});