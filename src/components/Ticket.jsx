import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  const ticketInformation =
    <div>
      <style jsx>{`
          .color-toggle {
          background-color: lightgreen;
          color: blue;
        }
        .color-toggle:hover {
          background-color: pink;
          color: red;
        }
        `}</style>
      <div className="color-toggle"><h3>{props.location} - {props.names}</h3>
        <h4>{props.formattedWaitTime}</h4>
        <hr/>
      </div>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
