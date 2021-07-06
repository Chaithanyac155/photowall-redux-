import React, { Component } from 'react';
import Title from './Title';
import PhotowallPage from './PhotowallPage';
import { Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';
import './Page.css';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { removePost} from '../redux/actions'
import { withRouter } from 'react-router-dom'
import * as  actions from '../redux/actions';

class Main extends Component {
    constructor() {
        super()
        // this.state = {
        //     posts: [{
        //         id: 0,
        //         description: "beautiful landscape",
        //         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        //             "3919321_1443393332_n.jpg"
        //     }, {
        //         id: 1,
        //         description: "Aliens",
        //         imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        //     }, {
        //         id: 2,
        //         description: "On a vacation!",
        //         imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        //     }],


        // }

        // this.handleRemove = this.handleRemove.bind(this);
    }

    // handleRemove = (postRemoved) => {
    //     console.log(postRemoved.description);
    //     this.setState((state) =>({
    //     posts:state.posts.filter(post => post !== postRemoved)
    //     }))
    //     // this.setState({
    //     //     posts: this.state.posts.filter(item => item.id !== postRemoved.id)
    //     // })
    // }
    // addPhoto(postSubmitted){
    //     this.setState((state) =>({
    //        posts:state.posts.concat([postSubmitted])
    //     }))
    // }

    render() {
        console.log(this.props)
        
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={"Photowall"} />
                        <PhotowallPage {...this.props} />
                    </div>
                )} />
                <Route exact path="/AddPhoto"  render={({history}) => (
            
                    <AddPhoto {...this.props}  />
                )} 
                />
            </div>

        );
    }

}

function  mapStateToProps(state) {
    return {
        posts:state
    }
}

function  mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}
export default  withRouter(connect(mapStateToProps , mapDispatchToProps)(Main))