import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
import useCheck from "../../hooks/useCheck";
  // Create styles
  
  
 
  
const Pdf = ({totalSell, totalItem}) => {

    const styles = StyleSheet.create({
        page: {
          backgroundColor: "white",
          color: "black",
        },
        section: {
          margin: 10,
          padding: 10,
        },
        viewer: {
          width: window.innerWidth, //the pdf viewer will take up all of the width and height
          height: window.innerHeight,
        },
      });
    return (
       
          <Document>
            {/*render a single page*/}
            <Page size="A4" style={styles.page}>
                
                <View style={styles.section}>
                <Text>Total item Selected: {totalItem}</Text>
              </View>
              <View style={styles.section}>
                <Text>Total Cost: {totalSell}tk</Text>
              </View>
              
              <View style={styles.section}>
                <Text>Happy Shopping!!!!</Text>
              </View>
              
            </Page>
          </Document>
        
      );
};

export default Pdf;