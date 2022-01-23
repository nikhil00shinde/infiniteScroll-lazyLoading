import React, { useEffect } from "react";
const axios = require("axios");

const style = {
	btn: {
		backgroundColor: "grey",
		height: "4rem",
		width: "80%",
		fontSize: "3rem",
	},
};
export default function IS() {
	const [info, setInfo] = React.useState({
		photos: [],
		tpages: 100,
		cpage: 0,
		limit: 10,
	});

	useEffect(() => {
		let loader = document.querySelector(".loader");
		console.log(loader);
		observer.observe(loader);
	}, []);

	const callback = (entries, observer) => {
		console.log(entries);
		entries.forEach((entry) => {
			if (entry.isIntersecting && info.cpage < info.tpages) {
				axios
					.get("Add flickr link")
					.then((res) => {
						setInfo((prev) => {
							console.log(prev);
							return {
								...prev,
								cpage: prev.cpage + 1,
								photos: [...prev.photos, ...res?.data?.photos?.photo],
							};
						});
					})
					.catch((err) => {
						alert(err.message);
					});
			}
		});
	};

	let observer = new IntersectionObserver(callback, {
		threshold: 1.0,
	});

	return (
		<>
			{info.photos.map((photo) => (
				<div>
					<img alt="" src={"Add Image URL"} />
				</div>
			))}
			<div className="loader" style={style.btn}>
				{info.cpage < info.tpages ? "Loading More Images" : "No More Loading"}
			</div>
		</>
	);
}
