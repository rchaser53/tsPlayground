import * as React from 'react';
import { render } from 'react-dom';
import { Dispatcher } from 'flux';
import { ReduceStore, Container } from 'flux/utils';


// Dispatcher
const dispatcher = new Dispatcher();

// Action
const act = {
  SEND: 'send'
};

const FormAction = {
  send(val) {
    dispatcher.dispatch({
      type: act.SEND,
      value: val
    });
  }
};

// Store
class FormStore extends ReduceStore<any,any> {
	getInitialState() {
		return {
			'value': null
		};
	}

	reduce(state, action) {
		switch (action.type) {
		case act.SEND:
			return {
				'value': action.value
				};
    	}
	}
};

// Storeのインスタンス生成
const formStore = new FormStore(dispatcher);

// View (React Component)
class FormApp extends React.Component<any,any> {
  static getStores() {
    return [formStore];
  }
  static calculateState(prevState) {
    console.log('prevstate: ' + prevState);
    return formStore.getState();
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <FormInput />
        <FormDisplay data={this.state.value} />
      </form>
    );
  }

};

class FormInput extends React.Component<any,any> {
  _send(e) {
    e.preventDefault();
    FormAction.send(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  myInput:HTMLInputElement;

  render() {
    return (
      <div>
        <input type="text" ref={(elem)=>{this.myInput = elem;}} defaultValue="" />
        <button onClick={this._send.bind(this)}>Send</button>
      </div>
    );
  }
};

class FormDisplay extends React.Component<any,any> {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
};

// Container
const FormAppContainer = Container.create(FormApp);

// ReactDom
render(
  <FormAppContainer />,
  document.getElementById('redux-app')
);