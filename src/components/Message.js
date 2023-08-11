import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"

const Message = ({ bgColor, message}) => {
  return (
    <View style = {[styles.container, {backgroundColor: "orange"}]}>
      <Text style = {styles.text}>{message}</Text>
    </View>
  );
};

Message.propTypes = {
    bgColor: PropTypes.string,
    message: PropTypes.string,
};



Message.defaultProps = {
    bgColor: "orange",
}

const style = StyleSheet.create({
    container: {
        padding: 7,
        borderWidth:1,
        borderColor: "#000",
        margin: 10,
    }
})
export default Message