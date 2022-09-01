// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import {  ReactSelect } from "react-select";
// import { components } from "react-select";

// export const colourOptions = [
//   { value: "cooking", label: "Cooking" },
//   { value: "movies", label: "Movies" },
//   { value: "pets", label: "Pets" },
//   { value: "painting", label: "Painting" },
//   { value: "music", label: "Music" },
//   { value: "gardening", label: "Gardening" },
//   { value: "sports", label: "Sports" },
// ];
// const Option = (props) => {
//   return (
//     <div min-width='100%' style={{width:'100%'}}>
//       <components.Option {...props}>
//         <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label htmlFor="hobbies">{props.label}</label>
//       </components.Option>
//     </div>
//   );
// };

// export default class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       optionSelected: null
//     };
//   }

//   handleChange = (selected) => {
//     this.setState({
//       optionSelected: selected
//     });
//   };

//   render() {
//     return (
//       <span
//         className="d-inline-block"
//         data-toggle="popover"
//         data-trigger="focus"
//         data-content="Please selecet account(s)"
//       >
//         <ReactSelect
//           options={colourOptions}
//           isMulti
//           closeMenuOnSelect={false}
//           hideSelectedOptions={false}
//           components={{
//             Option
//           }}
//           onChange={this.handleChange}
//           allowSelectAll
//           value={this.state.optionSelected}
//         />
//       </span>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);