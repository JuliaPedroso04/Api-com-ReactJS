import React, { Component } from 'react';
import api from './api';

class App extends Component{

    state = {
        informacoes: [],
    }

    async componentDidMount(){
        const response = await api.get('');
        

        this.setState({informacoes: response.data});
    }

    


    render(){

        const {informacoes} = this.state;

        return (
            <div>
                <h1>Infomações do usuário</h1>
                {console.log(informacoes)}
                {informacoes.map(info =>(
                    <li key={info.id}>
                        <table>
                            <th>
                                <img src={info.avatar_url}/>
                            </th>
                            <th>
                                <h2>
                                    {info.login}
                                </h2>
                            </th>
                            <th>
                                {console.log(info.url)}
                            </th>
                        </table>
                    </li>

                ))}
            </div>
        )
    }
}
export default App;