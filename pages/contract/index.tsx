import Head from 'next/head'
import { useState } from 'react'
import Heading from '../../components/Heading'
import Page from '../../components/Page'

export default function Home() {
  const [customerName, setCustomerName] = useState('[custom name]')
  const [companyName, setCompanyName] = useState('[company name]')
  const [total, setTotal] = useState('[total]')
  const [paymentDetails, setPaymentDetails] = useState('[Payment details]')
  const [paymentSchedule, setPaymentSchedule] = useState('[Payment schedule]')
  const [date, setDate] = useState('[date]')

  return (
    <Page>
      <div className="w-full relative lg:w-2/5 flex-col flex justify-center lg:h-screen space-y-2">
        <div className="lg:fixed p-20 lg:pr-0 w-full lg:w-2/5">
          <Heading>The<br />Contract</Heading>
        </div>
      </div>
      <div className="w-full lg:w-3/5 p-7 space-y-4 flex flex-col text-gray-200">
        <p>
          <strong>Between</strong> Thomas Albrighton <br />
          <strong>And</strong> [customer name]
        </p>
        <Heading size={2}>Summary:</Heading>
        <p>We’ll always do our best to fulfil your needs and meet your expectations, but it’s important to have things written down so that we both know what’s what, who should do what and when, and what will happen if something goes wrong. In this contract you won’t find any complicated legal terms or long passages of unreadable text. We’ve no desire to trick you into signing something that you might later regret. What we do want is what’s best for both parties, now and in the future.</p>

        <Heading size={4}>So in short;</Heading>
        <p>You <strong>{customerName}</strong>, located at <strong>{companyName}</strong> are hiring <strong>Thomas Albrighton</strong> (“We or Us or Me”) to:</p>
        <ul>
          <li>- [Design and develop a web site]</li>
        </ul>

        <p>For the estimated total price of ${total} as outlined in our previous correspondence. Of course it’s a little more complicated, but we’ll get to that.</p>

        <Heading size={3}>What do both parties agree to?</Heading>
        <p><strong>You</strong>: You have the authority to enter into this contract on behalf of yourself, your company or your organisation. You’ll give us the assets and information we tell you we need to complete the project. You’ll do this when we ask and provide it in the formats we ask for. You’ll review our work, provide feedback and approval in a timely manner too. Deadlines work two ways, so you’ll also be bound by dates we set together. You also agree to stick to the payment schedule set out at the end of this contract.</p>
        <p><strong>Us</strong>: We have the experience and ability to do everything we’ve agreed with you and we’ll do it all in a professional and timely manner. We’ll endeavour to meet every deadline that’s set and on top of that we'll maintain the confidentiality of everything you give us. </p>

        <hr className="bg-gradient-to-r from-orange-500 to-yellow-400 h-1 border-none"/>

        <Heading size={2}>Getting down to the nitty gritty</Heading>
        <Heading size={3}>Design</Heading>
        <p>We create designs that adapt to the capabilities of many devices and screen sizes. We create them iteratively and use predominantly HTML and CSS so we won’t waste time mocking up every template as a static visual. We may use visuals to indicate a creative direction (colour, texture and typography.) We call that ‘atmosphere.’</p>
        <p>You’ll have plenty of opportunities to review our work and provide feedback. We’ll either share a Dropbox, Google Drive folder or Github repository or development site with you and we’ll have regular, possibly daily contact by either phone, Skype, or Slack. If—at any stage—you change your mind about what you want delivered or aren’t happy with the direction our work is taking, you’ll pay us in full for the time we’ve spent working until that point and may terminate this contract.</p>

        <Heading size={3}>Text content</Heading>
        <p>Unless agreed separately, we’re not responsible for inputting text or images into your content management system or creating every page on your website. We provide professional copywriting and editing services, so if you’d like us to create new content or input content for you, we’ll provide a separate estimate.</p>

        <Heading size={3}>Graphics and photographs</Heading>
        <p>You should supply graphic files in an editable, vector digital format. You should supply photographs in a high resolution digital format. If you choose to buy stock photographs, we can suggest stock libraries. If you’d like us to search for photographs for you, we can provide a separate estimate.</p>

        <Heading size={3}>HTML, CSS and JavaScript</Heading>
        <p>We deliver pages developed from HTML markup, CSS stylesheets for styling and unobtrusive JavaScript for behaviours.</p>

        <Heading size={3}>Browser testing</Heading>
        <p>Browser testing no longer means attempting to make a website look the same in browsers of different capabilities or on devices with different size screens. It does mean ensuring that a person’s experience of a design should be appropriate to the capabilities of a browser or device.</p>
        <p>We test our work in current versions of major desktop browsers including those made by Apple (Safari), Google (Chrome), Microsoft (Edge), Mozilla Firefox and Opera. We won’t test in other older browsers unless we agreed separately. If you need an enhanced design for an older browser, we can provide a separate estimate for that.</p>

        <Heading size={3}>Mobile browser testing</Heading>
        <p>Testing using popular smaller screen devices is essential in ensuring that a person’s experience of a design is appropriate to the capabilities of the device they’re using. We test our designs in:</p>
        <ul>
          <li><strong>iOS</strong>: Safari and Google Chrome</li>
          <li><strong>Android</strong>: Google Chrome</li>
        </ul>
        <p>We won’t test in Opera Mini/Mobile, specific Android devices, or other mobile browsers unless we agreed separately. If you need us to test using these, we can provide a separate estimate.</p>

        <Heading size={3}>Technical support</Heading>
        <p>We’re not a website hosting company so we don’t offer support for website hosting, email or other services relating to hosting. You may already have professional hosting and you might even manage that hosting in-house; if you do, great. If you don’t, we will recommend one of our preferred hosting providers. We can set up your site on a server, plus any statistics software such as Google Analytics and will provide a separate estimate for that. Then, the updates to, and management of that server will be up to you.</p>

        <Heading size={3}>Search engine optimisation (SEO)</Heading>
        <p>We don’t guarantee improvements to your website’s search engine ranking, but the pages that we develop are accessible to search engines.</p>

        <Heading size={3}>Changes and revisions</Heading>
        <p>We don’t want to limit your ability to change your mind. The price at the beginning of this contract is based on the number of weeks that we estimate we’ll need to accomplish everything you’ve told us you want to achieve, but we’re happy to be flexible. If you want to change your mind or add anything new, that won’t be a problem as we’ll provide a separate estimate for those additional weeks.</p>

        <Heading size={3}>Legal stuff</Heading>
        <p>We’ll carry out our work in accordance with good industry practice and at the standard expected from a suitably qualified person with relevant experience. That said, we can’t guarantee that our work will be error-free and so we can’t be liable to you or any third-party for damages, including lost profits, lost savings or other incidental, consequential or special damages, even if you’ve advised us of them.</p>
        <p>Your liability to us will also be limited to the amount of fees payable under this contract and you won’t be liable to us or any third-party for damages, including lost profits, lost savings or other incidental, consequential or special damages, even if we’ve advised you of them.</p>
        <p>Finally, if any provision of this contract shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this contract and shall not affect the validity and enforceability of any remaining provisions.</p>

        <p>Phew.</p>

        <Heading size={3}>Intellectual property rights</Heading>
        <p>Just to be clear, “Intellectual property rights” means all patents, rights to inventions, copyright (including rights in software) and related rights, trademarks, service marks, get up and trade names, internet domain names, rights to goodwill or to sue for passing off, rights in designs, database rights, rights in confidential information (including know-how) and any other intellectual property rights, in each case whether registered or unregistered and including all applications (or rights to apply) for, and renewals or extensions of, such rights and all similar or equivalent rights or forms of protection which subsist or shall subsist now or in the future in any part of the world.</p>

        <p>Blimey.</p>

        <p>First, you guarantee that all elements of text, images or other artwork you provide are either owned by your good selves, or that you’ve permission to use them. When you provide text, images or other artwork to us, you agree to protect us from any claim by a third party that we’re using their intellectual property.</p>

        <p>We guarantee that all elements of the work we deliver to you are either owned by us or we’ve obtained permission to provide them to you. When we provide text, images or other artwork to you, we agree to protect you from any claim by a third party that you’re using their intellectual property. Provided you’ve paid for the work and that this contract hasn’t been terminated, we’ll assign all intellectual property rights to you as follows:</p>

        <p>You’ll own the website we design for you plus the visual elements that we create for it. We’ll give you source files and finished files and you should keep them somewhere safe as we’re not required to keep a copy. You own all intellectual property rights of text, images, site specification and data you provided, unless someone else owns them.</p>

        <p>We’ll own any intellectual property rights we’ve developed prior to, or developed separately from this project and not paid for by you. We’ll own the unique combination of these elements that constitutes a complete design and we’ll license its use to you, exclusively and in perpetuity for this project only, unless we agree otherwise.</p>

        <Heading size={3}>Displaying our work</Heading>
        <p>We love to show off our work, so we reserve the right to display all aspects of our creative work, including sketches, work-in-progress designs and the completed project on our portfolio and in articles on websites, in magazine articles and in books.</p>

        <Heading size={3}>Payment schedule</Heading>
        <p>We’re sure you understand how important it is as a small business that you pay the invoices that we send you promptly. As we’re also sure you’ll want to stay friends, you agree to stick tight to the following payment schedule.</p>

        <p>
        <div>{paymentDetails}</div>
        <div>{paymentSchedule}</div>
        </p>

        <p>We issue invoices electronically. Our payment terms are 30 days from the date of invoice by BACS or the SWIFT international payments system. All proposals are quoted in Australian Dollars and payments will be made at the equivalent conversion rate at the date the transfer is made.</p>

        <p>You agree to pay all charges associated with international transfers of funds. The appropriate bank account details will be printed on our electronic invoice. We reserve the right to charge interest on all overdue debts at the rate of 5% per month or part of a month.</p>

        <Heading size={3}>But where’s all the horrible small print?</Heading>
        <p>Just like a parking ticket, neither of us can transfer this contract to anyone else without the other’s permission.</p>

        <p>We both agree that we’ll adhere to all relevant laws and regulations in relation to our activities under this contract and not cause the other to breach any relevant laws or regulations.</p>

        <p>This contract stays in place and need not be renewed. If for some reason one part of this contract becomes invalid or unenforceable, the remaining parts of it remain in place.</p>

        <p>Oh and don’t forget those men with big dogs.</p>

        <Heading size={3}>The dotted line</Heading>
        <p>Signed by and on behalf of Thomas Albrighton</p>
        <br /><br /> ……………………………………………………

        <p>Signed by and on behalf of {customerName}</p>
        <br /><br /> ……………………………………………………

        <p>Date {date}</p>
        <p>Everyone should sign above and keep a copy for their records.</p>
      </div>
    </Page>
  )
  }