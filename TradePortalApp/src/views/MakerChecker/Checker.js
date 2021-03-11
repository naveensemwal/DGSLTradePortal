import React, { useState } from 'react'
import FileUpload from './FileUpload';
import { Link } from 'react-router-dom'

import {
    CAlert,
    CButton,

    CCard,

    CCardBody,

    CCardHeader,

    CCol,

    CFormGroup,

    CInput,

    CLabel,

    CSelect, CTextarea,

    CRow,

    CNav,

    CNavItem,

    CNavLink,

    CTabContent,

    CTabPane,

    CTabs

} from '@coreui/react';



const Collapses = () => {



    const [collapse, setCollapse] = useState(false)

    const [collapseMulti, setCollapseMulti] = useState([false, false])

    const [accordion, setAccordion] = useState(0)

    const [fade, setFade] = useState(true)



    const toggle = (e) => {

        setCollapse(!collapse)

        e.preventDefault()

    }



    const toggleMulti = (type) => {

        let newCollapse = collapseMulti.slice()

        switch (type) {

            case "left":

                newCollapse[0] = !collapseMulti[0];

                break;

            case "right":

                newCollapse[1] = !collapseMulti[1];

                break;

            case "both":

                newCollapse[0] = !collapseMulti[0];

                newCollapse[1] = !collapseMulti[1];

                break;

            default:

        }

        setCollapseMulti(newCollapse)

    }



    const toggleFade = () => {

        setFade(!fade)

    }



    return (

        <>

            <CCol xs="12" md="12" className="mb-4">

                <CCard>



                    <CCardBody>

                    <CAlert color="primary">
                                    <CRow>
                                        <CCol sm="3"><b>Product</b> : LC</CCol>
                                        <CCol sm="3"><b>Sub Product</b> : Lodgement</CCol>
                                        <CCol sm="3"><b>Operation</b> : Issuance</CCol>
                                        <CCol sm="3"><b>Ref No.</b> : 3487534</CCol>
                                    </CRow>
                                </CAlert>
                                

                        <CTabs activeTab="general">

                            <CNav variant="tabs">

                                <CNavItem>

                                    <CNavLink data-tab="general">

                                        General Details

                                     </CNavLink>

                                </CNavItem>

                                <CNavItem>

                                    <CNavLink data-tab="benef">
                                        Party Details
                                    </CNavLink>

                                </CNavItem>
                                <CNavItem>

                                <CNavLink data-tab="ref">

                                    Reference Details

                                </CNavLink>

                                </CNavItem>
                                <CNavItem>

                                    <CNavLink data-tab="document">

                                        Document Details

                  </CNavLink>

                                </CNavItem>

                            </CNav>

                            <CTabContent>

                                <CTabPane data-tab="general">
                                <br />
                                    

                                    <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">General Details</h5>

                                    </CCardHeader>



                                    <CCardBody>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Branch ID</CLabel>

                                                    <CInput id="company" placeholder="Enter your Branch ID" value="BK010" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Product</CLabel>

                                                    <CInput id="company" placeholder="Enter your Product Name" value="LC" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Sub Product</CLabel>

                                                    <CInput id="company" placeholder="Enter your Sub Product Name" value="Lodgement" disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Operation</CLabel>

                                                    <CInput id="company" placeholder="Enter your Operation name" value="Issuance" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Cust ID</CLabel>

                                                    <CInput id="company" placeholder="Enter your Cust ID" value="978324" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Customer Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Customer Name" value="Ramson International" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">IE Code</CLabel>

                                                    <CInput id="company" placeholder="Enter your IE Code" value="3432323534" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">PAN No.</CLabel>

                                                    <CInput id="company" placeholder="Enter your PAN Code" value="BANGD8362F" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Account No</CLabel>

                                                    <CSelect id="select" disabled value="1">

                                                        <option value="0" >Please select Account Number</option>

                                                        <option value="1">6757658699969</option>

                                                        <option value="2">6757658621630</option>

                                                        <option value="3">6757658658279</option>

                                                    </CSelect>

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">GST No</CLabel>

                                                    <CInput id="company" placeholder="Enter your GST No" value="Datamatics" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Currency </CLabel>

                                                    <CSelect id="select" disabled value="1">
                                                        <option value="0" >Please select Currency</option>
                                                        <option value="1">USD</option>
                                                        <option value="2">EUR</option>
                                                        <option value="3">INR</option>
                                                        <option value="4">AED</option>
                                                        <option value="5">BHD</option>
                                                    </CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Amount</CLabel>

                                                    <CInput id="company" placeholder="Enter your Amount" value="234563" disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                    </CCardBody>



                                </CTabPane>

                                <CTabPane data-tab="ref">

                                    <br />



                                    <CCardHeader id="headingTwo">



                                        <h5 className="m-0 p-0">Reference Details</h5>



                                    </CCardHeader>



                                    <CCardBody>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bill Ref No.</CLabel>

                                                    <CInput id="company" placeholder="Enter your Bill Ref No." value="78773170" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bill Status</CLabel>

                                                    <CInput id="company" placeholder="Enter your Bill Status" value="Maker" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Ref No.</CLabel>

                                                    <CInput id="company" placeholder="Enter your Ref No." value="3487534" disabled/>

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Limit ID</CLabel>

                                                    <CInput id="company" placeholder="Enter your Limit ID" value ='342435'disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Charges</CLabel>

                                                    <CInput id="company" placeholder="Enter your Charges" value ='6877' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Margin %</CLabel>

                                                    <CInput id="company" placeholder="Enter your Margin %" value ='20%'disabled/>

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Other Bank Ref No</CLabel>

                                                    <CInput id="company" placeholder="Enter your Other Bank Ref No" value ='89765' disabled />

                                                </CFormGroup>

                                            </CCol>



                                        </CFormGroup>



                                    </CCardBody>



                                </CTabPane>

                                <CTabPane data-tab="benef">

                                    <br />

                                    <CCardHeader id="headingThree">

                                        <h5 className="m-0 p-0">Party Details</h5>

                                    </CCardHeader>



                                    <CCardBody>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Party Name" value ='XYZ' disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Address</CLabel>

                                                    <CInput id="company" placeholder="Enter your Party Address" value ='ATCS Office,Sanpada' disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="select">Country</CLabel>

                                                    <CSelect id="select" value ='12' disabled >

                                                        <option value="0" >Please select Party Country</option>

                                                        <option value="1">Afghanistan</option>

                                                        <option value="2">Belgium</option>

                                                        <option value="3">Brazil</option>

                                                        <option value="4">Canada</option>

                                                        <option value="5">China</option>

                                                        <option value="6">Malaysia</option>

                                                        <option value="7">Mexico</option>

                                                        <option value="8">New Zealand</option>

                                                        <option value="9">Norway</option>

                                                        <option value="10">Peru</option>

                                                        <option value="11">Russia</option>

                                                        <option value="12">India</option>

                                                        <option value="13">Japan</option>

                                                        <option value="14">United States of America</option>

                                                        <option value="15">Thailand</option>

                                                    </CSelect>



                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Place of Expiry</CLabel>

                                                    <CInput id="company" placeholder="Enter Place of Expiry" value ='xxx' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Date of Expiry</CLabel>

                                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" value ='19-03-2021' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Description of Goods</CLabel>

                                                    <CInput id="company" placeholder="Enter Description of Goods" value ='xxx' disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Party Account No./IBAN</CLabel>

                                                    <CInput id="company" placeholder="Enter Party Account No./IBAN" value ='234555' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">BIC/BSB Code</CLabel>

                                                    <CInput id="company" placeholder="Enter BIC/BSB Code" value ='1234' disabled/>

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol>

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Advising Bank Name & Address</CLabel>

                                                    <CTextarea id="company" placeholder="Enter Advising Bank Name & Address" value ='xxc' disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol>

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Reimbursing Bank Name & Address</CLabel>

                                                    <CTextarea id="company" placeholder="Enter Reimbursing Bank Name & Address" value ='xxxv' disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol>

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Advise Through Bank Name & Address</CLabel>

                                                    <CTextarea id="company" placeholder="Enter Advise Through Bank Name & Address" value ='ccc' disabled/>

                                                </CFormGroup>

                                            </CCol>

                                            </CFormGroup>


                                    </CCardBody>



                                </CTabPane>

                                <CTabPane data-tab="document">

                                    <br />

                                    <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Document Details</h5>

                                    </CCardHeader>
                                    <CCardBody>
                                        
                                        <CFormGroup row className="my-0">

                                            <div className='container mt-4'>
												<FileUpload />
											</div>

                                        </CFormGroup>

                                    </CCardBody>

                                </CTabPane>
                            </CTabContent>

                        </CTabs>

                    </CCardBody>

                </CCard>

            </CCol>



            <br />

            <CCard className="mb-0">

                <CCardHeader id="headingThree">



                    <h5 className="m-0 p-0">Remarks</h5>

                </CCardHeader>

                <CCardBody>

                    <CFormGroup row className="my-0">

                        <CCol xs="12">

                            <CFormGroup>



                                <CTextarea id="company" placeholder="Enter Remarks" />

                            </CFormGroup>

                        </CCol>



                    </CFormGroup>

                </CCardBody>



            </CCard>

            <br />



            <CRow>

                <CCol xs="6">

                    <Link to="/dashboard">

                        <CButton color="primary" className="px-4">Save</CButton> &nbsp;
                        <CButton color="primary" className="px-4">Close</CButton>&nbsp;
                        <CButton color="primary" className="px-4">Return to Maker</CButton>&nbsp;
                        <CButton color="primary" className="px-4">Trash</CButton>&nbsp;
                        <CButton color="primary" className="px-4">Submit</CButton>

                    </Link>

                </CCol>



            </CRow>





        </>

    )

}



export default Collapses