import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView
    originWhitelist={['*']}
    source={{uri: navigation.state.params.product.url}}
  />
);

Product.navegationOptions = ({navigation}) => ({
  // title: navigation.state.params.product.title,
  title: 'TESTE',
});

export default Product;
