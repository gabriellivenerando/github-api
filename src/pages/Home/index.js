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
        const { user, userName, error } = this.state;


        if (user) {

            await api.get(`/users/${user}`)
                .then(res => {
                    this.setState({
                        userName: res.data,
                        error: '',
                        user: ''
                    })

                    return this.props.history.push({
                        pathname: '/result',
                        state: { data: res.data }
                    })
                })
                .catch(e => this.setState({ error: "Usuário não encontrado" }))

        } else {
            this.setState({ error: 'Digite um usuário' })
        }
    }


    render() {
        const { user, userName, error } = this.state;


        return (
            <main>
                <section>
                    <Title
                        className=""
                        text="Github Search"
                    />

                    <div className="search__container">
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
                    </div>

                </section>

            </main>
        )
    }
}

export default Home;