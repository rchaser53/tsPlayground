import * as React from 'react';

const tempStyle = {
	width:150,
	height:150,
	display:"block",
	backgroundColor:"aqua"
}

export class App<S,T> extends React.Component<{}, {}>{
	render(){
		return (<div style={tempStyle} onClick={()=>{
			console.log(222)
		}} />);
	}
}
export default App;