import React from 'react';
import api from '../../api'
import './result.css';


class Result extends React.Component {
    constructor() {
        super()

        this.state = {
            repos: [],
            infos: {}
        }

    }

    componentDidMount = async () => {
        const { login } = this.props.history.location.state.data;
        const response = await api.get(`/users/${login}/repos`);


        this.setState({ repos: response.data, infos: this.props.history.location.state.data })

    }

    render() {
        const { repos, infos } = this.state;

        console.log(this.props.history.location.state.data)
        return (
            <main>

                <div>
                    <img src={infos.avatar_url}></img>
                    <h2>{infos.name}</h2>
                    <p>{infos.bio}</p>
                    <div>
                        <p>{infos.location}</p>
                        <p>{infos.public_repos}</p>
                        <p>{infos.followers}</p>
                        <p>{infos.following}</p>
                    </div>
                </div>
                <div>
                    {repos.map((repo, index) =>{
                   return <div key={`repo_${index + 1}`}>{repo}</div>
                })}
                </div>

            </main>
        )
    }
}


export default Result