import {CategoryItem} from "../category-item/category-item.component";
import "./directory.styles.scss";
import React from "react";

export const Directory = ({categories}) => {
	return (
		<div className="directory-container">
			{categories.map(category => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	)
}