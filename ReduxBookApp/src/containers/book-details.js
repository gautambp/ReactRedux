import React from 'react';
import {connect} from 'react-redux';

class BookDetails extends React.Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book for details</div>
        }
        return (
            <div>
                { this.props.book.title }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetails);
