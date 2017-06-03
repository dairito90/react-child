import React from 'react';
import {family,numberVotes}from '../familyList.js';

class Family extends React.Component{
    constructor(props){
        super(props);
        this.handleNumbVotes=this.handleNumbVotes.bind(this);

    }
handleNumbVotes(){
    this.props.onVote(this.props.id);
}

    render(){


        return(

            <div className="kidInfo">
                <ul>
                    <li>
                        <div className="id">{this.props.id}</div>
                        <div className="firstname">{this.props.firstname}</div>
                        <div className="lastname">{this.props.lastname}</div>
                        <div className="gender">{this.props.gender}</div>
                        <div className="age">
                            <a onClick={this.handleNumbVotes}>
                              <img src={this.props.img} className="img"/>

                            </a>
                             {this.props.votes}
                        </div>



                    </li>
                    <select className="kidCaract" >
                        <option value="Cool">Cool</option>
                        <option value="Not cool">Not Cool</option>
                    </select>
                </ul>

            </div>

        );
    }
}

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            family:[]
        }
        this.handleChildUpVotes=this.handleChildUpVotes.bind(this);
      }


    componentDidMount(){
        this.setState({family:family});

    }

    handleChildUpVotes(familyIds){
        const proxFamily=this.state.family.map((family)=>{
            if(family.id === familyIds){
                return Object.assign({},family,{
                    votes:family.votes + 1
                });
            }else{
                return family;
            }
        });
        // console.log(proxCar);
        this.setState({
            family:proxFamily
        });
}

    render(){


        const sortedVotes=this.state.family.sort((a,b)=>(
            b.votes - a.votes
        ));

            const displayInfo=this.state.family.map((family)=>(
                <Family
                    key={'family-'+ family.id}
                    id={family.id}
                    firstname={family.firstname}
                    lastname={family.lastname}
                    gender={family.gender}
                    img={family.img}
                    onVote={this.handleChildUpVotes}
                    votes={family.votes}

                />
            ));

        return(
            <div className="item">
                {displayInfo}
            </div>

        );



    }


}
export default List;
