import { connect, ConnectedProps } from 'react-redux';
import { actions } from './ActionsStopwatch';
import StopwatchComponent from './Stopwatch';
import { StateStopwatch } from './StateStopwatch';


const mapStateToProps = (state: StateStopwatch) => ({
    time: state.time,
    intervalId: 0,
    isRunning: state.isRunning,
   
});

const connector = connect(mapStateToProps, actions);

export type ReduxProps = ConnectedProps<typeof connector>;

const StopwatchContainer = connector(StopwatchComponent);

export default StopwatchContainer;
