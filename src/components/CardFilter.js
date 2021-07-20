import React from 'react';
import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  margin: 5px;
`;

const CardFilter = ({ searchTerm, setSearchTerm }) => (
  <Div>
    <Input fullWidth={true} type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); } } placeholder="Search by names"></Input>
  </Div>
);

CardFilter.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default CardFilter;
