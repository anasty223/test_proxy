import { useEffect } from "react";
import { Overlay, ModalDiv } from "./Modal.styles";

import Albums from "../Albums/Albums";

export default function Modal({ handleTogleModal,modalList }) {
  const onCloseModalByEsc = (e) => {
    if (e.keyCode === 27) {
      handleTogleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onCloseModalByEsc);

    return () => {
      window.removeEventListener("keydown", onCloseModalByEsc);
    };
  });

  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleTogleModal();
        }
      }}
    >
      <ModalDiv>
   <Albums/>
      </ModalDiv>
    </Overlay>
  );
}

// class Modal extends Component {
//  static defaultProps = {
//    handleTogleModal: PropTypes.func.isRequired,
//    modalImg: PropTypes.string.isRequired,
//    tag:PropTypes.string.isRequired
//   }

// onCloseModalByEsc = (e) => {
//     if (e.keyCode === 27) {
//       this.props.handleTogleModal();
//     }
//   };
//     componentDidMount() {
//         console.log('componentsDidMount')
//         window.addEventListener("keydown", this.onCloseModalByEsc);
//     }
//     componentWillUnmount() {
//         window.removeEventListener("keydown",this.onCloseModalByEsc)
//     }
//   render() {
//     return (
//       <Overlay  onClick={(e) => {
//           if (e.target === e.currentTarget) {
//             this.props.handleTogleModal();
//           }
//         }}>
//         <ModalDiv  >
//           <img src={this.props.modalImg} alt={this.props.tag} />
//         </ModalDiv>
//       </Overlay>
//     );
//   }
// }

// export default Modal;
