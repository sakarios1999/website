import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "./styles/PrivacyPolicies.css";
import { Helmet } from "react-helmet";

export default class PrivacyPolicies extends Component {
  render() {
    return (
      <Container fluid className="PrivacyPolicies">
        <Helmet>
          <title>TYC - Privacy Policy</title>
        </Helmet>
        <Row>
          <Col xs={12}>
            <h1>Privacy Policy</h1>
            <p className="PrivacyPolicies-Title">INTRODUCTION</p>
            <p className="PrivacyPolicies-text">
              We at Wasai LLC respect the privacy of your personal information
              and, as such, make every effort to ensure your information is
              protected and remains private. As the owner and operator of
              loremipsum.io (the "Website") hereafter referred to in this
              Privacy Policy as "Lorem Ipsum", "us", "our" or "we", we have
              provided this Privacy Policy to explain how we collect, use, share
              and protect information about the users of our Website (hereafter
              referred to as “user”, “you” or "your"). For the purposes of this
              Agreement, any use of the terms "Lorem Ipsum", "us", "our" or "we"
              includes Wasai LLC, without limitation. We will not use or share
              your personal information with anyone except as described in this
              Privacy Policy.
            </p>
            <p className="PrivacyPolicies-text">
              This Privacy Policy will inform you about the types of personal
              data we collect, the purposes for which we use the data, the ways
              in which the data is handled and your rights with regard to your
              personal data. Furthermore, this Privacy Policy is intended to
              satisfy the obligation of transparency under the EU General Data
              Protection Regulation 2016/679 ("GDPR") and the laws implementing
              GDPR.
            </p>
            <p className="PrivacyPolicies-text">
              For the purpose of this Privacy Policy the Data Controller of
              personal data is Wasai LLC and our contact details are set out in
              the Contact section at the end of this Privacy Policy. Data
              Controller means the natural or legal person who (either alone or
              jointly or in common with other persons) determines the purposes
              for which and the manner in which any personal information are, or
              are to be, processed.
            </p>
            <p className="PrivacyPolicies-text">
              For purposes of this Privacy Policy, "Your Information" or
              "Personal Data" means information about you, which may be of a
              confidential or sensitive nature and may include personally
              identifiable information ("PII") and/or financial information. PII
              means individually identifiable information that would allow us to
              determine the actual identity of a specific living person, while
              sensitive data may include information, comments, content and
              other information that you voluntarily provide.
            </p>
            <p className="PrivacyPolicies-text">
              Lorem Ipsum collects information about you when you use our
              Website to access our services, and other online products and
              services (collectively, the “Services”) and through other
              interactions and communications you have with us. The term
              Services includes, collectively, various applications, websites,
              widgets, email notifications and other mediums, or portions of
              such mediums, through which you have accessed this Privacy Policy.
            </p>
            <p className="PrivacyPolicies-text">
              We may change this Privacy Policy from time to time. If we decide
              to change this Privacy Policy, we will inform you by posting the
              revised Privacy Policy on the Site. Those changes will go into
              effect on the "Last updated" date shown at the end of this Privacy
              Policy. By continuing to use the Site or Services, you consent to
              the revised Privacy Policy. We encourage you to periodically
              review the Privacy Policy for the latest information on our
              privacy practices.
            </p>
            <p className="PrivacyPolicies-text">
              BY ACCESSING OR USING OUR SERVICES, YOU CONSENT TO THE COLLECTION,
              TRANSFER, MANIPULATION, STORAGE, DISCLOSURE AND OTHER USES OF YOUR
              INFORMATION (COLLECTIVELY, "USE OF YOUR INFORMATION") AS DESCRIBED
              IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH OR CONSENT TO
              THIS PRIVACY POLICY YOU MAY NOT ACCESS OR USE OUR SERVICES.
            </p>
            <p className="PrivacyPolicies-Title">CHILDREN'S PRIVACY</p>
            <p className="PrivacyPolicies-text">
              Lorem Ipsum does not knowingly collect personally identifiable
              information (PII) from persons under the age of 13. If you are
              under the age of 13, please do not provide us with information of
              any kind whatsoever. If you have reason to believe that we may
              have accidentally received information from a child under the age
              of 13, please contact us immediately at legal@wasai.co. If we
              become aware that we have inadvertently received Personal
              Information from a person under the age of 13, we will delete such
              information from our records.
            </p>
            <p className="PrivacyPolicies-Title">
              INFORMATION PROVIDED DIRECTLY BY YOU
            </p>
            <p className="PrivacyPolicies-text">
              We collect information you provide directly to us, such as when
              you request information, create or modify your personal account,
              request Services, subscribe to our Services, complete a Lorem
              Ipsum form, survey, quiz or application, contact customer support,
              join or enroll for an event or otherwise communicate with us in
              any manner. This information may include, without limitation:
              name, date of birth, e-mail address, physical address, business
              address, phone number, or any other personal information you
              choose to provide.
            </p>
            <p className="PrivacyPolicies-Title">
              INFORMATION COLLECTED THROUGH YOUR USE OF OUR SERVICES
            </p>
            <p className="PrivacyPolicies-text">
              The following are situations in which you may provide Your
              Information to us: When you fill out forms or fields through our
              Services; When you register for an account with our Service; When
              you create a subscription for our newsletter or Services; When you
              provide responses to a survey; When you answer questions on a
              quiz; When you join or enroll in an event through our Services;
              When you order services or products from, or through our Service;
              When you provide information to us through a third-party
              application, service or Website; When you communicate with us or
              request information about us or our products or Services, whether
              via email or other means; and When you participate in any of our
              marketing initiatives, including, contests, events, or promotions.
              We also automatically collect information via the Website through
              the use of various technologies, including, but not limited to
              Cookies and Web Beacons (explained below). We may collect your IP
              address, browsing behavior and device IDs. This information is
              used by us in order to enable us to better understand how our
              Services are being used by visitors and allows us to administer
              and customize the Services to improve your overall experience.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
