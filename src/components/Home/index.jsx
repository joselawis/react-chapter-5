import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

function Home(props) {
  const { isMobile } = props;
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>
        You are using:
        <strong> {isMobile ? 'mobile' : 'desktop'}</strong>
      </p>
    </div>
  );
}

// Toma una parte del estado y lo pasa al componente como prop.
// El estado que recibe es el estado de redux y dentro del mismo tendrá todos los reductores que
// ha definido en rootReducer y luego devuelve un objecto con los datos que necesita para enviarlos al componente
function mapStateToProps(state) {
  return { isMobile: state.device.isMobile };
}

function mapDispatchToProps() {
  return {};
}

Home.propTypes = { isMobile: bool };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
