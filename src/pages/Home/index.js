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
            userName: {},
            repos: []

        }
    }

    cacthUser = e =>{
        this.setState({user: e.target.value}) 
    }

    searchUser = async () =>{
        const {user, userName} = this.state;
        
        if(user){
            
            try{
                const response = await api.get(`/users/${user}`)
                this.setState({userName: response.data})

            }catch{
                console.log('usuário não encontrado')
            }
            // console.log(response.data)
        }else{
            console.log("erro")
        }
    }


    render(){
        const {user, userName} = this.state;
        

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