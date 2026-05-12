import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
 
const EdgeAIScanner = () => {
  const webViewRef = useRef(null);
 
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <WebView
        ref={webViewRef}
        source={{ uri: 'https://roaring-mermaid-16616d.netlify.app/' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        onLoadStart={() => console.log('Loading started')}
        onLoadEnd={() => console.log('Loading finished')}
      />
    </SafeAreaView>
  );
};
 

 
export default EdgeAIScanner;
 