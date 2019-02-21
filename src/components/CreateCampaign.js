import React, { Component } from 'react'

export default class CreateCampaign extends Component {
    state= {
        showInput: false
    }

    createNew = () => {
        this.setState({
            ...this.state,
            showInput: true
        })
    }
    render() {
        return (
            <div className="row create-campaign-component">
                <div style={{marginRight:'1em', fontSize:'18px'}}>Campaign list</div>
                <div className="create-campaign-button" onClick={this.createNew}>Create new</div>
               {this.state.showInput ? 
               ( <div style={{paddingTop:'9px', paddingLeft:'2px'}}>
               <input type='text' ref={(input) => {this.campaignName = input;}}/>
                <input  type='submit' value='submit' onClick={() => this.props.onSubmit(this.campaignName.value)}/></div>
                ) :  null}
            </div>
        )
    }
}
