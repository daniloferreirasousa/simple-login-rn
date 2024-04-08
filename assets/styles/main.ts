import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#333',
        padding: 20
    },
    header: {
        color: '#FFF',
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        height: 45,
        fontSize: 18,
        color: '#FFF',
        backgroundColor: '#555',
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    status: {
        margin: 50,
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
    },
    cupomArea: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 30,
    },
    cupomTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20

    },
    cupomCode: {
        fontSize: 40, 
        textAlign: 'center'
    }
});