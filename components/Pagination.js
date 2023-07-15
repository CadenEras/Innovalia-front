/**@format*/

import React from "react";

const Pagination = ({ currentPage, perPage, totalItems, onPageChange }) => {
	const totalPages = Math.ceil(totalItems / perPage);
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);

	return (
		<div className='pagination'>
			{pageNumbers.map((pageNumber) => (
				<button
					key={pageNumber}
					className={pageNumber === currentPage ? "active" : ""}
					onClick={() => onPageChange(pageNumber)}
				>
					{pageNumber}
				</button>
			))}
		</div>
	);
};

export default Pagination;
