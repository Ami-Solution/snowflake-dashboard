(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5],{352:function(t,e,n){t.exports=n.p+"static/media/logo.9c231d0f.png"},63:function(t,e,n){"use strict";n.r(e),n.d(e,"ABI",function(){return S}),n.d(e,"requiredAllowance",function(){return g});var a=n(42),o=n.n(a),s=n(59),u=n(21),r=n(22),i=n(23),p=n(24),l=n(25),c=n(0),d=n.n(c),y=n(3),m=n(30),f=n(31),b=n(352),w=n.n(b);n.d(e,"logo",function(){return w.a});var h=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(i.a)(this,Object(p.a)(e).call(this,t))).getCurrentStatus=function(){n.props.resolverContract.methods.getStatus(n.props.hydroId).call().then(function(t){n.setState({currentStatus:t})})},n.lookupStatus=Object(s.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.props.snowflakeContract.methods.getDetails(n.state.lookupHydroId).call().then(function(t){return 0!==t.ownedAddresses.length});case 2:t.sent?n.props.resolverContract.methods.getStatus(n.state.lookupHydroId).call().then(function(t){""===t?n.setState({lookupStatus:"Hydro ID has not added the Status Resolver"}):n.setState({lookupStatus:t})}):n.setState({lookupStatus:"Hydro ID does not exist"});case 4:case"end":return t.stop()}},t,this)})),n.state={currentStatus:"",newStatus:"",lookupStatus:"",lookupHydroId:""},n}return Object(l.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.getCurrentStatus()}},{key:"render",value:function(){var t=this;return d.a.createElement("div",null,d.a.createElement(y.z,{variant:"display1",gutterBottom:!0,align:"center",color:"textPrimary"},this.state.currentStatus),d.a.createElement("form",{noValidate:!0,autoComplete:"off"},d.a.createElement(y.x,{label:"New Status",helperText:"This will be public.",margin:"normal",value:this.state.newStatus,onChange:function(e){return t.setState({newStatus:e.target.value})},fullWidth:!0}),d.a.createElement(f.default,{buttonInitial:"Set New Status",method:function(){return t.props.resolverContract.methods.setStatus(t.state.newStatus)},onConfirmation:function(){t.getCurrentStatus()}})),d.a.createElement("hr",{style:{marginTop:30,marginBottom:30}}),d.a.createElement(y.z,{variant:"display1",gutterBottom:!0,align:"center",color:"textPrimary"},this.state.lookupStatus),d.a.createElement("form",{noValidate:!0,autoComplete:"off"},d.a.createElement(y.x,{label:"Hydro Id",helperText:"View a Hydro ID's status.",margin:"normal",value:this.state.lookupHydroId,onChange:function(e){return t.setState({lookupHydroId:e.target.value})},fullWidth:!0}),d.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.lookupStatus},"Lookup")))}}]),e}(c.Component);e.default=Object(m.withWeb3)(h);var S=[{constant:!0,inputs:[{name:"hydroId",type:"string"}],name:"getStatus",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"snowflakeDescription",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"status",type:"string"}],name:"setStatus",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"snowflakeName",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"callOnRemoval",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_address",type:"address"}],name:"setSnowflakeAddress",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"callOnSignUp",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"snowflakeAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"hydroId",type:"string"},{name:"allowance",type:"uint256"}],name:"onSignUp",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"snowflakeAddress",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"hydroId",type:"string"},{indexed:!1,name:"status",type:"string"}],name:"StatusUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],g="1"}}]);
//# sourceMappingURL=0.9d8b013b.chunk.js.map