import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class Notifier extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            message: '',
        };
        this.openSnackbar = this.openSnackbar.bind(this);
    }

    componentDidMount() {
        this.props.register(this.openSnackbar);
    }

    openSnackbar(message){
        this.setState({
            open: true,
            message,
        });
    };

    handleSnackbarClose () {
        this.setState({
            open: false,
            message: '',
        });
    };

    render() {
        const message = (
            <span
                id="snackbar-message-id"
                dangerouslySetInnerHTML={{ __html: this.state.message }}
            />
        );

        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                message={message}
                autoHideDuration={500}
                onClose={this.handleSnackbarClose}
                open={this.state.open}
                SnackbarContentProps={{
                    'aria-describedby': 'snackbar-message-id',
                }}
            />
        );
    }
}

export default Notifier;