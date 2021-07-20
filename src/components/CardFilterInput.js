import React from 'react';
import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin: 5px;
`;

const CardFilterInput = ({ searchTerm, setSearchTerm }) => (
  <Div>
    <Input fullWidth={true} type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); } } placeholder="Search by names"></Input>
  </Div>
);

CardFilterInput.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default CardFilterInput;
