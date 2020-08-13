import React from 'react';
import api from '../../api';
import Title from '../../components/Title'
import Input from '../../components/Input';
import Search from '../../components/Search';
import './home.css';


class Home extends React.Component{
    constructor(){
        super()

        this.state ={
            user: '',
            repos: []

        }
    }

    cacthUser = e =>{
        this.setState({user: e.target.value}) 
    }

    searchUser = async () =>{
        const {user} = this.state;
        
        if(user){
            const response = await api.get(`/users/${user}`)
            console.log(response)
        }else{
            console.log("erro")
        }
    }


    render(){
        const {user} = this.state;
        // console.log(user)

        return(
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
            </main>
        )
    }
}

export default Home;