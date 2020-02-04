/** REDUX LESSON */
import React from 'react';
import { AppUser } from '../components/AppUser';
import { AppMain } from '../components/AppMain';
import { connect } from 'react-redux';
import { setName, setAge } from '../actions/userAction';


class App extends React.Component {
  render() {

    return (
      <div className="apps">
        <ul>
          <li>
            <h2>Redux Lesson: State change on click</h2>
            <p><strong>Check action in console</strong></p>
            <AppMain changeUsername={this.props.setName} />
            <AppUser username={this.props.user.name} age={this.props.user.age} />
          </li>
          <li>
            <h2>Counter</h2>

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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);