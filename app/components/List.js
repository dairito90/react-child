import React from 'react';
import { familyList, generateAgeCount } from '../familyList';


class Family extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpAge = this.handleUpAge.bind(this);
  }

  handleUpAge() {
    this.props.onAge(this.props.id);
  }

  render() {
    return (
        <div className='list'>
          <div className='image'>
            {/* <img src={this.props.productImageUrl} /> */}
          </div>
          <div className='content'>
            <div className='header'>
              <a onClick={this.handleUpAge}>
                <img src={this.props.childImageUrl} />
              </a>
              {this.props.votes}
            </div>
            <div className='firstname'>
              <a href={this.props.url}>
                {this.props.firstname}
              </a>

            </div>
            <div className='lastname'>
              {this.props.lastname}
            </div>
            <div className='gender'>
                {this.props.gender}
            </div>
            <div className='age'>
                {this.props.age}
            </div>
          </div>
        </div>
      );
  }
}

class ListFamily extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      family: []
    }

    this.handleFamilyUpAge = this.handleFamilyUpAge.bind(this);
  }

  componentDidMount() {
    // Ajax, data stuff
    this.setState({ family: family });
  }

  handleFamilyUpAge(familyId) {
    const nextFamily = this.state.family.map((family) => {
      if (family.id === familyId) {
        return Object.assign({}, family, {
          votes: family.votes + 1
        });
      } else {
        return family;
      }
    });

    this.setState({
      family: nextFamily
    });
  }

  render() {
    const sortedFamily = this.state.family.sort((a, b) => (
      b.votes - a.votes
    ));
    console.log(sortedFamily);
    const familyComponents = sortedFamily.map((family) => (
        <Product
          key={'family-' + family.id}
          id={family.id}
          firstname={family.firstname}
          lastname={family.lastname}
          gender={family.gender}
          age={family.age}
          url={family.url}
          votes={family.votes}
         childImageUrl={family.childImageUrl}
          onVote={this.handleFamilyUpAge}
        />
    ));
    return (
      <div className='items'>
        {familyComponents}
      </div>
    );
  }
}

export default List;
