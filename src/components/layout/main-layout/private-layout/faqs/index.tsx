import { observer } from "mobx-react";
import { memo } from "react";
import { Collapse } from "antd";
import style from "./style.module.scss";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
interface Props {}

interface Props {}
const Faqs: React.FC<Props> = observer(({ ...props }) => {
  const onChange = (key: string | string[]) => {};
  return (
    <div className={style.mainContainer}>
      <h2>Main Functions and Navigation</h2>
      <div className={style.container}>
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? (
            <div className={style.plusIcon}>
              <MinusOutlined />
            </div>
          ) : (
            <div className={style.plusIcon}>
              <PlusOutlined />
            </div>
          )
        }
        defaultActiveKey={["1"]}
        onChange={onChange}
      >
        <Panel
          header="Q: What is the main purpose of Climate Finance Co-pilot (CFC)?"
          key="1"
        >
          <p>
            A: The main purpose of this CFC is to help users compose and score
            climate adaptation and mitigation Concept Notes and Proposals. It
            uses advanced AI algorithms to generate content and scores based on
            the Green Climate Fund's (GCF) project criteria.
          </p>
        </Panel>

        <Panel
          header="Q: What is the main purpose of Climate Finance Co-pilot (CFC)?"
          key="2"
        >
          <p>
            A: The main purpose of this CFC is to help users compose and score
            climate adaptation and mitigation Concept Notes and Proposals. It
            uses advanced AI algorithms to generate content and scores based on
            the Green Climate Fund's (GCF) project criteria.
          </p>
        </Panel>
        <Panel
          header="Q: Is CFC suitable for beginners in climate finance?"
          key="3"
        >
          <p>
            A: Yes, CFC is designed to accommodate users with varying levels of
            experience in climate finance, including beginners. The application
            provides a user-friendly interface, templates, examples, and
            guidance to help users create high-quality, first draft, Concept
            Notes and Proposals, regardless of users’ prior expertise in the
            field.
          </p>
        </Panel>

        <Panel
          header="Q: How does the CFC generate content for my project?  "
          key="4"
        >
          <p>
            A: CFC generates content by leveraging advanced language models,
            customized algorithms and prompts, which are designed to direct the
            AI technology to create fresh text based on the information and
            context provided by the user. AI-generated content should be treated
            as a starting point and not as a final product.
          </p>
        </Panel>

        <Panel
          header=" Q: How can I regenerate the AI-generated outputs? Can see alternate versions of these outputs before saving one? "
          key="5"
        >
          <p>
            A: If you're not satisfied with the generated content, you can click
            on the "Regenerate" icon under the output box-display. This will
            prompt the CFC to reevaluate your input and generate a new output.
            This feature can be helpful for both text generation and scoring
            tasks.
          </p>
        </Panel>

        <Panel
          header=" Q: Is there a limit to the number of projects I can create and save in the Climate Finance Co-pilot? "
          key="6"
        >
          <p>
            A: There may be limits to the number of projects you can create and
            save in the CFC , depending on your subscription plan. However,
            there are plans available that offer increased storage and project
            capacity to meet the needs of users with higher project volumes.
          </p>
        </Panel>
        <Panel
          header=" Q: Can I access the Climate Finance Co-pilot on multiple devices? "
          key="7"
        >
          <p>
            A: Yes, you can access the CFC on multiple devices, including
            desktop computers, laptops, and tablets. The application is designed
            to be responsive and user-friendly across all these devices,
            ensuring a consistent and seamless experience.
          </p>
        </Panel>
        <Panel
          header=" Q: Do I need to install any software to use the Climate Finance Co-pilot? "
          key="8"
        >
          <p>
            A: No, the CFC is a web-based application (software as a service),
            meaning you don't need to install any software on your device. You
            can access the application through a compatible web browser.
          </p>
        </Panel>
        <h3>Saving And Accessing Your Work</h3>
        <Panel header="  Q: How do I save my project? " key="9">
          <p>
            A: You will be continually prompted to save freshly generated and
            will not be permitted to advance until you've saved a version of the
            output. There's really no risk of your project not being saved. You
            can always view saved content by using the ‘Back’ button/icon or via
            the generate report feature located next to the project name in the
            projects library. 
          </p>
        </Panel>

        <Panel header="  Q: How can I access my saved projects?" key="10">
          <p>
            A: You can access your saved projects by navigating to the Project
            Files library from the navigation bar at the top of the screen.
             There, you'll find a list of all your previously created and saved
            projects and button enabling you to Delete, Edit or Generate a
            project report.
          </p>
        </Panel>
        <h3>How Climate Finance Score Concept Notes and Proposals </h3>
        <Panel header=" Q: What is the proposal scoring feature? " key="11">
          <p>
            A: The proposal scoring feature is an advanced AI tool that
            evaluates your Concept Notes and Proposals based on the Green
            Climate Fund's (GCF) project criteria. It generates scores in line
            with GCF's Investment Criteria Scorecard (ICS), except that
            sub-criteria scores are not weighed.
          </p>
        </Panel>

        <Panel
          header=" Q: How do I access the scoring report for my project? "
          key="12 "
        >
          <p>
            A: Once your project has been fully scored (i.e. your narratives
            evaluated against all ICS sub-criteria and prompts), you can access
            a detailed report listing the scores/grades for all sub-criteria and
            indicators. This report can be used for your reference or shared
            with other project stakeholders.
          </p>
        </Panel>

        <Panel
          header=" Q: Can I trust the AI-generated content and scoring? "
          key="13 "
        >
          <p>
            A: The CFC’s scoring feature is based on advanced algorithms which
            have the GCF’s scoring rubric “baked” into them. As such. The
            scoring output provides the most objective evaluation of your input
            possible. However, please note that though all indicators and
            sub-criteria scoring fully conforms to the GCF’s Investment Criteria
            Scorecard (ICS), the overall score of the six criteria are based on
            unweighted averages of their respective sub-criteria. (We will add
            this capability in the Summer of 2023.)
          </p>
        </Panel>

        <Panel
          header=" Q: Are Concept Notes and Proposals (Full and SAP) grades using the same standards/rubric? "
          key="14 "
        >
          <p>
            A: Yes, the Concept Note is essentially a preview of the Full
            Proposal and as such should provide satisfactory narratives that
            conform to the GCF’s Investment Criteria Scorecard (ICS). If you use
            the Concept Note Generation tool it will generate narratives that
            conform fully with the GCF scoring rubric.
          </p>
        </Panel>
        <h3>Generating Reports </h3>
        <Panel
          header=" Q: Can I export my completed Concept Notes and Proposals?  "
          key="15 "
        >
          <p>
            A: Yes, you can export your completed Concept Notes and Proposals
            into a PDF file. This allows you to easily share your work with
            colleagues, submit it to funding entities and other stakeholders, or
            use it for further analysis and reporting purposes.
          </p>
        </Panel>
        <Panel
          header=" Q: What is the scoring rubric used by CFC to grade Green Climate Fund Notes and Proposals? 
 "
          key=" 16"
        >
          <p>
            According to the GCF, “the Investment Criteria Scorecard (ICS) tool
            is intended help the Accredited Entities to self-appraise funding
            proposals against the GCF investment criteria more objectively, thus
            supporting prioritization and selection of the strongest projects
            and programmes, thereby:  improving transparency, discipline, and
            objectivity of the process in line with the request of the board for
            a high-quality pipeline  using the tool for internal review purposes
            to complement and support decision-making.” 
          </p>
        </Panel>
        <Panel
          header=" **Q: How should I interpret the grading reports?  "
          key=" 17"
        >
          <p>
            A: The grading report provides a high level, at-a-glance view of the
            quality of your project/programme from the perspective of the GCF
            evaluators. The grades are based on the same Investment Criteria
            Scorecard (ICS) used by the GCF.
          </p>
        </Panel>

        <Panel
          header=" **Q: How can I get higher grades and why should I trust CFC's recommendations?  "
          key=" 18 "
        >
          <p>
            A: CFC provides recommendation on how to improve your grade for each
            indicator by displaying those suggestions on the right side of the
            input/output box. It is recommended that you modify your input based
            on the recommendations provided and resubmit for a new evaluation.
          </p>
        </Panel>
        <h3>Miscellaneous</h3>
        <Panel header=" Q: How often is the CFC updated? " key="19">
          <p>
            A: The CFC is continuously updated to incorporate the latest
            advancements in language models, algorithms, and climate finance
            guidelines. This ensures that CFC provides the best possible
            technical and administrative support for your climate adaptation and
            mitigation finance actions.
          </p>
        </Panel>
        <Panel
          header="Q: How do I provide feedback or report an issue with the application?  "
          key="20 "
        >
          <p>
            A: If you have any feedback, suggestions, or need to report an issue
            with the application, you can click on the "Feedback" or "Contact
            Customer Support" links provided at the top of the screen. This will
            allow you to communicate directly with the support team, who will
            address your concerns and help improve the overall experience of
            using the Climate Finance Co-pilot.
          </p>
        </Panel>
        <Panel
          header=" Q: Is my data secure when using the Climate Finance Co-pilot? "
          key="21 "
        >
          <p>
            A: Yes, the Climate Finance Co-pilot is designed with data security
            in mind. Your project data is securely stored on the platform, and
            the highest standards of data protection are implemented to ensure
            your data remains safe and confidential.
          </p>
        </Panel>
        <h3>Usage Limitations </h3>
        <Panel
          header=" Q: Is there a limit to the number of projects I can create and save in the Climate Finance Co-pilot? "
          key=" 22"
        >
          <p>
            A: There may be limits to the number of projects you can create and
            save in the CFC, depending on your subscription plan. However, there
            are plans available that offer increased storage and project
            capacity to meet the needs of users with higher project volumes.
          </p>
        </Panel>
        <Panel
          header=" Q: Are there token limits based on the version of the plan purchased? "
          key=" 23"
        >
          <p>
            A: Yes, the number of tokens available for use in the CFC may vary
            depending on the plan you have purchased. Different plans offer
            different token limits to accommodate varying user needs. Please
            discuss your needs with our customer service team.
          </p>
        </Panel>
        <Panel header=" Q: What are tokens,  " key="24 ">
          <p>
            A: A token is roughly the equivalent to 75% of a word. So, 1000
            tokens = 750 words. A token refers to a unit of text that has been
            preprocessed and transformed into a numerical representation that
            can be fed into a machine learning model for further analysis. For
            example, in natural language processing tasks such as language
            modeling, text classification, or machine translation, the input
            text is typically tokenized into a sequence of tokens, where each
            token represents a word or a sub-word unit
          </p>
        </Panel>
        <Panel
          header=" Q: How do tokens affect my use of the Climate Finance Co-pilot?
 "
          key="25 "
        >
          <p>
            A: Tokens are units used to measure the amount of AI-generated
            content and processing required for your projects. The more tokens
            you have, the more AI-generated content you can utilize within the
            application. The number of tokens you have access to is dependent on
            your subscription plan. CFC will let you know when you are about to
            exceed your allotted token limits.
          </p>
        </Panel>
        <Panel
          header="  Q: Can I purchase additional tokens if I exhaust my plan's token limit?"
          key=" 26"
        >
          <p>
            A: Yes, you can purchase additional tokens if you have exhausted
            your plan's token limit. This allows you to continue using the
            AI-generated content and scoring features in the CFC without having
            to upgrade to a higher subscription plan. Please discuss your needs
            with our customer service team.
          </p>
        </Panel>
        <Panel header=" Q: How are token prices determined? " key=" 27">
          <p>
            A: Token prices are not determined by the Janus advisor Service.
            They are set by the AI service providers that power the
            application's advanced language models and algorithms. These
            providers establish token prices based on various factors, such as
            the complexity and capacity of the AI models, computational
            resources required, and market demand for AI services.
          </p>
        </Panel>
        <Panel
          header="Q: Can I monitor my token usage within the Climate Finance Co-pilot?  "
          key="28 "
        >
          <p>
            A: Yes, you can monitor your token usage within the CFC application
            by selectin the Usage Tracker Dashboard. This allows you to keep
            track of your remaining tokens and plan your project activities
            accordingly.
          </p>
        </Panel>
        <Panel
          header="Q: Do unused tokens roll over to the next billing period?  "
          key="29 "
        >
          <p>
            A: The rollover policy for unused tokens depends on the specific
            terms of your subscription plan. Some plans may allow unused tokens
            to roll over to the next billing period, while others may not. Be
            sure to review the details of your plan to understand how unused
            tokens are handled.
          </p>
        </Panel>
        <Panel
          header="Q: How can I upgrade my plan to access more tokens?  "
          key="30 "
        >
          <p>
            A: To upgrade your plan and access more tokens, you can navigate to
            the account settings or billing section at the top right corner of
            the interface.
          </p>
        </Panel>
        <h3>Billing and payment and alternate payment options</h3>
        <Panel
          header=" Q: How do I set up billing for my Climate Finance Co-pilot subscription? "
          key="31 "
        >
          <p>
            A: To set up billing for your subscription, navigate to the account
            settings or billing section within the application and you will be
            prompted to enter your payment information to complete the
            subscription process. You will receive an email receipt confirming
            your payment.
          </p>
        </Panel>
        <Panel
          header=" Q: What payment methods does your company accept? "
          key="32 "
        >
          <p>
            A: Janus Advisory Services accepts all major credit cards via online
            modes, including Visa, MasterCard, American Express, and Discover.
            The platform is also PayPal-enabled, offering a secure and
            convenient payment option.
          </p>
        </Panel>
        <Panel
          header=" Q: Can I arrange for an alternate payment method if I cannot use a credit card or PayPal? "
          key="33 "
        >
          <p>
            A: Yes, we can arrange alternate payment options for customers who
            are unable to use credit cards or PayPal. Please contact the
            customer support team to discuss available options and to find a
            suitable solution for your payment needs.
          </p>
        </Panel>
        <Panel
          header=" Q: What is the company's refund policy for monthly subscribers? "
          key="34 "
        >
          <p>
            A: The company has a no-refund policy for monthly subscribers,
            except in cases where technical issues attributed to the web
            application can be substantiated. If you experience technical issues
            that prevent you from using the application effectively, please
            contact the customer support team to report the problem and seek
            assistance.
          </p>
        </Panel>
        <h3>Data Protection and Privacy </h3>
        <Panel
          header=" Q: What measures does the company take to protect my data? "
          key="35 "
        >
          <p>
            A: Janus Advisory Service adheres to a rigorous data protection
            policy to ensure the security and confidentiality of your
            information. Some of the key measures in place include:
          </p>
          <p>
            1. Encryption: All data transmitted between your device and the
            Climate Finance Co-pilot servers is encrypted using
            industry-standard security protocols to protect it from unauthorized
            access.
          </p>
          <p>
            2. Access controls: The platform employs strict access controls to
            ensure that only authorized personnel can access your data. This
            includes the use of strong passwords, multi-factor authentication,
            and role-based access management.
          </p>
          <p>
            3. Regular security testing: The company performs regular security
            testing, including vulnerability scans and penetration tests, to
            identify and patch any potential weaknesses in the system.
          </p>
          <p>
            4. Compliance with data protection regulations: The CFC application
            complies with applicable data protection laws and regulations, such
            as the General Data Protection Regulation (GDPR), to ensure your
            data is handled in a lawful and transparent manner.
          </p>
          <p>
            5. Data retention and deletion: The company maintains a clear data
            retention policy, ensuring that your data is only stored for as long
            as necessary and is securely deleted when no longer required.
          </p>
          <p></p>
        </Panel>
        <Panel
          header=" Q: Can I request a copy of my data or have it deleted from the Climate Finance Co-pilot servers? "
          key="36 "
        >
          <p>
            A: Yes, as part of the company's commitment to data protection and
            compliance with relevant regulations, you can request a copy of your
            data or have it deleted from the Climate Finance Co-pilot servers.
            To do so, please contact the customer support team, who will guide
            you through the process and ensure your request is handled in a
            timely and efficient manner.
          </p>
        </Panel>
        <Panel
          header=" Q: How can I learn more about the company's data protection practices? "
          key="37 "
        >
          <p>
            A: To learn more about the company's data protection practices, you
            can review the Privacy Policy and Terms of Service available on the
            CFC website. These documents provide detailed information about how
            the company collects, processes, and protects your data.
            Additionally, if you have any specific questions or concerns, you
            can contact the customer support team for further assistance.
          </p>
        </Panel>
      </Collapse>
      </div>
    </div>
  );
});

export default memo(Faqs);
