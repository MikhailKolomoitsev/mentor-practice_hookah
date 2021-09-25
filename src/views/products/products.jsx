import { useEffect, useState } from 'react';
import { getAllTabacos } from '../../Redux/operations';
import { connect } from 'react-redux';
import { getTabacosData } from '../../Redux/selector';

function Products({ requestAllTabacos, tabacos }) {
    console.log(tabacos)
    if (tabacos.length===0){requestAllTabacos()}
  return (
    <div>
        <ul>
      {tabacos.map(({id, name, price}) => (
          <li key={id}>
        <p>name {name}</p>
        <p>price {price}</p>
        </li>
      ))}
      </ul>
    </div>
  );
}
const mapDispatchToProps = {
  requestAllTabacos: getAllTabacos,
};
const mapStateToProps = state => ({
  tabacos: getTabacosData(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
