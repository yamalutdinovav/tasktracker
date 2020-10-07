import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, addLead } from '../../actions/leads';

import Board, { addCard, addColumn } from '@lourenci/react-kanban';

import "@lourenci/react-kanban/dist/styles.css";


export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  static newCardId = 0;

  componentWillMount() {
    this.props.getLeads();
  }

  onCardMove = (board, card, source, destination) => {
    const {title, description} = card;
    const {toColumnId, toPosition} = destination;
    const cardId = this.props.leads.filter((lead) => ((lead.name === card.title) && (lead.message === card.description)))[0].id;
    this.props.deleteLead(cardId);
    this.props.addLead({
      name: title, 
      message: description, 
      status: toColumnId
    });
  }

  onCardDelete = (board, column, card) => {
    const cardId = this.props.leads.filter((lead) => ((lead.name === card.title) && (lead.message === card.description)))[0].id;
    this.props.deleteLead(cardId);
  }

  onCardAdd = (board, column) => {
    const card = column.cards[column.cards.length - 1]
    this.props.addLead({
      name: card.title,
      message: card.description,
      status: column.id
    })
  }

  render() {
    const initBoard = {
      columns: [
        {
          id: 1,
          title: 'Backlog',
          cards: this.props.leads.filter((lead) => lead.status === 1).map((lead) => {
            return ({
              id: Math.floor(Math.random() * 10000),
              title: lead.name,
              description: lead.message
            })
            })
        },
        {
          id: 2,
          title: 'Doing',
          cards: this.props.leads.filter((lead) => lead.status === 2).map((lead) => {
          return ({
            id: Math.floor(Math.random() * 10000),
            title: lead.name,
            description: lead.message
          })
          })
        },
        {
          id: 3,
          title: 'Q&A',
          cards: this.props.leads.filter((lead) => lead.status === 3).map((lead) => {
            return ({
              id: Math.floor(Math.random() * 10000),
              title: lead.name,
              description: lead.message
            })
            })
        },
        {
          id: 4,
          title: 'Production',
          cards: this.props.leads.filter((lead) => lead.status === 4).map((lead) => {
            return ({
              id: Math.floor(Math.random() * 10000),
              title: lead.name,
              description: lead.message
            })
            })
        }
      ]
    }

    console.log(initBoard)
    
    return (
      <Board
      initialBoard={initBoard}
      disableColumnDrag
      allowAddCard={{ on: 'bottom' }}
      onCardDragEnd={this.onCardMove}
      onNewCardConfirm={card => ({ id: Math.floor(Math.random() * 10000), ...card })}
      onCardNew={this.onCardAdd}
      allowRemoveCard
      onCardRemove={this.onCardDelete}/>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead, addLead })(Leads);
