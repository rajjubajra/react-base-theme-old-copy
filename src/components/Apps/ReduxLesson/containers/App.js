/** REDUX LESSON */
import React from 'react';
import { AppUser } from '../components/AppUser';
import { AppMain } from '../components/AppMain';
import { connect } from 'react-redux';
import { setName, setAge } from '../actions/userAction';
import CounterButton from '../components/CountetButton';
import CounterView from '../components/CounterView';
import { increaseCounter, decreaseCounter } from '../actions/counterAction';


class App extends React.Component {
  render() {

    return (
      <div className="apps">
        <ul>
          <li>
            <h2>Redux Lesson: State change on click</h2>
            <p><strong>Check action in console</strong></p>
            <AppMain
              changeUsername={this.props.setName}
              changeUserAge={this.props.setAge}
            />
            <AppUser username={this.props.user.name} age={this.props.user.age} />
          </li>
          <li>
            <h2>Counter up to 20</h2>
            <CounterView counter={this.props.counter.number} />
            <CounterButton
              counterIncrement={this.props.increaseCounter}
              counterDecrement={this.props.decreaseCounter}
            />
          </li>
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    age: state.userReducer,
    math: state.mathReducer,
    counter: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    },
    setAge: (age) => {
      dispatch(setAge(age))
    },
    increaseCounter: (value) => {
      dispatch(increaseCounter(value))
    },
    decreaseCounter: (value) => {
      dispatch(decreaseCounter(value))
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);