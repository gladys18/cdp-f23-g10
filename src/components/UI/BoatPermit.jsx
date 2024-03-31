import React, { useState } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Form, FormGroup } from "reactstrap";
import logo from "../../assets/all-images/logo-2.jpg"

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 10,


    },
    section: {
        marginBottom: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    section1: {
        marginBottom: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    heading: {
        fontSize: 25,
        marginBottom: 10,
        textDecoration: "underline",
        textAlign: 'center'
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    textHead: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: "bold"
    },
});


const BoatPermit = ({ formData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image source={logo} style={{ width: "50px", height: "50px" }} />
                <Text style={styles.heading}>Permis Bateau SAILINGLOC</Text>
                <View style={styles.section}>

                    <View>
                        <Text style={styles.textHead}>Nom Complet</Text>
                        <Text style={styles.text}>{formData.name}</Text>
                    </View>

                  

                    <View>
                        <Text style={styles.textHead}>Date de Naissance</Text>
                        <Text style={styles.text}>{formData.DOB}</Text>
                    </View>
                    <View>
                        <Text style={styles.textHead}>Numero de carte</Text>
                        <Text style={styles.text}>{formData.registrationNumber}</Text>
                    </View>

                </View>
                <View style={styles.section}>

                   

                    <View>
                        <Text style={styles.textHead}>Date d'émission</Text>
                        <Text style={styles.text}>{formData.issueDate}</Text>
                    </View>

                    <View>
                        <Text style={styles.textHead}>Date d'éxpiration</Text>
                        <Text style={styles.text}>{formData.expireDate}</Text>
                    </View>

                </View>
            </Page>
        </Document>
    );
};

// BoatPermitForm component
const BoatPermitForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        boatType: '',
        registrationNumber: '',
        issueDate: '',
        expireDate: '',
        DOB: ''
        // Add more form fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
              <h1 style={{textAlign:'center', fontWeight:"bold"}}>Créez votre Permis bateau</h1>
            <Form className="form">
                <div className=" d-flex align-items-center justify-content-between flex-wrap">
                    <FormGroup className="form__group">
                        <label>Votre Nom Complet</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Votre nom' required />
                    </FormGroup>

                   

                    <FormGroup className="form__group">
                        <label >Votre Date de Naissance</label>
                        <input
                            type="date"
                            name="DOB"
                            value={formData.DOB}
                            onChange={handleChange}
                            placeholder='Votre Date de Naissance'
                            required
                        />
                    </FormGroup>
                    <FormGroup className="form__group">
                        <label >Numero de carte</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            placeholder='Numero du bateau'
                            required
                        />
                    </FormGroup>
                    <FormGroup className="form__group">
                        <label>Date d'émmission</label>
                        <input
                            type="date"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleChange}
                            placeholder="Date d'émmission"
                            required
                        />
                    </FormGroup>
                    <FormGroup className="form__group">
                        <label >Date d'éxpiration</label>
                        <input
                            type="date"
                            name="expireDate"
                            value={formData.expireDate}
                            onChange={handleChange}
                            placeholder="Date d'éxpiration"
                            required
                        />
                    </FormGroup>





                </div>
            </Form>
            <PDFDownloadLink document={<BoatPermit formData={formData} />} fileName="boat_permit.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? (<FormGroup className="form__group"><button className="btn find__car-btn">Traitement du permis</button></FormGroup>
                    ) : (<FormGroup className="form__group"><button className="btn find__car-btn">Téléchargez le permis</button></FormGroup>
                    )
                }
            </PDFDownloadLink>
        </div>
    );
};

export default BoatPermitForm;
