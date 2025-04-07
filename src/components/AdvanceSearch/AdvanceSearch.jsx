import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// import
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  {/*  Using Props to Pass Data */}
                  <CustomDropdown
                    label="Location"
                    options={[
                      "USA, Turkish",
                      "Tokyo, Japan",
                      "Sydney, Australia",
                      "Melbourne, Australia",
                      "Paris, France",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label"> Check in </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                   
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label"> Check Out </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  <CustomDropdown
                    label="Guest"
                    options={[
                      "2 adults, 1 children",
                      "	2 adults, 1 children",
                      "2 adults, 3 children",
                    ]}
                  />
                </div>
                <div className="item-search bd-none">
                    <Button className="primaryBtn flex-even d-flex justify-content-center">
                    <i className="bi bi-search me-2"></i> Search 
                    </Button>

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;
