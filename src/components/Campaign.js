import React, { Component } from 'react'

export default class Campaign extends Component {
    state = {
        showEditInput: false
    }

    showEditInput = () => {
        this.setState({
            showEditInput:true
        })
    }

    hideInput = () => {
        this.setState({
            showEditInput:false
        })
    }

    render() {
        return (
            <div className="row campaign-container" style={{minHeight:'39px', borderBottom:'1px solid grey'}}>
                <div className="campaign-heading col-md-4">{this.props.name}</div>
                <div>
                    <div className="edit" onClick={this.showEditInput}>Edit</div>
                    <div className="delete" onClick={() => this.props.doDelete(this.props.id)}>Delete</div>
                </div>
                <div>
                {this.state.showEditInput ? 
                ( <div style={{paddingLeft:'40px'}}>
                    <input type='text' ref={(input) => {this.inputCampaignName = input;}}/>
                    <input  type='submit' value='submit' onClick={() => this.props.onEdit(this.props.id, this.inputCampaignName.value)}/>
                    <div className="delete" onClick={this.hideInput}>Remove input</div>
                  </div>
                ) :  null}
                </div>
            </div>
        )
    }
}
