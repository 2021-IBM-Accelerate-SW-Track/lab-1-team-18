import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export class EnterListItem extends Component {
    render() {
        return (
            <center>
                <form noValidate autoComplete="off">
                    <TextField label="Add Task Here" width=""/>
                </form>
            </center>
        )
    }
}