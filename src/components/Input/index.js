import React from "react";

export default function Input({value="",...otherProps}){
    return (
        <div>
            <input value={value} {...otherProps}/>
        </div>
    )
}

// import React from "react";

// const Input = props => {
//   return <input {...props} />;
// };

// // const CustomizeInput = ({value = "", ...props}) => (
// //   <div style={{padding: 10}}>
// //     <Input style={{outline: "none"}} value={value} {...props} />
// //   </div>
// // );

// class CustomizeInput extends React.Component {
  
//   render() {
//     const {value = "", ...otherProps} = this.props;
//     console.log("CustomizeInput value",value,otherProps);
//     return (
//       <div style={{padding: 10}}>
//         <Input style={{outline: "none"}} value={value} {...otherProps} />
//       </div>
//     );
//   }
// }

// export default CustomizeInput;
