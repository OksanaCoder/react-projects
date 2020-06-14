import React, { Component } from 'react';


class BookStore extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0,
            active: false, 
           
            
        }
        this.clicker = this.clicker.bind(this);

    }
 
    clicker() {
       let active = !this.state.active;
       this.setState({ 
           active: active, 
           total: this.state.total + 1
     
        })
    };

    
    render() {
        console.log(this.props.books);
        return (
            <div className='container'>
                <div className='row'>
                <span className='mt-4'>Total: {this.state.total}</span>
                    {this.props.books.map((book, i)=> {
                        
                        return (
                            <>
                       
                            <div className='col-12 card book-card' key={i}>
                                <div className='row'>
                                    <div className='col-8'>
                                        <h5>{book.name}</h5>
                                        <h6>$ {book.price}</h6>
                                    </div>
                                
                                <div className='col-4'>
                                    <button onClick={this.clicker} className=' btn btn-success' style={{width: '50%', }}>add to cart</button>
                                </div>
                                </div>
                            </div>

                            </>
                        )

                    })}
                  
                </div>
            </div>
        )
    }
}


export default BookStore;