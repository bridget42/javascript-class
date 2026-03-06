// Higher-order function: A function that takes another function as a parameter
// In this case, 'map' takes a template function and an array of items
// It returns a function that expects the items array
const map = (template) => (items) => {
	// Check if items is an array and has content
	if (!items || !Array.isArray(items)) {
		return "<p>No products available</p>";
	}
	
	// Use JavaScript's built-in map() method to transform each item using the template function
	// map() calls the template function for each item and returns an array of HTML strings
	// Then join("") concatenates all the HTML strings into a single string
	return items.map(template).join("");
};

// Template function that creates HTML for a single product
// This function receives one product object and returns HTML markup as a string
const productTemplate = (product) => {
	// Use template literals (backticks) to create HTML with product data
	// ${} allows us to insert JavaScript variables into the string
	return `
		<div style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 5px; width: 250px; display: inline-block;">
			<!-- Product Title -->
			<h3>${product.title}</h3>
			
			<!-- Product Image (use optional chaining to safely access the image) -->
			${product.thumbnail ? `<img src="${product.thumbnail}" alt="${product.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px;">` : '<p>No image</p>'}
			
			<!-- Product Description -->
			<p><strong>Description:</strong> ${product.description}</p>
			
			<!-- Product Price -->
			<p><strong>Price:</strong> $${product.price}</p>
			
			<!-- Product Rating -->
			<p><strong>Rating:</strong> ${product.rating} ⭐</p>
			
			<!-- Product Stock -->
			<p><strong>In Stock:</strong> ${product.stock}</p>
		</div>
	`;
};

// Fetch data from the DummyJSON API
// fetch() sends an HTTP request to get data from the server
fetch("https://dummyjson.com/products")
	// .then() waits for the response and converts it to JSON format
	// response.json() returns a Promise with the parsed data
	.then((response) => response.json())
	
	// .then() receives the parsed data object
	// data.products contains the array of products from the API
	.then((data) => {
		// Log the products to the browser console for debugging
		console.log("✓ Products data fetched:", data.products);
		
		// Call the map higher-order function with the productTemplate function
		// The map function returns a new function that expects the items array
		// Pass data.products to that returned function to get HTML string of all products
		const productsHTML = map(productTemplate)(data.products);
		
		// Get the HTML element with id="products" where we want to display the products
		// document.getElementById() finds the element in the HTML page
		const productsContainer = document.getElementById("products");
		
		// Set the innerHTML of the container to the generated HTML
		// This inserts all the product cards into the page
		productsContainer.innerHTML = productsHTML;
		
		// Log success message to console
		console.log("✓ Products rendered successfully!");
	})
	
	// .catch() handles any errors that occur during fetch or processing
	// If the API is unavailable or there's a network error, this runs
	.catch((error) => {
		// Log the error to the console so you can see what went wrong
		console.error("Error fetching products:", error);
		
		// Display an error message to the user on the page
		document.getElementById("products").innerHTML = `<p style="color: red;">Failed to load products. Please try again later.</p>`;
	});