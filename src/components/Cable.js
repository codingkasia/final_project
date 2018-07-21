// import React, { Fragment } from 'react';
// import { ActionCable } from 'react-actioncable-provider';

// const Cable = ({ guesses, handleReceivedMessage }) => {
//     return (
//         <Fragment>
//             {guesses.map(guess => {
//                 return (
//                     <ActionCable
//                         key={guess.id}
//                         channel={{ channel: 'GuessesChannel', guess: guess.id }}
//                         onReceived={handleReceivedMessage}
//                     />
//                 );
//             })}
//         </Fragment>
//     );
// };

// export default Cable;