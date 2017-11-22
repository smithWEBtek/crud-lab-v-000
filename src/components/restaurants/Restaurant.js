import React, { Component } from 'react';
import Reviews from '../reviews/Reviews'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }
  
  render() {

    // debugger;

    // const reviews = this.props.store.getState().reviews.filter(review => review.id === this.props.restaurant.id).map((review, index) => {
    //   return <Review key={index} review={review} store={this.props.store} />
    // });

    return (
      <div>
        <li>{this.props.restaurant.text}
          <button onClick={()=>this.handleOnClick()}>Delete Restaurant</button>
          <ul>
            {/* {reviews} */}   reviews...
          </ul>
        </li>
       
        <ReviewInput restaurant={this.props.restaurant} store={this.props.store} />
 
        <br />
        <br />
      </div>
    );
  }
};

export default Restaurant;