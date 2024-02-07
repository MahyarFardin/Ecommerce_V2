import { useState } from "react";

const Login = () => {
	// Inputs styles
	const [isInputFocused, setIsInputFocused] = useState(false);
	const handleInputOnFocus = (id) => {
		setIsInputFocused(id);
	};
	const handleInputBlur = () => {
		setIsInputFocused(null);
	};
	const inputStyle = (id) => {
		return {
			width: "360px",
			border: "none",
			borderBottom: `3px solid ${isInputFocused === id ? "red" : "gray"}`,
			outline: isInputFocused === id ? "none" : "initial",
			transition:
				isInputFocused === id
					? "border-bottom-color 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0ms"
					: "border-bottom-color 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0ms",
		};
	};

	// Input labels style
	const LabelStyle = (id) => {
		return {
			cursor: "text",
			zIndex: 1,
			width: "max-content",
			border: "none",
			fontSize: "13px",
			fontWeight: "100",
			color: `${isInputFocused === id ? "red" : "gray"}`,
			transform:
				isInputFocused === id
					? "translateY(-10px)"
					: "translateY(20px)",
			transition:
				isInputFocused === id
					? `color 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0ms , transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0ms`
					: `color 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0ms , transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0ms`,
		};
	};

	// languge buttons style
	const headerBtn = {
		background: "none",
		border: "none",
		cursor: "pointer",
	};

	// change direction button style
	const [isFlipped, setIsFlipped] = useState(false);
	const flipDirection = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<>
			<div
				className={`container
				flex
				shrink-0
				w-[1440px] 
                py-[20px]
				my-[15px]
				h-[700px]
				mx-[50px]
				justify-center
				${isFlipped ? "flex-row-reverse" : ""}
				`}
			>
				<div
					className="LoginForm
					w-[600px]
					bg-[#fff]
					shrink-0"
				>
					<div className="Header ">
						<nav
							className={` my-[10px] 
						flex
						${isFlipped ? "justify-end mr-[20px]" : "justify-start ml-[20px]"}
						gap-[10px] 
						font-[light]`}
						>
							<button style={headerBtn}>EN</button>
							<button style={headerBtn}>FR</button>
							<button style={headerBtn}>ES</button>
						</nav>
					</div>
					<div className="title flex flex-col items-center gap-10 mb-8">
						<h2 className="font-[100]">Rebino</h2>

						<h3 className=" font-[100] ">WELCOME TO REBINO</h3>
					</div>
					<div className="Body flex flex-col items-center gap-8">
						<div // username
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<label
								className="uppercase"
								htmlFor="username"
								style={LabelStyle(1)}
							>
								username
							</label>
							<input
								id="username"
								type="text"
								style={inputStyle(1)}
								onFocus={() => handleInputOnFocus(1)}
								onBlur={handleInputBlur}
							/>
						</div>
						<div // email
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<label htmlFor="email" style={LabelStyle(2)}>
								email
							</label>
							<input
								id="email"
								type="text"
								style={inputStyle(2)}
								onFocus={() => handleInputOnFocus(2)}
								onBlur={handleInputBlur}
							/>
						</div>

						<div // password
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<label htmlFor="password" style={LabelStyle(3)}>
								password
							</label>
							<input
								normal-case
								id="password"
								type="text"
								style={inputStyle(2)}
								onFocus={() => handleInputOnFocus(3)}
								onBlur={handleInputBlur}
							/>
						</div>
						<div // forget
							className="ml-[-245px] mt-[-25px] "
						>
							<input id="forget" type="checkbox" />
							<label
								forhtml="forget"
								className="text-[12px] text-[gray] "
							>
								Remember me
							</label>
						</div>
						<button
							type="submit"
							className="
						w-[190px]
						h-[60px]
						bg-[#FAEDCD]
						rounded-[45px]
						"
						>
							Sign IN
						</button>
						<div className="flex flex-row mb-[-35px] ">
							<hr
								className="
						w-[120px]
						text-[black]
						text-[12px]
						border-t-[2px]
						"
							/>
							<span className="mt-[-10px] mx-[15px] ">or</span>
							<hr
								className="
						w-[120px]
						text-[12px]
						text-[black]
						border-t-[2px]
						"
							/>
						</div>
						<button
							type="submit"
							className="
						w-[280px]
						h-[60px]
						text-[12px]
						"
						>
							Sign IN With Google
						</button>
					</div>
					<div
						className={`footer mt-[30px] flex 
					 
					${isFlipped ? "justify-end mr-[20px]" : "justify-start ml-[20px]"}
					
					`}
					>
						<button className="text-[12px]">Need help?</button>
					</div>
				</div>
				<div
					className={`
				Pics
				w-[600px]
				bg-[purple] 
				shrink-0 
				p-[20px] 
				
				${isFlipped ? "rounded-r-[35px] mr-[-35px]" : "rounded-l-[35px] ml-[-35px]"}
				`}
				>
					<div>pics</div>
					<button
						onClick={flipDirection}
						className={`
						changeDir 
						w-[60px] 
						h-[60px] 
						rounded-[50px] 
						bg-[#D3B6AB] 
						z-40 
						mt-[250px] 
						
						${isFlipped ? "ml-[550px]" : "ml-[-47px]"}
						`}
					></button>
				</div>
			</div>
		</>
	);
};

export default Login;
