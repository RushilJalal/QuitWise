import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlcoholRecovery: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alcohol Recovery App</Text>
            {/* Add your components and logic here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default AlcoholRecovery;