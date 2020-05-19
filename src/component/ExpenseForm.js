import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpensesForm extends React.Component {
    constructor(props){
        super(props);
        console.log(props.expense)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused:false,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment()
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        })
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        // ^\d*(\.\d{0,2})?$ regex ini untuk filter angka dengan 2 desimal dibelakang
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => {
                return {
                    amount
                }
            })
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => {
            return {
                createdAt
            }
        })
    }

    onFocusChange = ({focused}) => {
        this.setState(() => {
            return {
                calendarFocused:focused
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.amount || !this.state.description){
            this.setState(() => {
                return {
                    error:'Description dan amount tidak boleh kosong'
                }
            })
        }else{
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                    amount:parseFloat(this.state.amount, 10) * 100,
                    note:this.state.note,
                    createdAt:this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" onChange={this.onDescriptionChange} autoFocus value={this.state.description}/>
                    <input type="text" onChange={this.onAmountChange} value={this.state.amount} placeholder="amount"/>
                    <SingleDatePicker 
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    numberOfMonths={1}
                    isOutsideRange={(day) => {return false}}
                    onFocusChange={this.onFocusChange}/>
                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add note (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}


