import './Login.css';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ideate_logo from '../img/vectors/ideate_logo.png';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [forgotPassEmail, setForgotPassEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, showMessage] = useState(false);

	const homeroute = () => {
		let path = `/`;
		history.push(path);
	};

	return (
		<div className="login">
			<div className="login__logo">
				<img
					onClick={homeroute}
					src={ideate_logo}
					alt="The Ideate Project Logo"
				/>
			</div>

			<div class="login__slider">
				<div class="login__slidescontainer">
					<div className="slide-1" id="login">
						<h1>Sign in to your account</h1>
						<form>
							<h5>Email address</h5>
							<input
								required
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></input>

							<h5>Password</h5>
							<input
								required
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></input>
							<div className="slide-1__passrem">
								<div className="slide-1__rem">
									<input
										type="checkbox"
										className="form-check-input"
										id="rememberPassword"
										name="checkbox"
									/>
									<label
										className="form-check-label"
										for="rememberPassword"
									>
										Remember me
									</label>
								</div>
								<div className="slide-1__pass">
									<p>
										<a href="#forgotpassword">Forgot password?</a>
									</p>
								</div>
							</div>

							{message && (
								<p className="error">
									Oops! Email and password don't match.
								</p>
							)}

							<button type="submit" className="login__btn">
								Sign In
							</button>
						</form>

						<div className="slide-1__signup">
							<span className="slide-1__newUser">
								Don't have an account?{' '}
							</span>
							<Link to="/register">
								<span className="slide-1__registerBtn">
									Sign up to Ideate
								</span>
							</Link>
						</div>
					</div>
					<div className="slide-2" id="forgotpassword">
						<div className="slide-2__heading">
							<a href="#login">
								<i class="fas fa-arrow-left"></i>
							</a>
							<h1>Password Recovery</h1>
						</div>
						<p className="slide-2__text">
							Please provide the email account associated with your
							account to send you the link to restore your password.
						</p>
						<form>
							<h5>Email address</h5>
							<input
								required
								type="text"
								value={forgotPassEmail}
								onChange={(e) => setForgotPassEmail(e.target.value)}
							></input>
							<button type="submit" className="resetpass__btn">
								Reset Password
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="login__footer">
				<p>Copyright © 2021 Ideate Project. All rights reserved.</p>
			</div>

			<svg
				className="svg__one"
				width="12vw"
				height="15vh"
				viewBox="0 0 160 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.388596 1.15781C0.712341 -0.131633 0.340378 -0.0454414 -1.52588e-05 0.0464975V51.2312L1.02806 52.0621C1.63135 51.2708 1.42644 51.0565 1.85007 50.3922C2.29283 50.4016 2.73067 50.4871 3.14445 50.6451C3.49878 50.7852 3.82738 50.9833 4.11685 51.2312C4.69775 51.7156 5.11566 52.3161 5.51173 52.8522C4.32352 53.9899 3.90274 51.4001 2.73921 52.4626C3.03943 53.3573 3.52792 54.21 4.1358 54.9926C4.76378 55.7908 5.57658 56.5688 6.43532 57.248C7.36194 57.9697 8.34691 58.613 9.38004 59.1713C10.4199 59.7391 11.5014 60.227 12.6152 60.6308C12.9389 60.1263 12.5504 60.0165 12.4413 59.7717C13.1416 59.9894 13.8352 60.2283 14.521 60.4883C14.8745 60.621 15.2299 60.7601 15.5863 60.9049C15.8962 61.0335 16.2089 61.1643 16.5249 61.2964L16.6907 61.3657C17.4639 61.6983 18.2309 62.045 18.9914 62.4058L20.1894 62.9804L21.4275 63.5895C23.0457 64.4106 24.8728 65.3398 26.6563 66.2977C28.5511 67.2717 30.4333 68.2939 32.4504 69.3213C36.433 71.3733 40.532 73.3822 44.6219 75.2002C48.7095 77.0195 52.7885 78.6462 56.6884 79.9759C57.3473 79.7081 58.3777 79.6765 59.5774 79.7903C60.7823 79.888 62.1484 80.1581 63.4916 80.4798C66.1706 81.1418 68.7439 82.0819 69.5171 82.9783C72.2049 82.924 75.259 83.1498 78.5776 83.3951L78.8472 83.415L84.1735 83.8327L84.3843 83.8486C85.2418 83.9131 86.1112 83.9784 87.0109 84.0316L88.466 84.1246L89.9602 84.1993C93.9605 84.3918 98.2398 84.4407 102.593 84.1379C106.949 83.8327 111.378 83.1668 115.513 82.0399C116.485 81.7681 117.399 81.5348 118.311 81.2699L120.933 80.5172C122.64 79.9943 124.218 79.503 125.731 78.9341C127.228 78.3963 128.663 77.7613 130.003 77.0976C131.359 76.3926 132.652 75.6243 133.854 74.7279C132.97 74.9687 132.055 75.1916 131.135 75.4358L129.74 75.8001L128.342 76.1369C127.403 76.3644 126.449 76.6012 125.498 76.804C124.546 77.012 123.57 77.2459 122.609 77.4315C118.723 78.242 114.806 78.8912 110.867 79.3772C103.054 80.3385 95.5144 80.5499 89.0423 80.1707C88.993 77.8061 90.955 79.5823 91.8906 79.2151C92.3148 77.5826 90.0233 79.4754 90.4648 77.8377C93.4169 77.3895 97.3518 77.2108 101.492 76.9724C105.621 76.7477 109.964 76.4374 113.46 76.0696C112.88 73.9125 111.962 76.4713 111.135 74.4394C107.835 75.4956 104.39 75.9852 101.024 76.1001C97.6521 76.2167 94.3555 75.961 91.2334 75.5674C88.1107 75.1715 85.1499 74.6503 82.3923 74.205C80.9998 74.001 79.6457 73.7746 78.3122 73.6402C77.0193 73.4815 75.7196 73.3845 74.4175 73.3494C77.5396 72.9426 80.6312 72.8248 83.7522 72.7949C86.8714 72.7828 90.0945 72.9 93.4531 72.9857C96.8111 73.0701 100.308 73.1178 103.935 72.9397C107.558 72.7616 111.313 72.3542 115.099 71.529C120.737 70.3177 126.744 68.0279 132.288 65.0536C137.808 62.1329 142.634 58.6317 146.912 55.4115C147.79 54.7536 149.637 54.5749 150.428 53.7497C151.222 52.8798 150.872 51.1456 151.685 50.4888C151.994 50.2394 153.196 51.6294 153.159 51.6794C153.618 51.1329 152.196 50.3819 152.338 49.9647C152.629 49.0614 153.602 48.4104 154.58 47.6663L154.632 47.6268C155.556 46.9206 156.517 46.1856 156.903 45.208C156.716 45.5701 156.543 44.9949 156.515 44.2674C156.486 43.4779 156.615 42.52 157.128 42.3459C156.207 41.9718 154.364 43.6629 155.965 41.7563C155.28 42.1568 154.218 42.7355 153.473 43.4497C152.726 44.1634 152.316 45.0661 152.98 46.228C152.558 46.4659 151.99 45.5982 151.473 45.0885C150.517 46.363 149.573 47.4927 148.547 48.4638L148.52 48.4891C148.019 48.969 147.521 49.4442 146.988 49.8728C146.444 50.3156 145.889 50.7455 145.324 51.1622C143.012 52.8131 140.389 54.3542 136.876 56.1597C139.435 53.386 141.972 51.692 144.406 49.9308C145.006 49.4826 145.598 49.0373 146.177 48.5782C146.755 48.1173 147.299 47.6151 147.83 47.098C148.095 46.8382 148.353 46.5705 148.604 46.2946C148.849 46.0102 149.086 45.7149 149.314 45.4103C149.769 44.7966 150.2 44.1548 150.562 43.429C149.1 43.2216 148.049 43.4032 147.119 43.5009C146.193 43.6008 145.349 43.5566 144.372 42.8872C145.024 44.0082 145.556 44.0393 146.157 44.6288C145.58 45.022 145.031 45.4533 144.511 45.92C144.083 46.2895 143.758 46.6164 143.455 46.9014C143.152 47.1865 142.872 47.4295 142.533 47.6278C142.193 47.8231 141.787 47.9628 141.248 48.057C140.307 46.825 140.701 46.8187 141.21 46.8917C141.722 46.9692 142.348 47.11 141.826 46.2205C141.008 45.6223 140.087 46.1757 139.244 46.983C138.401 47.7829 137.581 48.7799 137.112 49.0873C138.256 49.9297 138.723 49.301 139.088 48.7115C139.462 48.1271 139.72 47.5439 140.613 48.4558C141.007 49.5027 139.775 49.0856 140.297 48.654C139.772 49.0672 139.042 50.0412 138.146 50.9174C137.246 51.7782 136.138 52.4718 134.982 52.2822C134.038 52.5643 134.986 51.1117 133.901 50.0682C132.644 50.9715 131.419 51.6455 130.222 52.1368C129.04 52.6603 127.889 53.0027 126.814 53.3831C125.738 53.7601 124.705 54.1031 123.732 54.6329C123.233 54.8851 122.754 55.1763 122.301 55.504C121.809 55.8661 121.344 56.2628 120.908 56.6912C119.613 56.809 120.556 55.0627 119.774 55.057C118.9 55.1265 118.1 55.2219 117.577 55.642C117.054 56.0632 116.8 56.8084 117.045 58.1358C116.526 57.0888 115.524 56.2867 114.661 56.1534C113.795 56.0258 113.056 56.5131 112.993 58.1266C111.298 56.2103 109.075 57.0182 106.672 57.7359C104.287 58.4645 101.761 59.0316 100.16 56.8734C99.3339 56.9372 99.9969 58.9552 100.092 59.3368C99.4292 59.2264 98.7077 59.0368 97.9414 58.8242C97.14 58.5816 96.3322 58.3604 95.519 58.1611C93.8222 57.7479 91.9566 57.5112 89.8919 57.918C89.4797 57.6738 89.8219 56.3533 89.885 55.4311C88.9207 55.2489 88.2927 55.9747 87.5206 56.3533C87.6423 58.2605 88.6997 55.8408 89.4091 56.6188C89.0923 58.507 87.6865 57.4336 86.7107 57.4738C86.3043 57.1883 86.849 56.3993 87.2078 56.3074C86.551 55.7692 85.7925 55.3692 84.9777 55.1311C84.2062 54.8984 83.4112 54.7731 82.5875 54.6973L82.4305 54.6837C81.6553 54.6164 80.8648 54.5477 80.0572 54.4433C79.1945 54.3359 78.322 54.1457 77.4512 53.8107L76.8961 56.212C76.1693 56.0496 75.4451 55.8753 74.724 55.6891C75.2085 54.8628 75.9277 55.08 76.5569 54.8708C76.1826 54.11 75.5535 53.6762 74.7665 53.4153C74.3733 53.2832 73.9405 53.1935 73.4836 53.1177C73.0289 53.0349 72.5491 52.97 72.0589 52.8982C71.0773 52.762 70.0601 52.5775 69.1348 52.1839C68.2072 51.8006 67.3794 51.1841 66.7882 50.1998C64.1139 53.2452 61.7891 51.9472 58.6297 50.5445C56.8192 49.7314 57.2561 48.2541 56.1499 48.2081C55.7722 48.1915 55.2057 47.8266 54.5243 47.3043C53.847 46.771 53.0497 46.0953 52.1972 45.4609C51.3506 44.8116 50.4361 44.2329 49.5126 43.879C48.5901 43.5238 47.6389 43.4308 46.6999 43.7813C45.9829 42.8021 45.0702 41.881 44.0858 40.9415C43.5724 40.4625 43.0428 40.0012 42.498 39.5584C41.9389 39.1021 41.3827 38.6379 40.7852 38.1828C39.5814 37.2731 38.3525 36.3549 37.038 35.4401L35.0766 34.0593L33.0801 32.6687C30.3983 30.8064 27.7234 28.9136 25.2758 26.9817C24.0422 26.0049 22.8896 25.043 21.7932 24.0339C20.7408 23.0766 19.7461 22.0577 18.814 20.9827C18.1757 20.238 17.7561 19.3054 17.2527 18.5641C16.7476 17.8223 16.146 17.2224 15.1747 17.2138C14.3482 17.2052 14.975 14.3373 14.5009 13.927C14.0726 13.5598 13.1766 13.8149 12.3718 13.8552C11.5642 13.8839 10.8501 13.7402 10.7227 12.4991C11.1428 11.5314 11.4488 11.567 11.7502 11.6503C11.7421 10.997 11.2703 9.98164 10.2899 12.2629C10.1728 11.7354 9.95923 11.3918 9.7101 11.1493C9.4604 10.9102 9.1774 10.7568 8.91966 10.5804C8.40419 10.2282 7.9955 9.78455 8.11604 8.36812C7.41574 8.31583 6.73611 7.9544 6.05074 7.41655C5.7198 7.15895 5.39154 6.85222 5.05258 6.53548L5.01463 6.50004C4.64702 6.16515 4.28587 5.82319 3.93144 5.47434L0.388596 1.15781Z"
					fill="url(#paint0_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="-3.55437e-06"
						y1="26"
						x2="169"
						y2="65"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#A4EAF1" stop-opacity="0.8" />
						<stop offset="1" stop-color="#9CA2DE" stop-opacity="0.25" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				className="svg__two"
				width="35vw"
				height="300"
				viewBox="0 0 555 300"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 302.5V81.5C77.5 175 241 115.5 555 0C401.667 97.3333 244 341 0 302.5Z"
					fill="url(#paint0_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="427.5"
						y1="93"
						x2="-44"
						y2="241"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#1F4B7D" stop-opacity="0" />
						<stop offset="1" stop-color="#45668E" stop-opacity="0.6" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				className="svg__three"
				width="18vw"
				height="480"
				viewBox="0 0 230 528"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M240.439 480.481C279.719 377.136 462.24 297.055 788 240.241C511.488 80.0796 328.967 0 240.439 0C107.647 0 0 107.559 0 240.241C0 372.922 181.519 635.498 240.439 480.481Z"
					fill="url(#paint0_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="779.23"
						y1="258.123"
						x2="34.5"
						y2="42.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#225DA1" />
						<stop offset="1" stop-color="#BCC7D3" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				className="svg__four"
				width="20vw"
				height="257"
				viewBox="0 0 290 260"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M153.83 244.998C152.824 245.425 151.685 245.807 150.46 246.128C149.176 246.444 147.879 246.704 146.573 246.907C143.886 247.358 141.043 247.517 138.48 247.617C135.869 247.675 133.551 247.627 131.822 247.498C131.506 246.13 132.341 246.192 133.05 246.096C133.749 245.993 134.317 245.734 133.5 243.758C134.871 244.618 135.031 248.317 137.487 246.725C137.452 244.215 136.165 244.669 135.052 244.716C136.134 242.479 137.595 243.35 139.089 244.161C140.46 244.914 141.896 245.632 143.027 243.942C143.103 243.789 143.195 243.622 143.324 243.431C143.228 243.625 143.128 243.79 143.026 243.942C142.273 245.458 144.017 245.22 146.808 244.432C149.889 243.596 154.182 242.087 157.857 241.737C157.316 243.069 155.845 244.148 153.831 244.998H153.83ZM70.2715 210.782C69.7661 211.309 67.9438 211.266 66.4916 209.093C65.6508 209.832 64.5838 209.891 63.3642 209.478C63.744 208.601 64.3749 208.546 64.6682 207.414C64.126 207.05 63.8912 207.675 63.665 208.354C61.9098 204.749 67.2318 206.421 66.4916 209.093C70.0388 209.182 70.779 210.251 70.2715 210.782ZM59.9468 213.375C61.2367 211.232 65.351 213.586 65.8434 214.924C63.6964 216.488 62.9335 214.352 59.9468 213.375ZM508.445 72.238C507.961 67.8784 507.151 63.5615 506.022 59.3239C505.798 58.4929 505.563 57.665 505.316 56.8405C504.821 55.2019 504.274 53.4895 503.682 51.9183C503.084 50.3013 502.441 48.7008 501.756 47.1188C501.065 45.5009 500.326 44.0046 499.535 42.4442C497.955 39.318 496.166 36.3634 494.169 33.387C489.946 27.2151 484.963 21.6022 479.34 16.6811C477.537 15.1001 475.628 13.6276 473.688 12.2345L472.957 11.7165L472.288 11.2637L470.962 10.3994C470.074 9.83419 469.174 9.28753 468.263 8.75973C464.778 6.76083 461.118 5.08632 457.329 3.75717C450.025 1.19889 442.88 0.139088 436.272 0.0131279C429.652 -0.112832 423.55 0.680932 418.003 1.82217C412.449 2.96667 407.44 4.45755 402.888 5.79424C401.729 6.14795 400.585 6.54897 399.458 6.99629C398.376 7.45561 397.294 7.9475 396.244 8.48392C394.176 9.59912 392.166 10.8213 390.224 12.1454C386.318 14.7624 382.593 17.9059 379.119 21.0234C372.149 27.3051 366.152 33.8355 360.838 37.8152C360.239 38.2604 359.572 36.0137 358.389 36.6316C355.385 38.268 352.193 42.0761 349.271 46.0014C346.332 49.992 343.665 53.9955 341.379 56.0076C338.695 55.5538 337.354 58.5464 336.112 60.8538C334.854 63.145 333.702 64.8281 331.091 61.7442C330.116 63.6805 329.027 65.5569 327.831 67.3636C326.692 69.0901 325.512 70.7232 324.292 72.1956C323.073 73.68 321.814 75.008 320.537 76.273C319.303 77.5202 318.008 78.7052 316.658 79.8238C316.003 80.3667 315.345 80.8879 314.685 81.3863C314.027 81.8902 313.374 82.4125 312.718 82.8946C311.439 83.8421 310.133 84.7506 308.8 85.619C307.5 86.4486 306.244 87.3455 305.002 88.1393L301.396 90.4782C301.604 93.4274 304.075 95.5655 303.065 96.0574C301.589 97.1954 300.702 92.4817 299.189 93.6305C299.344 96.3647 301.721 97.4191 300.598 98.0728C299.953 96.8305 299.296 95.7186 298.587 95.0443C299.021 97.0162 300.202 97.6666 299.663 98.3735C299.192 98.518 299.4 99.4507 299.094 99.7775C298.222 99.3063 297.62 95.546 296.683 95.6556C297.457 98.0749 296.86 97.8599 296.216 97.6829C295.574 97.5092 294.873 97.3463 295.484 99.783C296.254 99.4355 296.955 100.197 297.614 101.477C294.574 102.405 291.525 105.182 288.805 107.94C288.137 108.599 287.456 109.245 286.763 109.878C286.098 110.5 285.457 111.105 284.809 111.61C283.517 112.627 282.236 113.31 280.916 113.408C281.143 116.085 280.373 116.923 279.401 117.589C278.915 117.922 278.382 118.212 277.911 118.664C277.441 119.122 277.039 119.771 276.818 120.768C274.97 116.457 274.08 118.376 274.065 119.611C274.633 119.453 275.21 119.386 276.002 121.215C275.762 123.56 274.416 123.832 272.893 123.777C271.376 123.701 269.687 123.219 268.879 123.913C267.986 124.688 269.167 130.108 267.609 130.124C265.778 130.14 264.644 131.274 263.692 132.676C262.743 134.077 261.952 135.839 260.748 137.246C258.991 139.278 257.116 141.203 255.132 143.012C253.065 144.919 250.892 146.737 248.567 148.583C243.952 152.233 238.91 155.81 233.854 159.329L230.09 161.957L226.393 164.566C223.915 166.295 221.598 168.03 219.329 169.749C218.202 170.609 217.153 171.487 216.1 172.349C215.072 173.186 214.074 174.057 213.106 174.962C211.25 176.738 209.53 178.478 208.178 180.329C206.408 179.666 204.615 179.842 202.876 180.513C201.135 181.182 199.411 182.276 197.815 183.503C196.208 184.702 194.705 185.979 193.428 186.986C192.143 187.973 191.075 188.663 190.363 188.694C188.278 188.781 189.101 191.573 185.688 193.109C179.732 195.76 175.35 198.213 170.308 192.458C169.193 194.318 167.633 195.483 165.884 196.207C164.14 196.951 162.222 197.3 160.372 197.557C159.448 197.693 158.543 197.815 157.686 197.972C156.825 198.115 156.009 198.285 155.267 198.534C153.784 199.027 152.598 199.847 151.892 201.285C153.078 201.68 154.434 201.27 155.348 202.831C153.988 203.183 152.623 203.512 151.253 203.819L150.206 199.281C148.565 199.914 146.92 200.274 145.293 200.477C143.668 200.688 142.08 200.821 140.523 200.957C138.971 201.1 137.472 201.337 136.017 201.777C134.481 202.227 133.052 202.982 131.813 203.999C132.49 204.173 133.517 205.664 132.75 206.204C130.911 206.128 128.261 208.156 127.663 204.588C129.001 203.118 130.994 207.69 131.224 204.086C129.768 203.371 128.584 201.999 126.766 202.343C126.885 204.086 127.53 206.582 126.753 207.043C122.861 206.274 119.344 206.722 116.145 207.502C114.612 207.879 113.089 208.297 111.579 208.755C110.134 209.157 108.774 209.516 107.525 209.724C107.703 209.003 108.953 205.19 107.396 205.069C104.377 209.147 99.6156 208.076 95.1204 206.699C90.5896 205.343 86.3985 203.816 83.204 207.437C83.085 204.388 81.6923 203.467 80.0593 203.708C78.4318 203.96 76.5424 205.476 75.5652 207.455C76.0273 204.946 75.5479 203.538 74.5621 202.742C73.5752 201.948 72.0678 201.768 70.4208 201.637C68.9458 201.647 70.7238 204.947 68.2814 204.725C67.4607 203.915 66.5834 203.165 65.6562 202.481C64.8016 201.862 63.8995 201.312 62.9584 200.835C61.1242 199.834 59.1764 199.186 57.1474 198.473C55.1216 197.755 52.9519 197.107 50.7228 196.118C48.4665 195.19 46.1572 193.916 43.7874 192.209C41.7421 194.181 43.5298 196.926 41.7497 196.393C39.5714 196.751 37.4829 195.441 35.785 193.814C34.0969 192.158 32.7204 190.318 31.7303 189.537C32.715 190.352 30.3927 191.141 31.134 189.162C32.8178 187.439 33.3048 188.541 34.0092 189.645C34.6985 190.76 35.5783 191.947 37.735 190.356C36.8498 189.775 35.3045 187.891 33.7149 186.379C32.1263 184.854 30.3895 183.808 28.8485 184.938C27.8638 186.619 29.0444 186.353 30.0086 186.207C30.9684 186.069 31.7119 186.081 29.9383 188.409C28.9221 188.231 28.156 187.967 27.5143 187.598C26.8758 187.223 26.3477 186.764 25.7775 186.225C25.2061 185.686 24.5936 185.069 23.7852 184.37C22.8065 183.488 21.7701 182.673 20.6828 181.93C21.8158 180.816 22.82 180.758 24.0482 178.639C22.2064 179.904 20.6157 179.988 18.8702 179.799C17.1172 179.614 15.1347 179.271 12.3796 179.663C13.0613 181.035 13.8729 182.247 14.7311 183.407C15.1617 183.983 15.6076 184.541 16.0707 185.078C16.5436 185.6 17.0306 186.106 17.5294 186.596C18.5304 187.574 19.5563 188.523 20.646 189.394C21.7368 190.261 22.8535 191.103 23.9844 191.95C28.5726 195.278 33.3556 198.479 38.1798 203.72C31.5571 200.309 26.6118 197.396 22.253 194.277C21.1884 193.489 20.1424 192.677 19.1159 191.84C18.0932 191.016 17.141 190.1 16.1779 189.177C14.2441 187.342 12.4629 185.208 10.6622 182.799C9.68616 183.762 8.61701 185.402 7.82056 184.952C9.07151 182.757 8.29995 181.051 6.89101 179.702C5.48641 178.353 3.48555 177.259 2.1924 176.502C5.21155 180.105 1.7379 176.909 0 177.616C0.968508 177.945 1.21199 179.755 1.1568 181.247C1.10269 182.622 0.778053 183.709 0.425278 183.025C1.16654 184.907 3.03321 186.313 4.80358 187.67C6.64862 189.076 8.48175 190.307 9.03039 192.014C9.29876 192.802 6.61723 194.221 7.48294 195.254C7.4126 195.159 9.67858 192.533 10.2619 193.004C11.7952 194.245 11.1341 197.522 12.6317 199.166C14.1218 200.726 17.6041 201.063 19.2598 202.307C27.3249 208.392 36.4224 215.008 46.8282 220.527C57.2805 226.148 68.6039 230.475 79.2326 232.764C86.3703 234.323 93.4496 235.093 100.28 235.43C107.117 235.766 113.709 235.676 120.04 235.516C126.371 235.355 132.447 235.133 138.328 235.156C144.211 235.212 150.04 235.435 155.925 236.204C153.471 236.27 151.021 236.454 148.583 236.753C146.069 237.007 143.517 237.435 140.891 237.821C135.693 238.662 130.111 239.647 124.224 240.395C118.339 241.139 112.124 241.622 105.768 241.402C99.4208 241.185 92.927 240.26 86.7058 238.264C85.1475 242.103 83.4161 237.268 82.3232 241.344C88.9144 242.039 97.1007 242.626 104.886 243.05C112.69 243.501 120.108 243.839 125.673 244.685C126.506 247.78 122.186 244.203 122.985 247.288C124.749 247.982 128.448 244.626 128.355 249.094C116.154 249.811 101.94 249.411 87.2111 247.594C79.7854 246.676 72.4007 245.449 65.0761 243.918C63.2636 243.567 61.424 243.125 59.6287 242.732C57.8356 242.349 56.0371 241.901 54.2678 241.471L51.6317 240.835L49.0022 240.147C47.2675 239.685 45.5426 239.264 43.8772 238.809C46.1432 240.503 48.5801 241.955 51.1361 243.287C53.6618 244.541 56.3671 245.741 59.1904 246.757C62.0429 247.832 65.0177 248.761 68.2349 249.749L73.1781 251.171C74.8965 251.672 76.6203 252.113 78.4524 252.626C86.248 254.756 94.5978 256.014 102.809 256.591C111.016 257.163 119.083 257.071 126.625 256.707L129.441 256.566L132.185 256.39C134.02 256.281 135.788 256.146 137.534 256.014L147.575 255.225C154.027 254.747 159.96 254.294 165.164 254.4C166.621 252.706 171.472 250.929 176.523 249.678C179.055 249.07 181.63 248.56 183.902 248.375C186.163 248.16 188.106 248.22 189.348 248.726C196.7 246.213 204.39 243.139 212.096 239.701C219.806 236.266 227.533 232.47 235.041 228.592C238.844 226.65 242.392 224.719 245.964 222.878C249.326 221.068 252.771 219.312 255.821 217.761L258.155 216.609L260.414 215.524C261.847 214.842 263.293 214.187 264.751 213.558C265.453 213.264 266.147 212.973 266.833 212.687C267.505 212.414 268.175 212.151 268.841 211.9C270.134 211.409 271.442 210.957 272.762 210.546C272.556 211.009 271.824 211.216 272.434 212.169C274.534 211.406 276.573 210.484 278.533 209.411C280.481 208.356 282.338 207.141 284.084 205.777C285.703 204.493 287.236 203.023 288.419 201.515C289.565 200.036 290.486 198.425 291.052 196.734C288.859 194.726 288.066 199.62 285.826 197.47C286.572 196.457 287.36 195.322 288.455 194.407C289.001 193.938 289.62 193.564 290.288 193.299C291.068 193.001 291.894 192.839 292.728 192.822C293.527 194.077 293.141 194.482 294.278 195.977L295.592 195.014L296.825 194.14L299.279 192.437L301.573 190.925C302.332 190.429 303.106 189.919 303.788 189.51L305.887 188.207C306.246 187.975 306.567 187.792 306.886 187.605L307.848 187.036L308.805 186.46C309.125 186.26 309.44 186.069 309.722 185.914C310.304 185.583 310.882 185.243 311.454 184.894C312.047 184.516 312.552 184.242 313.066 183.931C313.581 183.624 314.094 183.29 314.594 182.966C315.587 182.391 316.543 181.754 317.456 181.058C318.484 180.399 319.467 179.672 320.4 178.883C321.431 178.146 322.431 177.281 323.46 176.337C326.431 173.747 329.525 170.697 332.869 167.191C333.717 166.339 334.586 165.469 335.453 164.538L336.77 163.123L338.136 161.719L343.849 155.646C347.838 151.468 352.145 146.821 356.875 142.031C359.225 139.551 361.696 137.163 364.247 134.546L368.16 130.694C369.489 129.38 370.843 128.033 372.225 126.732C373.248 125.755 374.306 124.76 375.374 123.776L376.981 122.313L378.575 120.938C380.674 119.14 382.72 117.452 384.329 116.144C386.992 113.982 389.313 112.799 391.577 111.733C393.842 110.671 396.035 109.713 398.626 108.071C401.934 105.988 405.725 102.889 410.354 100.297C412.646 99.0185 415.162 97.8458 417.793 97.0705C419.114 96.6676 420.463 96.3624 421.829 96.1573C423.176 95.9977 424.601 95.888 425.972 95.9836C428.347 96.0835 430.959 96.8099 433.652 98.0076C436.348 99.202 439.096 100.898 441.699 102.95C444.31 104.992 446.813 107.359 449.139 109.757C449.731 110.347 450.273 110.962 450.848 111.546C451.414 112.135 452.003 112.699 452.533 113.274C453.069 113.833 453.621 114.376 454.189 114.902C454.467 115.16 454.748 115.41 455.032 115.652C455.302 115.897 455.573 116.135 455.848 116.363C457.026 117.342 458.249 118.266 459.513 119.13C460.654 119.947 461.85 120.685 463.092 121.338C465.501 122.594 467.958 123.384 470.466 123.636C472.975 123.89 475.533 123.603 478.094 122.775C480.655 121.951 483.215 120.584 485.691 118.779C488.152 116.987 490.454 114.796 492.636 112.367C493.708 111.168 494.74 109.935 495.731 108.667C496.715 107.415 497.658 106.148 498.566 104.903L501.163 101.329C501.938 100.263 502.742 99.2192 503.574 98.1976C505.144 96.2985 506.654 94.8358 508.204 94.1919C509.199 86.7103 509.24 79.2287 508.445 72.238Z"
					fill="url(#paint0_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="254.5"
						y1="0"
						x2="254.5"
						y2="257"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.46875" stop-color="#9CA2DE" />
						<stop offset="1" stop-color="#A4EAF1" stop-opacity="0.31" />
					</linearGradient>
				</defs>
			</svg>

			<svg
				className="svg__five"
				width="250"
				height="120"
				viewBox="0 0 320 160"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M-6.95011e-06 159C68.5 159 143.5 159 143.5 159C184 159 285 159 319 159C319 82.232 223.83 -4.16e-06 147.062 -7.51564e-06C70.2953 -1.08712e-05 110.547 140.293 -6.95011e-06 159Z"
					fill="url(#paint0_linear)"
					fill-opacity="0.5"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="133.878"
						y1="326.235"
						x2="133.878"
						y2="3.67186"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="white" />
						<stop offset="1" stop-color="white" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}

export default Login;
