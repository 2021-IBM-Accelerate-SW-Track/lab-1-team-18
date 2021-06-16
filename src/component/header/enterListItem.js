import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export class EnterListItem extends Component {
    render() {
        return (
            <center>
                <form noValidate autoComplete="off">
                    <TextField data-testid="new-item-input"
                        label="Add Task Here"
                        color="primary"
                        variant="outlined"
                        style={{ width: '35%' }}
                    />
                </form>
            </center>
        )
    }
}