import React from "react";
import "./privacy.css";
import Navbar from "./components/Navbar";
import Footer from "./slides/Footer";

const Policy = () => {
  return (
    <>
      <div className="policy-main">
        <Navbar />
        <div className="policy-container">
          <h1>Privacy Policy</h1>
          <div className="policy-content">
            {/* User Privacy Policy */}
            <div className="policy-details">
              <h2>Privacy Policy for Foodkart Users</h2>
              <p>
                Foodkart is a free application that enables users to seamlessly
                order food and have it delivered to their doorstep. This Privacy
                Policy outlines how we collect, use, and safeguard your personal
                information when you use our services.
              </p>
              <p>
                By using Foodkart, you agree to the collection and use of
                information as described in this policy. We use your data to
                improve our service and enhance your experience. We do not share
                your information except as outlined in this Privacy Policy.
              </p>
            </div>

            {/* Information Collection and Use */}
            <div className="policy-details">
              <h2>Information Collection and Use</h2>
              <p>
                To provide and improve our service, we may collect personal
                information such as your name, email address, phone number, and
                delivery address. This information helps us process your orders
                and enhance user experience.
              </p>
              <p>
                We also use third-party services that may collect data used for
                identification and analytics purposes.
              </p>
              <p>Third-party service providers include:</p>
              <ul className="policy-list-items">
                <li>Google Play/Apple Store Services</li>
                <li>Payment Processing Services</li>
              </ul>
            </div>

            {/* Log Data */}
            <div className="policy-details">
              <h2>Log Data</h2>
              <p>
                When you use our service, we may collect data such as your IP
                address, device type, operating system version, app settings,
                and timestamps of your activity. This information helps us
                analyze and improve performance.
              </p>
            </div>

            {/* Service Providers */}
            <div className="policy-details">
              <h2>Service Providers</h2>
              <p>
                We may engage third-party companies to facilitate our service,
                provide services on our behalf, or assist with analytics. These
                providers have access to your personal information only to
                perform specific tasks and are obligated to maintain
                confidentiality.
              </p>
            </div>

            {/* Security */}
            <div className="policy-details">
              <h2>Security</h2>
              <p>
                We prioritize the security of your data and implement
                commercially acceptable means to protect it. However, no
                internet transmission or storage method is entirely secure, and
                we cannot guarantee absolute security.
              </p>
            </div>

            {/* External Links */}
            <div className="policy-details">
              <h2>Links to Other Sites</h2>
              <p>
                Our service may contain links to third-party sites. We are not
                responsible for the content or privacy practices of these sites
                and encourage users to review their privacy policies.
              </p>
            </div>

            {/* Vendor & Delivery Agent Privacy Policy */}
            <div className="policy-details">
              <h2>Privacy Policy for Foodkart Vendors & Delivery Agents</h2>
              <p>
                The Foodkart Vendor and Delivery Agent app is designed to help
                vendors and delivery agents manage orders efficiently. This
                section outlines how we collect, use, and protect data for
                vendors and delivery partners.
              </p>
            </div>

            {/* Location Tracking */}
            <div className="policy-details">
              <h2>Location Tracking</h2>
              <p>
                To ensure timely deliveries, we collect and track your location
                while the app is running. This allows us to match you with
                nearby orders, verify your presence in a designated area, and
                optimize delivery routes.
              </p>
              <p>
                You can enable or disable location tracking in your device
                settings. Disabling location tracking may impact your ability to
                receive and complete deliveries.
              </p>
            </div>

            {/* Information Collection and Use (Vendor & Delivery) */}
            <div className="policy-details">
              <h2>Information Collection and Use</h2>
              <p>
                Vendors and delivery agents may be required to provide
                additional information such as business details, vehicle
                information, and government-issued identification for
                verification purposes.
              </p>
              <p>
                Like users, vendor and delivery agent data may also be processed
                using third-party services for analytics, security, and payment
                processing.
              </p>
            </div>

            {/* Security (Vendor & Delivery) */}
            <div className="policy-details">
              <h2>Security</h2>
              <p>
                We take reasonable measures to protect vendor and delivery agent
                data. However, as with all digital services, we advise caution
                when sharing personal information online.
              </p>
            </div>

            {/* External Links (Vendor & Delivery) */}
            <div className="policy-details">
              <h2>Links to Other Sites</h2>
              <p>
                Vendors and delivery agents may encounter links to third-party
                websites. Foodkart is not responsible for the content or privacy
                policies of external sites.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
