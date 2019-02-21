import React from 'react';
import { 
  TextField,
  AppBar,
  Typography,
  Button,
  FormHelperText,
} from '@material-ui/core';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ 'food':event.target.value });
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
          <h2>Great Food is Waiting</h2>
          <form
            className="formContainer"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-name"
              label="Feed me this..."
              className="textField"
              value={this.state.food}
              onChange={this.handleChange}
              margin="normal"
              variant="filled"
            />
            <br />
            <Button style={{ marginTop: '10px' }} variant="contained" color="primary">
              Submit
          </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormView;
