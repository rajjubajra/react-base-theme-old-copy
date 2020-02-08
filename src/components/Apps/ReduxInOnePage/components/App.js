import React from 'react';
import { User } from './User';
import { Main } from './Main';
import { Math } from './Math';
import { connect } from 'react-redux';



class App extends React.Component {
  render() {
    console.log("MATH", this.props.math);
    return (
      <div className="apps">
        <h2>Redux Lesson:  Change state on click example</h2>
        <p><strong>Check console for action</strong></p>
        <Main changeUsername={() => this.props.setName("TannaA")} />
        <User username={this.props.user.name} />
        <Math
          mathvalue={this.props.math.result}
          lastvalue={this.props.math.lastValue}
          addNumber={this.props.addNumber}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    },
    addNumber: (number) => {
      dispatch({
        type: "ADD",
        payload: number
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);