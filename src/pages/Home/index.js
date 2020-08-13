import React from 'react';
import api from '../../api';
import Title from '../../components/Title'
import Input from '../../components/Input';
import Search from '../../components/Search';
import './home.css';


class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            user: '',
            userName: {},
            error: '',
            repos: []

        }
    }

    cacthUser = e => {
        this.setState({ user: e.target.value })
    }

    searchUser = async () => {
        const { user, userName, error} = this.state;

        if (user) {

            await api.get(`/users/${user}`)
                .then(res => this.setState({ userName: res.data, error: '', user: '' }))
                .catch(e => this.setState({ error: "Usuário não encontrado" }))
            
        } else {
            this.setState({ error: 'Digite um usuário'})
        }
    }


    render() {
        const { user, userName, error } = this.state;


        return (
            <main>
                <Title
                    className=""
                    text="Github Search"
                />
                <Input
                    placeholder="Digite o nome do usuário que seja ser encontrado"
                    type="text"
                    className=""
                    onChange={this.cacthUser}
                    value={user}
                />
                <Search
                    className=""
                    onClick={this.searchUser}
                    src=""
                />

                {error && <h3>{error}</h3>}
                {userName.login}

            </main>
        )
    }
}

export default Home;