import React from "react";

export default props =>
<div>
    <h1>Bom dia, {props.nome}!</h1>
    <h2>Até breve!</h2>
</div>

// Sem estar envolvido em uma <div>
// export default props =>
// <React.Fragment>
//     <h1>Bom dia, {props.nome}!</h1>
//     <h2>Até breve!</h2>
// </React.Fragment>

// Menos recomendado
// export default props => [
//         <h1 key='h1'>Bom dia, {props.nome}!</h1>,
//         <h2 key='h2'>Até breve!</h2>
// ]