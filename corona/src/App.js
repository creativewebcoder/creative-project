import React from 'react';

import { Cards, Chart, CountryPicker } from './components/'
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchDatas = await fetchData();
        this.setState({data:fetchDatas});
    }


    render(){
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <h1>Corona App</h1>
                <Cards data={data} />                
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;