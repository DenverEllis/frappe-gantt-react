!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("frappe-gantt")):"function"==typeof define&&define.amd?define(["exports","react","frappe-gantt"],e):e((t=t||self).FrappeGanttReact={},t.React,t.Gantt)}(this,function(t,e,n){"use strict";var r="default"in e?e.default:e;n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var s,i=function(){function t(t){void 0===t&&(t={}),this._dependencies=[],this.id="",this.name="",this.start="",this.end="",this._progress=.52,Object.assign(this,t)}return Object.defineProperty(t.prototype,"progress",{get:function(){return this._progress||.52},set:function(t){this._progress=t||.52},enumerable:!0,configurable:!0}),t.prototype.setDependencies=function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()})},Object.defineProperty(t.prototype,"dependencies",{get:function(){return this._dependencies},set:function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()}).filter(Boolean)},enumerable:!0,configurable:!0}),t}();(s=t.ViewMode||(t.ViewMode={})).QuarterDay="Quarter Day",s.HalfDay="Half Day",s.Day="Day",s.Week="Week",s.Month="Month";var a={viewMode:t.ViewMode.Day,onTasksChange:function(t){},onClick:function(t){},onDateChange:function(t,e,n){},onProgressChange:function(t,e){},onViewChange:function(t){}},p=function(t){function s(){var n=null!==t&&t.apply(this,arguments)||this;return n._target=e.createRef(),n._svg=e.createRef(),n._gantt=null,n.state={viewMode:null,tasks:[]},n}return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(s,t),s.getDerivedStateFromProps=function(t,e){return{viewMode:t.viewMode,tasks:t.tasks.map(function(t){return new i(t)})}},s.prototype.componentDidUpdate=function(){this._gantt&&(this._gantt.refresh(this.state.tasks),this._gantt.change_view_mode(this.state.viewMode))},s.prototype.componentDidMount=function(){var t=this;this._gantt=new n(this._svg.current,this.state.tasks,{on_click:this.props.onClick,on_view_change:this.props.onViewChange,on_progress_change:function(e,n){t.props.onProgressChange(e,n),t.props.onTasksChange(t.props.tasks)},on_date_change:function(e,n,r){t.props.onDateChange(e,n,r),t.props.onTasksChange(t.props.tasks)}}),this._gantt&&this._gantt.change_view_mode(this.state.viewMode);var e=.5*this._svg.current.clientWidth;this._target.current.scrollLeft=e},s.prototype.render=function(){return r.createElement("div",{ref:this._target},r.createElement("svg",{ref:this._svg,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}))},s.defaultProps=a,s}(r.Component);t.FrappeGantt=p,t.Task=i,Object.defineProperty(t,"__esModule",{value:!0})});
