import React from 'react';
import { Component } from 'react';
import DISHES from '../../data/data';
import DishDetails from './DishDetails';
import MenuItem from './MenuItem';
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap';


class Menu extends Component{
    state = {
        dishes : DISHES,
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }
    
    modalToggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render(){
        const menu = this.state.dishes.map(item=>{
            return(
                <MenuItem key={item.id} dish = {item} DishSelect={()=>this.onDishSelect(item)}/>
            );
        });

        var dishDetail = null;
        if(this.state.selectedDish != null){
            dishDetail = <DishDetails dish = {this.state.selectedDish}/>
        }

        return(
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>

                    <Modal isOpen={this.state.modalOpen} onClick={this.modalToggle}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.modalToggle}>Colse</Button>
                        </ModalFooter>
                    </Modal>
                    
                    {/* <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div> */}
                </div>
            </div>
        );
    }
}
export default Menu;