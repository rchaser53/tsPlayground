import * as React from 'react';
import {
	outer,
	tomatoBody,
	calyxOuter,
	tomatoMsg
} from '../../css/App.css';

import {whyDidYouUpdate} from 'why-did-you-update'
whyDidYouUpdate(React)

const ShouldUpdataWrapper = <S,T>(Component:React.ComponentClass<S>, hundleFunc:(...abc) => boolean):React.ComponentClass<S> => {
	return class extends React.Component<S,T> {
		shouldComponentUpdate(prop,state):boolean {
			return hundleFunc(prop,state,this);
		}

		render(){
			return <Component {...this.props} />
		}
	}
}

export class App extends React.Component<{}, any>{

	constructor(){
		super();

		this.state = {
			abc:{a:1,b:2}
		}
	}

	nyan = {a:1,b:2};

	render(){
		return (<div className={outer} onClick={()=>{
					// this.setState({abc:{a:1,b:2}});
					this.setState(this.state.abc);
				}}>
					<div  className={calyxOuter}></div>
					<div className={tomatoBody}>
						<p className={tomatoMsg}>pomodoro</p>
						<Bonanza abc={23} def={Math.random() * 20} />
					</div>
					<button style={{width:250,height:30}} onClick={()=>{
						this.setState(this.state.abc);
					}} />
				</div>);
	}
}
export default App;

class Poe extends React.Component<any, any>{
	poyo:HTMLDivElement;
	render(){
		this.poyo && console.log(this.poyo.attributes)
		return (<div id={Date.now().toString()}>
					{this.props.abc}
				</div>);
	}
}
const Bonanza = ShouldUpdataWrapper(Poe,(a,b,c) =>{
	console.log(a,b,c)
	return true;
});