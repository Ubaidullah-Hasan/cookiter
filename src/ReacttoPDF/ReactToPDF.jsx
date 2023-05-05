import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});


const ReactToPDF = ({children}) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text >
                    {children}
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </Document>
    );
};

export default ReactToPDF;