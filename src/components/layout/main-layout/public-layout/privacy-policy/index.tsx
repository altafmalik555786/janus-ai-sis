import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss"

interface Props {}
const PrivacyPolicy: React.FC<Props> = observer(({ ...props }) => {
  return (
    <div className={style.mainWrraper}>
        <h2>Privacy policy</h2>
        <p>Updated​: April 03,​ 2023</p>
        <p>We at ​Janus Advisory Inc.. (together with our affiliates, “we”, “our” or “us”) respect your privacy and are strongly committed to keeping secure any information we obtain from you or about you. This Privacy Policy describes our practices with respect to Personal Information we collect from or about you when you use our website and services (collectively, “Services”). This</p>
        <h4>1. Personal information we collect</h4>
        <p>We collect information that alone or in combination with other information in our possession could be used to identify you (“Personal Information”) as follows:</p>
        <p>Personal Information You Provide: We may collect Personal Information if you create an account to use our Services or communicate with us as follows:</p>
        <p>Account Information: When you create an account with us, we will collect information associated with your account, including your name, contact information, account credentials, payment card information, and transaction history, (collectively, “Account Information”).</p>
        <p>User Content: When you use our Services, we may collect Personal Information that is included in the input, file uploads, or feedback that you provide to our Services (“Content”).</p>
        <p>Communication Information: If you communicate with us, we may collect your name, contact information, and the contents of any messages you send (“Communication Information”).</p>
        <p>Social Media Information: We have pages on social media sites like Instagram, Facebook, Medium, Twitter, YouTube and LinkedIn. When you interact with our social media pages, we will collect Personal Information that you elect to provide to us, such as your contact details (collectively, “Social Information”). In addition, the companies that host our social media pages may provide us with aggregate information and analytics about our social media activity.</p>
        <p>Personal Information We Receive Automatically From Your Use of the Services: When you visit, use, and interact with the Services, we may receive the following information about your visit, use, or interactions (“Technical Information”):</p>
        <p>Log Data: Information that your browser automatically sends whenever you user our website(“log data”). Log data includes your Internet Protocol address, browser type and settings, the date and time of your request, and how you interacted with our website.
Usage Data: We may automatically collect information about your use of the Services, such as the types of content that you view or engage with, the features you use and the actions you take, as well as your time zone, country, the dates and times of access, user agent and version, type of computer or mobile device, computer connection, IP address, and the like.</p>
<p>Device Information: Includes name of the device, operating system, and browser you are using. Information collected may depend on the type of device you use and its settings.</p>
        <p>Cookies: We use cookies to operate and administer our Services, and improve your experience on it. A “cookie” is a piece of information sent to your browser by a website you visit. You can set your browser to accept all cookies, to reject all cookies, or to notify you whenever a cookie is offered so that you can decide each time whether to accept it. However, refusing a cookie may in some cases preclude you from using, or negatively affect the display or function of, a website or certain areas or features of a website. For more details on cookies please visit All About Cookies.
Analytics: We may use a variety of online analytics products that use cookies to help us analyze how users use our Services and enhance your experience when you use the Services.</p>
        <h3>2. How we use personal information</h3>
        <p>We may use Personal Information for the following purposes:</p>
        <p>To provide, administer, maintain, improve and/or analyze the Services;
To communicate with you;
To develop new programs and services;
To prevent fraud, criminal activity, or misuses of our Services, and to ensure the security of our IT systems, architecture, and networks; and
To comply with legal obligations and legal process and to protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or other third parties.</p>
<p>Aggregated or De-Identified Information. We may aggregate or de-identify Personal Information and use the aggregated information to analyze the effectiveness of our Services, to improve and add features to our Services, to conduct research and for other similar purposes. In addition, from time to time, we may analyze the general behavior and characteristics of users of our Services and share aggregated information like general user statistics with third parties, publish such aggregated information or make such aggregated information generally available. We may collect aggregated information through the Services, through cookies, and through other means described in this Privacy Policy. We will maintain and use de-identified information in anonymous or de-identified form and we will not attempt to reidentify the information.</p>
<h3>3. Disclosure of personal information</h3>
<p>In certain circumstances we may provide your Personal Information to third parties without further notice to you, unless required by the law:
​Legal Requirements: If required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, including to meet national security or law enforcement requirements, (ii) protect and defend our rights or property, (iii) prevent fraud, (iv) act in urgent circumstances to protect the personal safety of users of the Services, or the public, or (v) protect against legal liability.</p>
<h3>4. Your rights</h3>


    </div>
  );
});

export default memo(PrivacyPolicy);
 