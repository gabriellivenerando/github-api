import React from 'react';
import api from '../../api'
import LocationIcon from '../../assets/icons/location-icon.svg';
import FollowersIcon from '../../assets/icons/followers-icon.svg';
import OrganizationIcon from '../../assets/icons/organization-icon.svg';
import RepositorieIcon from '../../assets/icons/repositorie-icon.svg';
import StarIcon from '../../assets/icons/star-icon.svg';
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
        console.log(repos.owner)


        return (
            <main>
                <section className="container">
                    <div className="user__container">
                        <div className="biography__container">

                            <div className="biography__avatar">
                                <img className="avatar__img" src={infos.avatar_url}></img>
                            </div>

                            <div className="biograpphy__infos">
                                <h2>{infos.name}</h2>
                                <p>{infos.bio}</p>
                            </div>


                        </div>

                        <div className="github__infos">

                            <div className="location__container">
                                <img src={LocationIcon} />
                                <p>{infos.location}</p>
                            </div>

                            <div className="repositorie__container">
                                <img src={RepositorieIcon} />
                                <p>{infos.public_repos}</p>
                            </div>

                            <div className="followers__container">
                                <img src={FollowersIcon} />
                                <p>{infos.followers}</p>
                            </div>

                            <div className="following__container">
                                <img src={FollowersIcon} />
                                <p>{infos.following}</p>
                            </div>
                        </div>

                    </div>

                    <div className="repos__container">
                        {repos.map((repo, index) => {
                            return (
                                <div>
                                    <h4 key={`repo_${index + 1}`}>{repo.name}</h4>
                                    <img src={StarIcon} alt="start icon"></img>
                                </div>
                            )

                        })}
                    </div>
                </section>
            </main>
        )
    }
}


export default Result