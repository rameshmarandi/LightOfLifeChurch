// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {connect} from 'react-redux';

// export class index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }
//   render() {
//     return (
//       <>
//         <SafeAreaView
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text> HomePage </Text>
//           <TouchableOpacity
//             onPress={() => {
//               this.props.navigation.navigate('ProfilePage');
//             }}
//             style={{
//               marginTop: '5%',
//             }}>
//             <Text>onPress to move Profile page</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(index);

import {View, Text, TouchableOpacity, SafeAreaView , StatusBar} from 'react-native';
import React from 'react';
import {VectorIcon} from '../../../Components/VectorIcon';
import theme from '../../../utility/theme';

const index = ({navigation}) => {
  // StatusBar.setBarStyle('light-content');
  // StatusBar.setBackgroundColor(theme.color.darkTheme); // Set your desired background color

  return (
    <SafeAreaView>
      
      <Text>Homeapge</Text>
      <VectorIcon
        type={'AntDesign'}
        name={'leftcircle'}
        color={'red'}
        size={23}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProfilePage');
        }}>
        <Text>Clcie</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
