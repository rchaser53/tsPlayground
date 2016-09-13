import * as React from 'react';
import {
	outer,
	tomatoBody,
	calyxOuter,
	tomatoMsg
} from '../../css/App.css';

export class App extends React.Component<{}, {}>{
	render(){
		return (<div className={outer}>
					<div className={calyxOuter}></div>
					<div className={tomatoBody}>
						<p className={tomatoMsg}>pomodoro</p>
					</div>
				</div>);
	}
}
export default App;