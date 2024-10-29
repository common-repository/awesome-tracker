!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=wp.i18n},function(e,t){e.exports=wp.element},function(e,t){e.exports=wp.components},function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return s});var a="/"+atGlobal.nameSpace.replace(/^[\/]+|[\/]+$/g,""),o=atRoutesGlobal.apiRoutes,r=atRoutesGlobal.currentRoutes,s=(atRoutesGlobal.DELIMITER,atSettingsGlobal.fields)},function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return p});var a=n(11),o=n.n(a),r=n(3),s=function(e){return"undefined"!==typeof e.payload?e.payload:e},l=function(e){throw"undefined"!==e.message?new Error(e.message):new Error("Something went wrong")},i=function(e){return o()({path:r.d+"/route",method:"POST",data:{route:e}}).then(s).catch(l)},c=function(e){return o()({path:r.d+"/route",method:"PUT",data:{route:e}}).then(s).catch(l)},u=function(e){return o()({path:r.d+"/route",method:"DELETE",data:{route:e}}).then(s).catch(l)},d=function(e){return o()({path:r.d+"/options",method:"POST",data:{recordsDB:e}}).then(s).catch(l)},p=function(){return o()({path:r.d+"/options",method:"POST",data:{deleteAllRecords:!0}}).then(s).catch(l)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(6),n(12)},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(7),i=(n.n(l),n(8)),c=(n.n(i),n(1)),u=(n.n(c),n(2)),d=(n.n(u),n(0)),p=(n.n(d),n(3)),m=n(9),h=n(4),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={routes:{}},n.addNewRoute=n.addNewRoute.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n.saveRoute=n.saveRoute.bind(n),n.onDeleteRoute=n.onDeleteRoute.bind(n),n.getObjectWithoutPropertiesOnTheRight=n.getObjectWithoutPropertiesOnTheRight.bind(n),n}return s(t,e),f(t,[{key:"componentDidMount",value:function(){this.setState({routes:p.b})}},{key:"addNewRoute",value:function(e){e.preventDefault(),this.setState(function(e){var t="newRoute-"+(Object.keys(e.routes).length+1);return{routes:Object.assign(a({},t,{ID:t}),e.routes)}})}},{key:"isNewRoute",value:function(e){return 0===e.indexOf("newRoute-")}},{key:"getObjectWithoutPropertiesOnTheRight",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object.keys(e),a={},o=n.indexOf(t);return o>=0?(n=n.slice(0,o),n.forEach(function(t){a[t]=e[t]})):a=Object.assign({},e),a}},{key:"handleInputChange",value:function(e){var t=this,n=e.currentTarget,o=n.value,r=n.name,s=n.dataset.routekey;this.setState(function(e){return{routes:Object.assign({},e.routes,a({},s,Object.assign({},t.getObjectWithoutPropertiesOnTheRight(e.routes[s],r),a({},r,o))))}})}},{key:"canSaveRoute",value:function(e){return!("at_other"===e.apiArg&&!e.at_other)&&!!(e.apiRoute&&e.method&&e.apiArg)}},{key:"updateRouteID",value:function(e,t){this.setState(function(n){var a={routes:Object.assign({},n.routes)};return delete a.routes[e.ID],a.routes[t]=Object.assign({},e,{ID:t}),e.at_other&&(a.routes[t].apiArg=e.at_other,a.routes[t].at_other=null),a})}},{key:"deleteRouteID",value:function(e){this.setState(function(t){var n={routes:Object.assign({},t.routes)};return delete n.routes[e.ID],n})}},{key:"saveRoute",value:function(e,t){var n=this;return t.preventDefault(),this.isNewRoute(e.ID)?Object(h.e)(e).then(function(t){n.updateRouteID(e,t.ID)}):Object(h.c)(e).then(function(t){n.updateRouteID(e,t.ID)})}},{key:"onDeleteRoute",value:function(e,t){var n=this;return t.preventDefault(),this.isNewRoute(e.ID)?(this.deleteRouteID(e),!0):Object(h.b)(e).then(function(){n.deleteRouteID(e)})}},{key:"render",value:function(){var e=this;return wp.element.createElement("div",{className:"no-more-tables wrap"},wp.element.createElement("div",{className:"new"},wp.element.createElement("h2",null,Object(d.__)("Awesome Tracker API Route Rules","awesome-tracker-td")),wp.element.createElement("p",{className:"description"},Object(d.__)("Here you can set the API calls you want to track","awesome-tracker-td")),wp.element.createElement(u.Button,{className:"new-route",isDefault:!0,isLarge:!0,onClick:this.addNewRoute},Object(d.__)("New Route Rule","awesome-tracker-td"))),wp.element.createElement("table",{className:"at-table"},wp.element.createElement("thead",null,wp.element.createElement("tr",null,wp.element.createElement("th",{className:"icon-action"}," "),wp.element.createElement("th",{className:"api-route"},Object(d.__)("API Route","awesome-tracker-td")),wp.element.createElement("th",{className:"api-method"},Object(d.__)("Api Method","awesome-tracker-td")),wp.element.createElement("th",{className:"api-argument"},Object(d.__)("Api Argument","awesome-tracker-td")),wp.element.createElement("th",{className:"button-action"}," "))),wp.element.createElement("tbody",null,Object.keys(this.state.routes).map(function(t){return wp.element.createElement(m.a,{id:t,key:t,route:e.state.routes[t],onChange:e.handleInputChange,canSave:e.canSaveRoute(e.state.routes[t]),onSubmit:e.saveRoute,onDelete:e.onDeleteRoute})}),0===Object.keys(this.state.routes).length?wp.element.createElement("tr",null,wp.element.createElement("td",null),wp.element.createElement("td",{"data-title":Object(d.__)("API Route","awesome-tracker-td"),colSpan:3},Object(d.__)("No Rules Yet","awesome-tracker-td")),wp.element.createElement("td",null)):null)))}}]),t}(c.Component);b.defaultProps={};var w=document.getElementById("at-routes");w&&Object(c.render)(wp.element.createElement(b,null),w)},function(e,t){},function(e,t){},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(1),l=(n.n(s),n(2)),i=(n.n(l),n(0)),c=(n.n(i),n(3)),u=n(10),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={confirmDelete:!1,editable:!1,deprecated:!1,apiCalling:!1,error:null},n._isMounted=!0,n.isNewRoute()?n.state.editable=!0:n.isDeprecatedRoute()&&(n.state.deprecated=!0,n.state.editable=!1),n.onSubmit=n.onSubmit.bind(n),n.onEdit=n.onEdit.bind(n),n.onDelete=n.onDelete.bind(n),n.closeModal=n.closeModal.bind(n),n.closeErrorModal=n.closeErrorModal.bind(n),n}return r(t,e),p(t,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"isNewRoute",value:function(){return 0===this.props.id.indexOf("newRoute-")}},{key:"isDeprecatedRoute",value:function(){return"undefined"===typeof c.a[this.props.route.apiRoute]||"undefined"===typeof c.a[this.props.route.apiRoute][this.props.route.method]}},{key:"closeModal",value:function(){this.setState({confirmDelete:!1})}},{key:"closeErrorModal",value:function(){this.setState({error:null})}},{key:"onSubmit",value:function(e){var t=this;this.setState({apiCalling:!0});var n=this.props.onSubmit(this.props.route,e),a={editable:!1,apiCalling:!1};"function"===typeof n.then?n.then(function(){t._isMounted&&t.setState(a)}).catch(function(e){t._isMounted&&t.setState({apiCalling:!1,error:e})}):this._isMounted&&this.setState(a)}},{key:"onEdit",value:function(e){e.preventDefault(),this.setState({editable:!0});var t=document.querySelector(":focus");t&&t.blur()}},{key:"onDelete",value:function(e){var t=this;if(e.preventDefault(),!this.state.confirmDelete&&!this.isNewRoute())return this.setState({confirmDelete:!0}),!1;var n={apiCalling:!0};this.state.confirmDelete&&(n.confirmDelete=!1),this.setState(n);var a=this.props.onDelete(this.props.route,e);"function"===typeof a.then?a.then(function(){t._isMounted&&t.setState({apiCalling:!1})}).catch(function(e){t._isMounted&&t.setState({apiCalling:!1,error:e})}):this._isMounted&&this.setState({apiCalling:!1})}},{key:"addArgumentExtraOptions",value:function(e){return Object.assign({0:Object(i.__)("NO ID","awesome-tracker-td")},e,{at_other:Object(i.__)("Other Argument","awesome-tracker-td")})}},{key:"render",value:function(){var e=[];return this.state.deprecated&&e.push("deprecated"),this.state.apiCalling&&e.push("apiCalling"),wp.element.createElement("tr",{className:e.join(" ")},wp.element.createElement("td",{className:"icon-action"},this.state.editable||this.state.deprecated?wp.element.createElement(l.IconButton,{icon:"trash",className:"delete-button",label:Object(i.__)("Delete","awesome-tracker-td"),onClick:this.onDelete}):wp.element.createElement(l.IconButton,{icon:"edit",className:"edit-button",label:Object(i.__)("Edit","awesome-tracker-td"),onClick:this.onEdit})),wp.element.createElement("td",{"data-title":Object(i.__)("API Route","awesome-tracker-td"),className:"api-route"},this.state.deprecated?wp.element.createElement("span",{className:"deprecated-alert"},Object(i.__)("This Route or method does not exist anymore","awesome-tracker-td")):null,this.state.apiCalling?wp.element.createElement(l.Spinner,null):null,this.state.error?wp.element.createElement(l.Modal,{title:Object(i.__)("Something went wrong","awesome-tracker-td"),isDismissable:!0,isDismissible:!0,className:"at-modal modal-error",onRequestClose:this.closeErrorModal},wp.element.createElement("p",{className:"errortext"},this.state.error.message),wp.element.createElement("p",null,"Route: ",this.props.route.apiRoute," ",wp.element.createElement("br",null),"API Method: ",this.props.route.method),wp.element.createElement(l.Button,{isDefault:!0,onClick:this.closeErrorModal},Object(i.__)("Dammit!","awesome-tracker-td"))):null,this.state.confirmDelete?wp.element.createElement(l.Modal,{title:Object(i.__)("Remove line?","awesome-tracker-td"),isDismissable:!1,isDismissible:!1,className:"at-modal",onRequestClose:this.closeModal},wp.element.createElement(l.Button,{isDefault:!0,onClick:this.closeModal},Object(i.__)("Cancel","awesome-tracker-td")),wp.element.createElement(l.Button,{isPrimary:!0,onClick:this.onDelete},Object(i.__)("Remove","awesome-tracker-td"))):null,wp.element.createElement(u.a,{id:this.props.id,title:Object(i.__)("Choose a REST API Route","awesome-tracker-td"),onChange:this.props.onChange,name:"apiRoute",options:c.a,indexAsText:!0,editable:this.state.editable,value:this.props.route.apiRoute})),wp.element.createElement("td",{"data-title":Object(i.__)("API Method","awesome-tracker-td"),className:"api-method"},this.props.route.apiRoute?wp.element.createElement(u.a,{id:this.props.id,title:Object(i.__)("Choose a REST API Method","awesome-tracker-td"),onChange:this.props.onChange,name:"method",options:this.state.deprecated?[]:c.a[this.props.route.apiRoute],useProperty:"methods",editable:this.state.editable,value:this.props.route.method}):null),wp.element.createElement("td",{"data-title":Object(i.__)("API Argument","awesome-tracker-td"),className:"api-argument"},this.props.route.method?wp.element.createElement(u.a,{id:this.props.id,title:Object(i.__)("Choose argument to read as Post ID","awesome-tracker-td"),onChange:this.props.onChange,name:"apiArg",editable:this.state.editable,options:this.addArgumentExtraOptions(this.state.deprecated?[]:c.a[this.props.route.apiRoute][this.props.route.method].args),value:this.props.route.apiArg}):null,this.props.route.apiArg&&"at_other"===this.props.route.apiArg?wp.element.createElement("input",{"data-routekey":this.props.id,type:"text",name:"at_other",className:"at_input",placeholder:Object(i.__)("What other argument to read?","awesome-tracker-td"),onChange:this.props.onChange,value:this.props.route.at_other||""}):null),wp.element.createElement("td",{className:"button-action"},this.state.editable?wp.element.createElement(l.Button,d({isLarge:!0,onClick:this.onSubmit},this.props.canSave?{isPrimary:!0}:{disabled:!0,isDefault:!0}),Object(i.__)("Save Route","awesome-tracker-td")):null))}}]),t}(s.Component);m.defaultProps={route:{ID:null,apiRoute:null,method:null,apiArg:null,at_other:null},onChange:null,onSubmit:null,canSave:!1},t.a=m},function(e,t,n){"use strict";var a=n(0),o=(n.n(a),function(e){var t=e.value,n=Object.keys(e.options).map(function(n){var a=e.indexAsText?n:e.options[n];return e.useProperty&&(a=e.options[n][e.useProperty]),e.value===n&&(t=a),wp.element.createElement("option",{key:n,value:n},a)});return e.editable?wp.element.createElement("select",{className:e.className,name:e.name,onChange:e.onChange,value:e.value,"data-routekey":e.id},wp.element.createElement("option",{value:""},e.title),n):wp.element.createElement("span",{className:"select-api"},t)});o.defaultProps={className:"at_select",name:"",onChange:null,title:Object(a.__)("Select an option","awesome-tracker-td"),indexAsText:!1,useProperty:!1,value:"",options:{}},t.a=o},function(e,t){e.exports=wp.apiFetch},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(13),l=(n.n(s),n(1)),i=(n.n(l),n(0)),c=(n.n(i),n(14)),u=n(2),d=(n.n(u),n(4)),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={modal:!1},n._isMounted=!0,n.handleDeleteRecords=n.handleDeleteRecords.bind(n),n.closeModal=n.closeModal.bind(n),n.deleteAllRecords=n.deleteAllRecords.bind(n),n}return r(t,e),m(t,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"handleDeleteRecords",value:function(e){e.preventDefault(),this.setState({apiCall:!1,modal:{title:Object(i.__)("Delete all tracked records","awesome-tracker-td"),className:"modal-error",text:Object(i.__)("WARNING! This will permanently delete all the tracked records thus far from your database.","awesome-tracker-td"),onCancel:this.closeModal,onSuccess:this.deleteAllRecords,buttonSuccess:Object(i.__)("Delete all!","awesome-tracker-td")}})}},{key:"deleteAllRecords",value:function(){var e=this;this.setState({apiCall:!0}),Object(d.a)().then(function(){e._isMounted&&(e.closeModal(),e.setState({apiCall:!1}))}).catch(function(){e._isMounted&&(e.closeModal(),e.setState({apiCall:!1}))})}},{key:"render",value:function(){var e={isBusy:!1};return this.state.apiCall&&(e.isBusy=!0),wp.element.createElement("div",{className:"wrap"},wp.element.createElement("h2",null,Object(i.__)("Awesome Tracker Settings","awesome-tracker-td")),wp.element.createElement("p",{className:"description"},Object(i.__)("Hey what happen if I change this option? ... ... *distant screaming* Bob! Why is the homepage showing a white screen?!","awesome-tracker-td")),wp.element.createElement("div",{className:"at-section"},wp.element.createElement(c.a,null)),wp.element.createElement("div",{className:"at-section"},wp.element.createElement("div",{className:"at-danger-zone"},wp.element.createElement("h3",null,Object(i.__)("Danger Zone!","awesome-tracker-td")),wp.element.createElement(u.Button,p({isDefault:!0,isDestructive:!0},e,{onClick:this.handleDeleteRecords}),Object(i.__)("Delete all tracked records","awesome-tracker-td")))),this.state.modal?wp.element.createElement(u.Modal,{title:this.state.modal.title,isDismissable:!0,isDismissible:!0,className:"at-modal "+this.state.modal.className,onRequestClose:this.state.modal.onCancel},wp.element.createElement("p",null,this.state.modal.text),wp.element.createElement(u.Button,p({isDefault:!0},e,{onClick:this.state.modal.onCancel}),Object(i.__)("Cancel","awesome-tracker-td")),wp.element.createElement(u.Button,p({isPrimary:!0},e,{onClick:this.state.modal.onSuccess}),this.state.modal.buttonSuccess)):null)}}]),t}(l.Component),f=document.getElementById("at-settings");f&&Object(l.render)(wp.element.createElement(h,null),f)},function(e,t){},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(1),l=(n.n(s),n(2)),i=(n.n(l),n(0)),c=(n.n(i),n(3)),u=n(4),d=n(15),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={fields:{selectDaysRecordsDB:c.c.recordsDB},daysRecordsDB:parseInt(c.c.recordsDB),modal:!1,savedSuccess:null},n.prevDaysRecordsDB=parseInt(c.c.recordsDB),n._isMounted=!0,n.handleChangeRecordsDB=n.handleChangeRecordsDB.bind(n),n.handleChangeSelectRecordsDB=n.handleChangeSelectRecordsDB.bind(n),n.handleSaveRecordsDB=n.handleSaveRecordsDB.bind(n),n.saveFieldAPI=n.saveFieldAPI.bind(n),n.closeModal=n.closeModal.bind(n),n}return r(t,e),p(t,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"focusInCurrentTarget",value:function(e){var t=e.relatedTarget,n=e.currentTarget;if(null===t)return!1;for(var a=t.parentNode;null!==a;){if(a===n)return!0;a=a.parentNode}return!1}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"saveFieldAPI",value:function(){var e=this,t=this.state.daysRecordsDB;Object(u.d)(t).then(function(){e._isMounted&&(e.closeModal(),e.setState({savedSuccess:!0}),e.prevDaysRecordsDB=t)}).catch(function(){e._isMounted&&(e.closeModal(),e.setState({savedSuccess:!1}))})}},{key:"handleChangeSelectRecordsDB",value:function(e){this.setState(function(t){return{savedSuccess:null,fields:Object.assign({},t.fields,{selectDaysRecordsDB:e}),daysRecordsDB:isNaN(e)?t.daysRecordsDB:parseInt(e)}})}},{key:"handleChangeRecordsDB",value:function(e){this.setState({savedSuccess:null,daysRecordsDB:parseInt(e)})}},{key:"handleSaveRecordsDB",value:function(e){if(!this.focusInCurrentTarget(e)){if(this.prevDaysRecordsDB===this.state.daysRecordsDB)return!0;0===this.state.daysRecordsDB?this.saveFieldAPI():isNaN(this.state.daysRecordsDB)||this.setState({modal:!0})}}},{key:"renderModalMaybe",value:function(){return this.state.modal?wp.element.createElement(l.Modal,{title:Object(i.__)("Update Database?","awesome-tracker-td"),isDismissable:!1,isDismissible:!1,className:"at-modal",onRequestClose:this.closeModal},wp.element.createElement("p",null,Object(i.__)("WARNING! this change will remove records older than %d days from the database","awesome-tracker-td").replace("%d",this.state.daysRecordsDB)),wp.element.createElement(l.Button,{isDefault:!0,onClick:this.closeModal},Object(i.__)("Cancel","awesome-tracker-td")),wp.element.createElement(l.Button,{isPrimary:!0,onClick:this.saveFieldAPI},Object(i.__)("Remove","awesome-tracker-td"))):null}},{key:"renderApiTickMaybe",value:function(){return null===this.state.savedSuccess?null:wp.element.createElement(d.a,{success:this.state.savedSuccess})}},{key:"render",value:function(){var e=this,t=[{label:Object(i.__)("...EVER","awesome-tracker-td"),value:"0"},{label:Object(i.__)("1 Week","awesome-tracker-td"),value:"7"},{label:Object(i.__)("1 Month","awesome-tracker-td"),value:"30"},{label:Object(i.__)("1 Year","awesome-tracker-td"),value:"365"}];if(!isNaN(this.state.fields.selectDaysRecordsDB)){var n=function(t){return parseInt(t.value)===parseInt(e.state.fields.selectDaysRecordsDB)};t.some(n)||t.push({label:Object(i.__)("%d Days","awesome-tracker-td").replace("%d",this.state.fields.selectDaysRecordsDB),value:this.state.fields.selectDaysRecordsDB})}return t.push({label:Object(i.__)("Set a custom value","awesome-tracker-td"),value:"custom"}),wp.element.createElement("div",{className:"at-field-container",onBlur:this.handleSaveRecordsDB},wp.element.createElement(l.SelectControl,{label:Object(i.__)("Keep records in database for...","awesome-tracker-td"),value:this.state.fields.selectDaysRecordsDB,className:"at-field",options:t,onChange:this.handleChangeSelectRecordsDB}),"custom"===this.state.fields.selectDaysRecordsDB?wp.element.createElement(l.TextControl,{type:"number",className:"at-field",label:Object(i.__)("Set number of days to keep records for","awesome-tracker-td"),value:this.state.daysRecordsDB,onChange:this.handleChangeRecordsDB}):null,this.renderApiTickMaybe(),this.renderModalMaybe())}}]),t}(s.Component);m.defaultProps={},t.a=m},function(e,t,n){"use strict";var a=function(e){var t=e.success?"at-api-success":"at-api-fail";return wp.element.createElement("span",{className:"at-api-tick "+t},e.success?wp.element.createElement("span",{className:"dashicons dashicons-yes"}," "):wp.element.createElement("span",{className:"dashicons dashicons-no-alt"}," "))};t.a=a}]);