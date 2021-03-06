import React, { useEffect } from 'react';
import 'assets/styles/pages/legal/legal.scss';

export default function Privacy() {

	useEffect(() => {
		window.scroll(0,0)
	}, [])

  	return (
		<div id="legal">
			<div id="legal-header">
				<h1 id="legal-header-title">Privacy Policy</h1>
				<p id="legal-header-subtitle">Effective date: February 02, 2019</p>
			</div>
			<div className="legal-paragraph">
				<p className="legal-paragraph-body">Melms Media LLC ("us", "we", or "our") operates the https://www.dankmemer.lol website (hereinafter referred to as the "Service").</p>
				<p className="legal-paragraph-body">This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
				<p className="legal-paragraph-body">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://www.dankmemer.lol</p>
			</div>
			<div className="legal-paragraph">		
				<h2 className="legal-paragraph-title">Definitions</h2>
				<ul className="legal-paragraph-list">
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Service</strong></p>
						<p className="legal-paragraph-list-item-text">Service is the https://www.dankmemer.lol website operated by Melms Media LLC</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Personal Data</strong></p>
						<p className="legal-paragraph-list-item-text">Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Usage Data</strong></p>
						<p className="legal-paragraph-list-item-text">Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Cookies</strong></p>
						<p className="legal-paragraph-list-item-text">Cookies are small files stored on your device (computer or mobile device).</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Data Controller</strong></p>
						<p className="legal-paragraph-list-item-text">Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p>
						<p className="legal-paragraph-list-item-text">For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Data Processors (or Service Providers)</strong></p>
						<p className="legal-paragraph-list-item-text">Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller.</p>
						<p className="legal-paragraph-list-item-text">We may use the services of various Service Providers in order to process your data more effectively.</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-list-item-text"><strong>Data Subject (or User)</strong></p>
						<p className="legal-paragraph-list-item-text">Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
					</li>
				</ul>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Information Collection and Use</h2>
				<p className="legal-paragraph-body">
					We collect several different types of information for various purposes to provide and improve our Service to you.
				</p>
			</div> 
			<div className="legal-paragraph">
				<h3>Types of Data Collected</h3>
				<div className="legal-subparagraph">
					<h4>Personal Data</h4>
					<p className="legal-paragraph-body">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>		
					<ul className="legal-paragraph-list">
						<li className="legal-paragraph-list-item">
							<p className="legal-paragraph-list-item-text">Email address</p>
						</li>
						<li className="legal-paragraph-list-item">
							<p className="legal-paragraph-list-item-text">Your IP Address</p>
						</li>
						<li className="legal-paragraph-list-item">
							<p className="legal-paragraph-list-item-text">Cookies and Usage Data</p>
						</li>
					</ul>
					<p className="legal-paragraph-body">We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by contacting us.</p>
				</div>
				<div className="legal-subparagraph">
					<h4>Usage Data</h4>
					<p className="legal-paragraph-body">We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. This is all stored by google, and not us. We may use email addresses in the future, only to send registered users emails about our service.</p>
				</div>
				<div className="legal-subparagraph">
					<h4>Tracking &amp; Cookies Data</h4>
					<p className="legal-paragraph-body">
						We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
					</p>
					<p className="legal-paragraph-body">
						Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your
						browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts
						to collect and track information and to improve and analyse our Service.
					</p>
					<p className="legal-paragraph-body">
						You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept
						cookies, you may not be able to use some portions of our Service.
					</p>
					<p className="legal-paragraph-body">Examples of Cookies we use:</p>
					<ul className="legal-paragraph-list">
						<li className="legal-paragraph-list-item">
							<strong>Session Cookies.</strong> 
							We use Session Cookies to keep you logged in to Discord on our site. We also use Google Analytics, which uses cookies for
							general statistical data to help us learn and grow about how to make a better user experience.
						</li>
					</ul>
				</div>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Use of Data</h2> 
				<p className="legal-paragraph-body">Melms Media LLC uses the collected data for various purposes:</p>
				<ul className="legal-paragraph-list">
					<li className="legal-paragraph-list-item">To provide and maintain our Service</li>
					<li className="legal-paragraph-list-item">To notify you about changes to our Service</li>
					<li className="legal-paragraph-list-item">To allow you to participate in interactive features of our Service when you choose to do so</li>
					<li className="legal-paragraph-list-item">To provide customer support</li>
					<li className="legal-paragraph-list-item">To gather analysis or valuable information so that we can improve our Service</li>
					<li className="legal-paragraph-list-item">To monitor the usage of our Service</li>
					<li className="legal-paragraph-list-item">To detect, prevent and address technical issues</li>
					<li className="legal-paragraph-list-item">To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
				</ul>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)</h2>
				<p className="legal-paragraph-body">If you are from the European Economic Area (EEA), Melms Media LLC legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.</p>
				<p className="legal-paragraph-body">Melms Media LLC may process your Personal Data because:</p>
					<ul className="legal-paragraph-list">
					<li className="legal-paragraph-list-item">We need to perform a contract with you</li>
					<li className="legal-paragraph-list-item">You have given us permission to do so</li>
					<li className="legal-paragraph-list-item">The processing is in our legitimate interests and it is not overridden by your rights</li>
					<li className="legal-paragraph-list-item">For payment processing purposes</li>
					<li className="legal-paragraph-list-item">To comply with the law</li>
				</ul>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Retention of Data</h2>
				<p className="legal-paragraph-body">Melms Media LLC will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
				<p className="legal-paragraph-body">Melms Media LLC will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Transfer of Data</h2>
				<p className="legal-paragraph-body">Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
				<p className="legal-paragraph-body">If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
				<p className="legal-paragraph-body">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
				<p className="legal-paragraph-body">Melms Media LLC will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Disclosure of Data</h2>
				<div className="legal-subparagraph">
					<h3>Legal Requirements</h3>
					<p className="legal-paragraph-body">Melms Media LLC may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
					<ul className="legal-paragraph-list">
						<li className="legal-paragraph-list-item">To comply with a legal obligation</li>
						<li className="legal-paragraph-list-item">To protect and defend the rights or property of Melms Media LLC</li>
						<li className="legal-paragraph-list-item">To prevent or investigate possible wrongdoing in connection with the Service</li>
						<li className="legal-paragraph-list-item">To protect the personal safety of users of the Service or the public</li>
						<li className="legal-paragraph-list-item">To protect against legal liability</li>
					</ul>					
				</div>				
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Security of Data</h2>
				<p className="legal-paragraph-body">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Your Data Protection Rights under the General Data Protection Regulation (GDPR)</h2>
				<p className="legal-paragraph-body">
					If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Melms Media LLC aims to
					take reasonable steps to allow you to correct, amend, delete or limit the use of your Personal Data.
				</p>
				<p className="legal-paragraph-body">
					If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please
					contact us.
				</p>
				<p className="legal-paragraph-body">In certain circumstances, you have the following data protection rights:</p>
				<ul className="legal-paragraph-list">
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-body">
							<strong>The right to access, update or delete the information we have on you.</strong>
							Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
						</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-body">
							<strong>The right of rectification.</strong>
							You have the right to have your information rectified if that information is inaccurate or incomplete.
						</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-body">
							<strong>The right to object.</strong>
							You have the right to object to our processing of your Personal Data.
						</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-body">
							<strong>The right of restriction.</strong>
							You have the right to request that we restrict the processing of your personal information.
						</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-body">
							<strong>The right to data portability.</strong>
							You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.
						</p>
					</li>
					<li className="legal-paragraph-list-item">
						<p className="legal-paragraph-body">
							<strong>The right to withdraw consent.</strong>
							You also have the right to withdraw your consent at any time where Melms Media LLC relied on your consent to
							process your personal information.
						</p>
					</li>
				</ul>
				<p className="legal-paragraph-body">
					Please note that we may ask you to verify your identity before responding to such requests.
				</p>
				<p className="legal-paragraph-body">
					You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data.
					For more information, please contact your local data protection authority in the European Economic Area (EEA).
				</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Service Providers</h2>
				<p className="legal-paragraph-body">
					We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on
					our behalf, perform Service-related services or assist us in analysing how our Service is used.
				</p>
				<p className="legal-paragraph-body">
					These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to
					disclose or use it for any other purpose.
				</p>
				<div className="legal-subparagraph">
					<h3>Analytics</h3>
					<p className="legal-paragraph-body">We may use third-party Service Providers to monitor and analyse the use of our Service.</p>
					<ul className="legal-paragraph-list">
						<li className="legal-paragraph-list-item">
							<p className="legal-paragraph-body"><strong>Google Analytics</strong></p>
							<p className="legal-paragraph-body">Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualise and personalise the ads of its own advertising network.</p>
							<p className="legal-paragraph-body">You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p><p className="legal-paragraph-body">For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
						</li>
					</ul>					
				</div>
				<div className="legal-subparagraph">
					<h3>Advertising</h3>
					<p className="legal-paragraph-body">We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.</p>
					<ul className="legal-paragraph-list">
						<li className="legal-paragraph-list-item">
							<p className="legal-paragraph-body"><strong>Google AdSense &amp; DoubleClick Cookie</strong></p>
							<p className="legal-paragraph-body">Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.</p>
							<p className="legal-paragraph-body">You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: <a href="http://www.google.com/ads/preferences/">http://www.google.com/ads/preferences/</a></p>
						</li>
					</ul>
				</div>
				<div className="legal-subparagraph">
					<h3>Payments</h3>
					<p className="legal-paragraph-body">
						We may provide paid products and/or services within the Service. In that case, we use third-party services for payment
						processing (e.g. payment processors).
					</p>
					<p className="legal-paragraph-body">
						We will not store or collect your payment card details. That information is provided directly to our third-party payment
						processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to
						the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa,
						MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
					</p>
					<p className="legal-paragraph-body">The payment processors we work with are:</p>
						<ul className="legal-paragraph-list">
						<li className="legal-paragraph-list-item">
							<p className="legal-paragraph-body"><strong>PayPal / Braintree</strong></p>
							<p className="legal-paragraph-body">Their Privacy Policy can be viewed at <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full">https://www.paypal.com/webapps/mpp/ua/privacy-full</a></p>
						</li>
					</ul>				
				</div>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Links to Other Sites</h2>
				<p className="legal-paragraph-body">Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
				<p className="legal-paragraph-body">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Children's Privacy</h2>
				<p className="legal-paragraph-body">Our Service does not address anyone under the age of 13 ("Children").</p>
				<p className="legal-paragraph-body">We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Changes to This Privacy Policy</h2>
				<p className="legal-paragraph-body">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
				<p className="legal-paragraph-body">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
				<p className="legal-paragraph-body">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
			</div>
			<div className="legal-paragraph">
				<h2 className="legal-paragraph-title">Contact us</h2>
				<p className="legal-paragraph-body">
					If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:admin@dankmemer.gg">admin@dankmemer.gg</a>.
				</p>
			</div>
			<span data-ccpa-link="1"></span>
		</div>
  	)
}