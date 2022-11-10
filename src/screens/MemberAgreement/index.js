import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../services';
export default function MemberAgreement() {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>
            Weight Loss On Demand Professionals Member Services Agreement
          </Text>
          <View style={styles.paddingTop}>
            <Text style={[styles.bold, styles.textColor]}>
              Effective Date: <Text style={styles.regular}>April 15, 2022</Text>
            </Text>
          </View>
          <View style={[styles.paddingTop, styles.top3]}>
            <Text style={[styles.bold, styles.textColor]}>
              By using the Weight Loss On Demand by Included Health website,
              mobile application, or any of the products and services that link
              to this page (the "Services"), you agree to abide by and consent
              to its terms, and affirm all authorizations made below. Further,
              you certify that if you are using the Services as a personal
              representative of the Member, you have legal authority to provide
              consent for the treatment of the Member.
            </Text>
          </View>
          <View style={[styles.paddingTop, styles.top3]}>
            <Text style={[styles.bold, styles.textColor]}>
              By using the Services and where applicable, you further certify
              that you have legal authority to act as quardian or personal
              representative of all children registered under your Account and
              you consent to the treatment of all minors registered under your
              Account, including the prescribing of medication.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Description of Services</Text>
          </View>
          <View style={styles.paddingTop2}>
            <Text style={styles.textColor}>
              When you become a patient of Weight Loss On Demand Professionals
              (a "<Text style={styles.bold}>Member</Text>"), you can use our
              mobile and web applications ("
              <Text style={styles.bold}>Included Health App</Text>") accessible
              from your smartphone, desktop, or tablet computer that connects
              you to our engaged healthcare professionals("
              <Text style={styles.bold}>Healthcare Professionals</Text>") and
              support team. Through the Included Health App, we provide
              personalized content and interactive resources for you, simple
              tools for scheduling appointments and billing, serves as your hub
              of information, and connects you to our support team.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              The Healthcare Professionals practice within a aroup of
              independently owned professional practices collectively known as "{' '}
              <Text style={styles.bold}>
                Weight Loss On Demand Professionals
              </Text>
              " ("<Text style={styles.bold}>us"</Text> "
              <Text style={styles.bold}>we"</Text> "
              <Text style={styles.bold}>our</Text>"). Weight Loss On Demand
              Professionals is associated with but operates independently of
              Included Health, Inc. ("Included Health"). Included Health does
              not exercise control or direction over the means, methods or
              manner by which Weight Loss On Demand Professionals or the
              Healthcare Professionals' exercise professional judgment in the
              provision of clinical services provided. The Healthcare Providers
              provide services based on their sole professional judgment. Please
              refer to the Weight Loss On Demand Professionals{' '}
              <Text style={styles.link}>Notice of Privacy Practices</Text> to
              learn more about these groups and how they're organized.
            </Text>
          </View>
          <View style={[styles.paddingRight]}>
            <Text style={styles.textColor}>
              We provide healthcare services using interactive audio, video, and
              messaging technologies through the Included Health App including
              urgent care, therapy, psychiatry, and depending on benefits
              covered by your health plan, primary care services, through the
              Included Health Application. As part of providing you these
              services, Healthcare Professionals may order labs, imaging and
              other diagnostic tests conducted at locations outside Weight Loss
              On Demand Professionals such as clinical laboratories and testing
              centers, which may incur additional cost to you or your health
              plan. They may also rely on information you share or records you
              provide from your other healthcare providers.
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              Weight Loss On Demand Professionals also provide non-clinical
              wellness related services through the use of life skills Coaches.
              Coaches do not provide professional or clinical services but may
              exchange information with or provide support to Healthcare
              Professionals. You will have an opportunity to develop ongoing
              care relationships with our Healthcare Professionals, however,
              your initial encounter may begin as a consultation (e.g., to
              determine the most appropriate treatment setting for you to
              receive care) and will not necessarily give rise to an ongoing
              treatment relationship. For example, a Healthcare Professional may
              determine that our clinical services are not appropriate for some,
              or all of your treatment needs and may elect not to provide
              certain clinical services to you through the Included Health App.
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              If you need to receive follow-up care, assistance in the event of
              an adverse reaction to the treatment, or in the event of an
              inability to communicate as a result of a technological or
              equipment failure, please contact us at 1-800-997-6196.{' '}
              <Text style={styles.bold}>
                If you believe you are experiencing a medical emergency, you
                should dial 9-1-1 and/or go to the nearest urgent care center or
                emergency room.
              </Text>{' '}
              We do not address medical emergencies. You should seek emergency
              help or follow-up care when recommended by a Healthcare
              Professional or when otherwise needed and continue to consult with
              your other healthcare providers as recommended.
            </Text>
          </View>
          <View style={[styles.paddingRight]}>
            <Text style={styles.textColor}>
              With respect to psychotherapy, you are entitled to receive
              information from your Healthcare Professional about the methods of
              therapy, the techniques used, the duration of your therapy (if
              known), and the fee structure. You can seek a second opinion from
              another therapist or terminate therapy at any time.
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              Your Healthcare Professional reserves the right to deny care for
              potential misuse of the services or for any other reason if, in
              the professional judgment of your Healthcare Professional, the
              provision of the Services is not medically or ethically
              appropriate. If you repeatedly miss scheduled appointments, we are
              unable to contact you for a period of time, or you fail to pay for
              appointments with us, you understand that you may be terminated
              from our practice and no longer have access to our Healthcare
              Professionals.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>
              Description of Telehealth Risks
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              Among the benefits of our services are improved access to
              healthcare and convenience. However, as with any health service,
              there are potential risks associated with the use of technology.
            </Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              These risks include, but may not be limited to:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              In rare cases, information transmitted may be insufficient for
              healthcare decision making.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Disruptions can occur due to failures of the electronic equipment
              or internet connection, which could delay care. If this happens,
              you may be contacted by phone or other means of communication in
              order to reschedule your appointment or direct you to in person
              care.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              In rare cases a lack of access to all of your health records may
              result in adverse drug interactions or other errors.
            </Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              Although we incorporate strong security protocols to protect the
              confidentiality of your health information, in rare instances
              security protocols can fail, causing a breach of confidentiality
              and privacy of personal medical records.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Payment and Billing Practices</Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.textColor}>
              Each bill for all charges must be paid by the date shown on the
              bill. Your insurance may cover some or all of our services You
              understand that if your health insurance coverage does not pay the
              charges for your services in full, you may be fully or partially
              responsible for payment. If you have to pay a deductible,
              copayment or coinsurance for your healthcare, the usual
              cost-sharing rules will apply. If you request, we will work with
              you to determine what your charges will be. By providing us with
              your credit card information, you understand that you are
              authorizing us to charge your credit card for agreed upon
              purchases and save your credit card information for future
              transactions on your account.
            </Text>
            <View>
              <Text style={styles.textColor}>
                You agree that all people or companies (third parties) who pay
                any part of your Weight Loss On Demand Professionals bill shall
                pay these amounts directly to Weight Loss On Demand
                Professionals. You understand that you must pay Weight Loss On
                Demand Professionals any costs not paid by your insurance or
                other third parties, unless state or federal regulations do not
                allow this.
              </Text>
            </View>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Privacy & Communications</Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.heading}>Privacy </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              For information about our use and disclosure of your health
              information and other personal information and the rights you have
              regarding such information, please refer to our{' '}
              <Text style={styles.link}>Notice of Privacy Practices</Text>{' '}
              ("NPP") and Weight Loss On Demand{' '}
              <Text style={styles.link}>Privacy Policy.</Text> By using our
              services, you acknowledge receipt of the NPP.
            </Text>
          </View>
          <View style={[styles.top]}>
            <Text style={styles.subHeading}>Short Message Service or SMS</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              Included Health or its affiliates may contact you by short message
              service ("SMS") text message from time to time regarding your
              account or the Services to provide appointment reminders, service
              announcements, privacy notices, administrative messages and other
              communications about the Services ("SMS Communications"). These
              SMS Communications are considered part of the Services and your
              account.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              By agreeing to these Terms and providing your telephone number to
              us or our affiliates, you: (i) consent to receive SMS
              Communications from or on behalf of us or any of its affiliates at
              the telephone number you provide; and (il) acknowledge and agree
              that your information may be processed in accordance with, and you
              are to be bound by, Included Health's
              <Text style={styles.link}> Privacy Policy,</Text> and Weight Loss
              On Demand's <Text style={styles.link}>Privacy Policy.</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You can stop receiving SMS Communications from Included Health at
              any time by texting "STOp" to the number from which you receive
              the SMS Communications. Alternatively, if you are registered, you
              may click <Text style={styles.link}>here</Text> to contact support
              or submit a message through the "chat" experience once logged-in.
              You may also call Included Health's general support toll free line
              at (855) 431-5533. If you send the message "STOP" to Included
              Health, Included Health will send you a reply message to confirm
              that you have been unsubscribed from SMS Communications. After
              this, you will no longer receive SMS Communications from Included
              Health. You agree that if you request to opt out from future SMS
              Communications, Included Health may send you a one-time opt-out
              confirmation SMS text message. After this, YOu will no longer
              receive SMS Communications from Included Health.
            </Text>
          </View>
          <View style={styles.paddingRight}>
            <Text style={styles.textColor}>
              For support: See above for instructions on calling Included Health
              or text HELP in response to an SMS on your device. If you send
              Included Health a SMS text message, Included Health will reply
              with instructions on how to receive SMS Communications as well as
              how to unsubscribe from SMS Communications; if you call Included
              Health's toll-free number, Included Health will provide this
              information over the phone. The number of SMS text messages We
              send as Communications will depend on the frequency of your use of
              the Services. Included Health's SMS Communications program may not
              be available on all wireless carriers. Standard carrier message
              and data rates apply.
            </Text>
          </View>
          <View>
            <Text style={styles.subHeading}>Other Communications</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You agree that we or Included Health on our behalf may send to you
              additional communications through electronic means including, but
              not limited to, (1) by email, using the address that you provided
              to us during registration, (2) push notifications on your tablet
              or mobile device, or (3) by posting communications on the Sites
              (collectively, " <Text style={styles.bold}>Communications</Text>
              ").
            </Text>
          </View>
          <View style={styles.paddingRight}>
            <Text style={styles.textColor}>
              The delivery of any SMS or other Communications from us is
              effective when sent by us, regardless of whether you read the SMS
              or other Communication. You can withdraw your consent to receive
              Communications by deactivating your Account, or as otherwise
              specified and provided.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              You acknowledge that text messages and emails are not always
              secure and there is a risk that such messages and emails will be
              intercepted because they travel over networks that we do not
              control. As such, we cannot quarantee the security or
              confidentiality of messages sent by text messages or email. By
              providing us with your cell phone number and email address, you
              agree that we may communicate with you by text message and email,
              despite these risks.
            </Text>
          </View>
          <View>
            <Text style={styles.subHeading}>Group Therapy</Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              If you and a Healthcare Professional decide to engage in group or
              couples therapy (collectively "Group Therapy"), you understand
              that information discussed in Group Therapy is for therapeutic
              purposes and is not intended for use in any legal proceedings
              involving Group Therapy participants. You agree not to subpoena
              the Healthcare Professional to testify for or against other Group
              Therapy participants or provide records in court actions against
              other Group Therapy participants. You understand that anything any
              Group Therapy participant tells the Healthcare Professional
              individually, whether on the phone or otherwise, may at the
              therapist's discretion be shared with the other Group Therapy
              participants. You agree to share responsibility with the
              Healthcare Professional for the therapy process, including goal
              setting and termination.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.subHeading}>
              Additional State-Specific Notifications:
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              <Text style={styles.underline}>Texas</Text>: You have been
              informed of the following notice:
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              NOTICE CONCERNING COMPLAINTS. Complaints about physicians, as well
              as other licensees and registrants of the Texas Medical Board,
              including physician assistants, acupuncturists, and surgical
              assistants may be reported for investigation at the following
              address: Texas Medical Board, Attention: Investigations, 333
              Guadalupe, Tower 3 Suite 610, PO. Box 2018, MC-263, Austin, Texas
              78768-2018, Assistance in filing a complaint is available by
              calling the following telephone number: 1-800-201- 9353, For more
              information, please visit our website at{' '}
              <Text style={styles.link}> www.tmb.state.tx.us.</Text>
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              AVISO SOBRE LAS QUEJAS- Las quejas sobre médicos, asi como sobre
              otros profesionales acreditados e inscritos del Consejo Médico de
              Tejas, incluyendo asistentes de médicos, practicantes de
              acupuntura y asistentes de cirugia, se pueden presentar en la
              siguiente dirección para ser investigadas: Texas Medical Board
              Attention: Investigations, 333 Guadalupe, Tower 3, Suite 610, PO.
              Box 2018, MC-263, Austin, Texas 78768-2018, Si necesita ayuda para
              presentar una queja, lame al: 1- 800-201-9353, Para obtener más
              información, visite nuestro sitio web en
              <Text style={styles.link}> http://www.tmb.state.tx.us</Text>
            </Text>
          </View>

          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              <Text style={[styles.underline, styles.bold]}>Questions</Text>: If
              you have questions or concerns about these Terms, see the below
              contact options:
            </Text>
          </View>
          <View style={[styles.row, styles.top]}>
            <Entypo name="dot-single" color={colors.primary} size={25} />
            <Text style={[styles.textColor, styles.right]}>
              You may contact us by mail at:
            </Text>
          </View>
          <Text style={[styles.textColor, styles.left, styles.top2]}>
            Included Health, Inc.
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top]}>
            14208 S. Crater Lake Court,
          </Text>
          <Text style={[styles.textColor, styles.left, styles.top3]}>
            suite 300 The Woodlands, 77384
          </Text>
        </View>
        <View style={[styles.row, styles.top]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.text, styles.right]}>
            You may email us at{' '}
            <Text style={styles.link}>support@weightlossondemand.com</Text>
          </Text>
        </View>
        <View style={[styles.row]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.text, styles.right]}>
            If you are registered, you may submit a message through the "chat"
            experience once logged-in.
          </Text>
        </View>
        <View style={[styles.row, styles.paddingBottom2]}>
          <Entypo name="dot-single" color={colors.primary} size={25} />
          <Text style={[styles.text, styles.right]}>
            Or you may call our general support toll free line at (281)3250066
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
