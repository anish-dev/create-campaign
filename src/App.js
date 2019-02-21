import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CreateCampaign from './components/CreateCampaign';
import Campaign from './components/Campaign';

class App extends Component {
  state = {
    camapignList:[]
  }
  onSubmit = (name) => {
    let campaignObj = {
      name: name,
      key: this.state.camapignList.length
    }

    const tempCampaignList = Object.assign([], this.state.camapignList);

    tempCampaignList.push(campaignObj);

    this.setState({
      camapignList : tempCampaignList
    })
  }

  doDelete = (key) => {
    let tempCampaignList = Object.assign([], this.state.camapignList);
    tempCampaignList[key] = null;
    this.setState({
      camapignList : tempCampaignList
    });
  }

  onEdit = (id, inputName) => {
    console.log(inputName);
    let tempCampaignList = Object.assign([], this.state.camapignList);
    tempCampaignList[id].name = inputName;
    this.setState({
      camapignList : tempCampaignList
    });
  }

  render() {
    return (
      <div className="container-fluid">
          <Header/>
          <CreateCampaign onSubmit={this.onSubmit}/>
          <hr/>
          {
            this.state.camapignList.map((campaign, i) => {
                if( campaign !== null) {
                  return <Campaign  onEdit={this.onEdit} doDelete={this.doDelete} name={campaign.name} id={campaign.key} key={campaign.key}/>;
                } else {
                  return null;
                }
            })
          }
      </div>
    );
  }
}

export default App;
