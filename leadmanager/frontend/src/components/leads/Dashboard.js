import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function Dashboard() {
  return (
    <Fragment>
      <div>
      <h2>Task Board</h2>
      </div>
      <Leads />
    </Fragment>
  );
}
