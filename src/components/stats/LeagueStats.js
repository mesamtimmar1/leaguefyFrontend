import React from 'react';

export default class LeagueStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searched: false,
            summonerName: '',
            matches: []
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const fieldName = target.name;
        this.setState({
            [fieldName]: value
        });
    }

    handleSearch = () => {
        if (!this.state.summonerName)
            return;
        this.setState({searched: true});
    }

    render() {
        return(
            <div className="league-stats__wrapper">
                <div className="league-stats__header">
                    <div className="league-stats__header-title">
                        <h2>League Stats</h2>
                    </div>
                    
                    <div className="league-stats__header-controls">
                        <input 
                            type="text"
                            name="summonerName"
                            value={this.state.summonerName}
                            onChange={this.handleInputChange}
                            placeholder="Enter Summoner Name"
                        />
                        <button
                            className='btn'
                            onClick={this.handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
        
                <div className="league-stats__body">
                    BODY
                </div>
            </div>
        )
    }
}