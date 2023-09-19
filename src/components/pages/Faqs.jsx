import Accordion from "react-bootstrap/Accordion";
import "./faq.css";

const Faqs = () => {
  return (
    <section id="faq">
      <div className="text-container">
        <h1>Frequently Asked Questions</h1>
        <p>
          Hello! We have shared some of our frequently asked questions to help
          you out.
        </p>
      </div>
      <>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Kodego all about?</Accordion.Header>
            <Accordion.Body>
              KodeGo offers full-time online IT courses with a
              study-now-pay-later setup, while providing end-to-end career
              assistance and suport for our students after the bootcamp.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    </section>
  );
};
export default Faqs;
